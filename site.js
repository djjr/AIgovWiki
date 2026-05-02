// ── Config ────────────────────────────────────────────────────────────────────
//
// Serve from the project root: python3 -m http.server 8000
// Then open: http://localhost:8000/viewer/
//
// Project-specific values come from config.js (loaded before this file).
// Do not hardcode project strings here — edit config.js instead.

const WIKI_BASE  = WIKI_CONFIG.wikiBase;
const HOME_SLUG  = WIKI_CONFIG.homeSlug;

// ── State ─────────────────────────────────────────────────────────────────────

let navSections   = [];           // [{label, pages: [{slug, label}]}]
let allNavPages   = [];           // flat list for search
const tagIndex    = new Map();    // tag → [{slug, label, type}]
const contentIndex = [];          // [{slug, label, type, text}] — plain-text bodies for full-text search
const acronymMap  = new Map();    // "ASL" → {expansion: "AI Safety Levels", slug: "wiki/definitions/..."}

// Acronyms too common or too ambiguous to auto-expand (would fire on almost every page).
const ACRONYM_EXCLUDE = new Set(['AI', 'ML', 'US', 'UK', 'EU', 'UN', 'US']);
const previewCache = new Map();   // slug → rendered HTML string
let hoverTimer    = null;
let previewActive = false;

// ── Graph data ────────────────────────────────────────────────────────────────

const linkMap   = new Map();   // slug → [outgoing target slugs]
const typeMap   = new Map();   // slug → page type string
let graphNodes  = [];          // [{id, label, type}]
let graphEdges  = [];          // [{source, target}]
let tagIndexReady = null;      // promise resolved when buildTagIndex finishes

// Infrastructure pages excluded from the graph — index links to everything
// (artificial hub), log is operational with no conceptual links.
const GRAPH_EXCLUDE = new Set(['index', 'log']);

// ── YAML frontmatter parser ───────────────────────────────────────────────────
//
// Handles the four formats used in this wiki:
//   key: value
//   key: "quoted value"
//   tags: [a, b, c]
//   multiline:
//     - item one
//     - item two

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { meta: {}, body: raw };

  const meta = {};
  const lines = match[1].split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Inline array: tags: [llm, pedagogy]
    const inlineArr = line.match(/^(\w+):\s*\[([^\]]*)\]\s*$/);
    if (inlineArr) {
      meta[inlineArr[1]] = inlineArr[2]
        .split(',')
        .map(s => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
      i++; continue;
    }

    // Multi-line array (key: then indented - items)
    const arrKey = line.match(/^(\w+):\s*$/);
    if (arrKey && i + 1 < lines.length && /^\s+-/.test(lines[i + 1])) {
      const key = arrKey[1];
      const vals = [];
      i++;
      while (i < lines.length && /^\s+-/.test(lines[i])) {
        vals.push(lines[i].replace(/^\s+-\s*/, '').replace(/^["']|["']$/g, '').trim());
        i++;
      }
      meta[key] = vals;
      continue;
    }

    // Simple key: value
    const simple = line.match(/^(\w+):\s*(.+)$/);
    if (simple) {
      meta[simple[1]] = simple[2].trim().replace(/^["']|["']$/g, '');
    }
    i++;
  }

  return { meta, body: match[2] };
}

// ── Slug utilities ────────────────────────────────────────────────────────────

function slugToLabel(slug) {
  return slug.split('/').pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, c => c.toUpperCase());
}

// encodeURIComponent encodes '/' as '%2F', breaking subpath slugs.
// Encode each segment individually so 'sources/ksas-ai' → 'sources/ksas-ai'.
function encodePathSlug(s) {
  return s.split('/').map(encodeURIComponent).join('/');
}

// Build a full fetch path for a wiki slug. Appends .md only if the slug
// has no extension already — prevents raw/file.md → raw/file.md.md.
//
// Obsidian wikilinks use vault-root paths, so links inside wiki/ pages look
// like [[wiki/sources/slug]]. WIKI_BASE already points to 'wiki/', so strip
// the leading 'wiki/' to avoid the double-prefix 'wiki/wiki/sources/slug.md'.
function wikiPath(slug) {
  if (slug.startsWith('wiki/')) slug = slug.slice(5);
  const withExt = /\.\w+$/.test(slug) ? slug : slug + '.md';
  const base    = slug.startsWith('raw/') ? '' : WIKI_BASE;
  return base + encodePathSlug(withExt);
}

// ── Nav: build from wiki/index.md ─────────────────────────────────────────────

async function buildNavFromIndex() {
  const base = [
    {
      label: 'Wiki',
      pages: [
        { slug: 'overview', label: 'Overview' },
        { slug: 'index',    label: 'Index' },
        { slug: 'log',      label: 'Log' },
        { slug: 'graph',    label: 'Graph' },
      ]
    }
  ];

  try {
    const resp = await fetch(WIKI_BASE + 'index.md', { cache: 'no-cache' });
    if (!resp.ok) return base;
    const text = await resp.text();

    let current = null;

    for (const line of text.split('\n')) {
      // Section heading: ## Sources  (wiki/sources/)
      // Also matches: ## Definitions  (wiki/definitions/)
      const sectionMatch = line.match(/^## ([^(\n]+?)(?:\s+\(wiki\/[^)]+\))?\s*$/);
      if (sectionMatch) {
        current = { label: sectionMatch[1].trim(), pages: [] };
        base.push(current);
        continue;
      }

      // Table row with a wikilink (skip empty / placeholder rows)
      if (current && line.includes('[[') && !line.includes('_(none yet)_')) {
        // Match only the path portion before any pipe-alias: [[path/slug|alias]]
        const linkMatch = line.match(/\[\[([^|\]]+)/);
        if (!linkMatch) continue;

        const slug  = linkMatch[1];
        let   label = slugToLabel(slug);

        // For the Definitions section, the second pipe-column is the term name —
        // much better than a slug-derived label. Strip the wikilink first so the
        // pipe inside [[path|alias]] doesn't corrupt the column split.
        if (current.label === 'Definitions') {
          const stripped = line.replace(/\[\[[^\]]+\]\]/g, '').split('|').map(c => c.trim()).filter(Boolean);
          // After removing [[...]], cols[0] = term name, cols[1] = domain, ...
          if (stripped.length >= 1) {
            const candidate = stripped[0].replace(/[_*]/g, '').trim();
            if (candidate && candidate.length < 60) label = candidate;
          }
        }

        current.pages.push({ slug, label });
      }
    }
  } catch (e) {
    console.warn('Could not parse index.md for nav:', e);
  }

  // Alphabetize pages within each section, except the top-level Wiki nav
  // and Queries (where recency order is more useful than alphabetical).
  const UNSORTED_SECTIONS = new Set(['Wiki', 'Queries']);
  for (const section of base) {
    if (!UNSORTED_SECTIONS.has(section.label)) {
      section.pages.sort((a, b) => a.label.localeCompare(b.label));
    }
  }

  return base;
}

// ── Nav renderer ──────────────────────────────────────────────────────────────

function renderNav(currentSlug, filter = '') {
  const nav = document.getElementById('nav');
  const q   = filter.toLowerCase().trim();

  // Load persisted open sections; default 'Wiki' open
  let openSections;
  try {
    openSections = new Set(JSON.parse(localStorage.getItem('nav-open') || '["Wiki"]'));
  } catch {
    openSections = new Set(['Wiki']);
  }

  // Auto-open the section containing the active page
  if (currentSlug) {
    for (const section of navSections) {
      if (section.pages.some(p => p.slug === currentSlug)) {
        openSections.add(section.label);
        break;
      }
    }
  }

  const html = navSections.map(section => {
    const pages = q
      ? section.pages.filter(p => p.label.toLowerCase().includes(q))
      : section.pages;
    if (!pages.length) return '';

    const isOpen = q || openSections.has(section.label);
    const links  = pages.map(p =>
      `<a href="#${encodeURIComponent(p.slug)}"
          class="nav-link${p.slug === currentSlug ? ' active' : ''}">
         ${escapeHtml(p.label)}
       </a>`
    ).join('');

    return `<details class="nav-group"${isOpen ? ' open' : ''} data-section="${escapeHtml(section.label)}">
      <summary class="nav-section">${escapeHtml(section.label)}</summary>
      ${links}
    </details>`;
  }).join('');

  nav.innerHTML = html || '<p class="nav-loading">No matches.</p>';

  // Persist open/closed state on toggle
  nav.querySelectorAll('details.nav-group').forEach(el => {
    el.addEventListener('toggle', () => {
      const opened = new Set(
        [...nav.querySelectorAll('details.nav-group[open]')].map(d => d.dataset.section)
      );
      try { localStorage.setItem('nav-open', JSON.stringify([...opened])); } catch {}
    });
  });
}

// ── Global search overlay ─────────────────────────────────────────────────────

// Slugs that are wiki infrastructure rather than knowledge pages.
// Excluded from the content index so they don't pollute search results —
// index.md especially contains every page title and would match almost anything.
const SEARCH_EXCLUDE = new Set(['index', 'log', 'overview', 'StartHere']);

function buildSearchIndex() {
  allNavPages = navSections.flatMap(s => s.pages);
}

// ── Full-text search helpers ──────────────────────────────────────────────────

// Reduce markdown body to plain prose so content search doesn't match
// markdown syntax characters. Order matters: handle wikilinks before bare
// link syntax so the alias extraction sees the full [[path|alias]] intact.
function stripMarkdown(md) {
  return md
    .replace(/^#{1,6}\s+/gm, '')                       // # headings → text
    .replace(/\*\*([^*\n]+)\*\*/g, '$1')               // **bold**
    .replace(/\*([^*\n]+)\*/g, '$1')                   // *italic*
    .replace(/`[^`\n]+`/g, '')                         // `inline code` (drop)
    .replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, '$2')     // [[path|alias]] → alias
    .replace(/\[\[([^\]]+)\]\]/g, '$1')                // [[bare]] → text
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')           // [text](url) → text
    .replace(/^\s*[-*+>]\s*/gm, '')                    // bullets / blockquotes
    .replace(/^\s*\d+\.\s+/gm, '')                     // numbered lists
    .replace(/\n{3,}/g, '\n\n')                        // collapse excess blanks
    .trim();
}

// Return an HTML snippet with the first occurrence of `query` inside `text`
// highlighted with <mark>. The surrounding window is `radius` characters
// on each side. Returns null if the query isn't found.
//
// We escape HTML *per segment* (prefix / match / suffix) rather than escaping
// the whole string first, which would make regex-based highlighting unsafe.
function getSnippet(text, query, radius = 100) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return null;

  const start  = Math.max(0, idx - radius);
  const end    = Math.min(text.length, idx + query.length + radius);
  const prefix = (start > 0 ? '…' : '') + text.slice(start, idx);
  const match  = text.slice(idx, idx + query.length);
  const suffix = text.slice(idx + query.length, end) + (end < text.length ? '…' : '');

  return escapeHtml(prefix) + '<mark>' + escapeHtml(match) + '</mark>' + escapeHtml(suffix);
}

// Expand known acronyms on their first occurrence in a page's markdown body.
//
// Called from preprocess() after wikilinks have been converted to [alias](#slug)
// markdown links — so any acronym still naked in the text is genuinely unexpanded.
//
// Strategy: a single regex pass that alternates between two capture groups:
//   Group 1 (skip)  — markdown links `[...](...)`, inline code `...`, and
//                     HTML tags — passed through unchanged.
//   Group 2 (maybe expand) — a bare uppercase token to look up in acronymMap.
//
// For the first occurrence of a known acronym we produce:
//   [ACR](#slug "Full Expansion")   if the acronym has a definition page
//   <abbr title="Full Expansion">ACR</abbr>   otherwise (future-proofing)
//
// Subsequent occurrences of the same acronym within the same page are left alone
// so the hover hint doesn't repeat on every instance.
function expandAcronyms(md) {
  if (!acronymMap.size) return md;

  const seen = new Set();

  // The alternation trick: group 1 matches things we must NOT touch; group 2
  // matches bare uppercase words. When group 1 fires we return the whole match
  // unchanged; when group 2 fires we check the map.
  return md.replace(
    /(`[^`\n]*`|\[[^\]]*\]\([^)]*\)|<[^>]+>)|(\b[A-Z]{2,6}\b)/g,
    (match, skip, acr) => {
      if (skip) return skip;                       // inside a link, code, or tag

      const info = acronymMap.get(acr);
      if (!info)        return match;              // not a registered acronym
      if (seen.has(acr)) return match;             // already expanded this page
      seen.add(acr);

      if (info.slug) {
        // Link to the definition page — the existing hover-preview system picks
        // this up automatically since it delegates on any a[href^="#"].
        // The markdown link title becomes the browser's native tooltip as a bonus.
        return `[${acr}](#${encodePathSlug(info.slug)} "${info.expansion}")`;
      }
      // No definition page yet — use a plain <abbr> for the browser tooltip.
      return `<abbr title="${escapeHtml(info.expansion)}">${acr}</abbr>`;
    }
  );
}

// ── Tag index ─────────────────────────────────────────────────────────────────
//
// Fetches all wiki pages in parallel and indexes them by tag.
// Runs once at startup; at ~36 pages it completes in well under a second.

async function buildTagIndex() {
  await Promise.all(allNavPages.map(async p => {
    try {
      const resp = await fetch(wikiPath(p.slug), { cache: 'no-cache' });
      if (!resp.ok) return;
      const raw          = await resp.text();
      const { meta, body } = parseFrontmatter(raw);

      // Tag index (unchanged)
      for (const tag of toArray(meta.tags)) {
        if (!tagIndex.has(tag)) tagIndex.set(tag, []);
        tagIndex.get(tag).push({ slug: p.slug, label: p.label, type: meta.type || '' });
      }

      // Acronym map — populated from definition pages that carry an `acronym:` field.
      // Expansion text is derived from the title by stripping the parenthetical "(ACR)"
      // and any " — Org" attribution suffix, leaving the clean concept name.
      if (meta.type === 'definition' && meta.acronym && !ACRONYM_EXCLUDE.has(meta.acronym)) {
        const expansion = (meta.title || '')
          .replace(/\s*\([^)]*\)\s*/g, ' ')   // remove (ASL), (CCL), etc.
          .replace(/\s*—.*$/, '')              // remove — Anthropic, — Google DeepMind, etc.
          .trim();
        if (expansion) {
          acronymMap.set(meta.acronym, { expansion, slug: p.slug });
        }
      }

      // Content index — skip infrastructure pages; strip markdown for clean matching
      if (!SEARCH_EXCLUDE.has(p.slug)) {
        contentIndex.push({
          slug:  p.slug,
          label: meta.title || p.label,
          type:  meta.type  || '',
          text:  stripMarkdown(body),
        });
      }

      // Type map and outgoing wikilinks (for graph)
      typeMap.set(p.slug, meta.type || p.slug.split('/')[0] || 'other');
      const wikilinkRe = /\[\[([^|\]#\n]+)(?:\|[^\]]+)?\]\]/g;
      const outLinks = [...body.matchAll(wikilinkRe)].map(m => m[1].trim());
      if (outLinks.length) linkMap.set(p.slug, outLinks);

    } catch {}
  }));

  buildGraphData();
}

function renderSearch(query) {
  const el = document.getElementById('search-results');
  if (!query.trim()) { el.style.display = 'none'; return; }

  const q = query.toLowerCase().trim();

  // ── Label hits: page title contains the query ──────────────────────────────
  // These are the strongest signal — the term appears in the page's own name.
  // Infrastructure pages (index, log, overview) are excluded — they're always
  // accessible via the nav but would clutter knowledge-oriented search results.
  const labelHitSlugs = new Set(
    allNavPages
      .filter(p => !SEARCH_EXCLUDE.has(p.slug) && p.label.toLowerCase().includes(q))
      .map(p => p.slug)
  );

  const labelHTML = [...labelHitSlugs].map(slug => {
    const p    = allNavPages.find(x => x.slug === slug);
    const type = slug.split('/')[0];
    return `<a class="search-hit" href="#${encodeURIComponent(slug)}">
      <span class="search-hit-label">${escapeHtml(p.label)}</span>
      <span class="search-hit-type">${escapeHtml(type)}</span>
    </a>`;
  });

  // ── Body hits: query appears in page body but not already in label hits ────
  // Cap at 6 so the panel doesn't become a wall of snippets.
  const bodyHits = contentIndex
    .filter(p => !labelHitSlugs.has(p.slug) && p.text.toLowerCase().includes(q))
    .slice(0, 6);

  const bodyHTML = bodyHits.map(p => {
    const type    = p.slug.split('/')[0];
    const snippet = getSnippet(p.text, q);
    return `<a class="search-hit search-hit-body" href="#${encodeURIComponent(p.slug)}">
      <span class="search-hit-label">${escapeHtml(p.label)}</span>
      <span class="search-hit-type">${escapeHtml(type)}</span>
      ${snippet ? `<span class="search-hit-snippet">${snippet}</span>` : ''}
    </a>`;
  });

  // ── Assemble ───────────────────────────────────────────────────────────────
  const total = labelHTML.length + bodyHTML.length;
  if (!total) {
    el.innerHTML = `<div class="search-empty">No pages match "${escapeHtml(query)}"</div>`;
  } else if (labelHTML.length && bodyHTML.length) {
    // Both: separate with a section label so the reader understands the split
    el.innerHTML = labelHTML.join('') +
      '<div class="search-section-divider">Also in body text</div>' +
      bodyHTML.join('');
  } else {
    el.innerHTML = [...labelHTML, ...bodyHTML].join('');
  }

  el.style.display = 'block';
}

// ── Markdown preprocessing ────────────────────────────────────────────────────

// Image extensions resolved as embeds rather than page transclusions.
const IMAGE_EXTS = /\.(png|jpe?g|gif|svg|webp|bmp|tiff?)$/i;

// Resolve ![[path/to/file]] transclusions.
// — Image embeds (![[photo.png]]) → <img> tag served from raw/assets/
// — Page embeds (![[sources/slug]]) → fetch markdown body and splice in
async function resolveTransclusions(md) {
  const pattern = /!\[\[([^\]]+)\]\]/g;
  const matches = [...md.matchAll(pattern)];
  for (const m of matches) {
    const slug = m[1];

    // Image embed — strip any leading path, serve from raw/assets/
    if (IMAGE_EXTS.test(slug)) {
      const filename = slug.split('/').pop();
      md = md.replace(m[0], `![${filename}](raw/assets/${filename})`);
      continue;
    }

    // Page transclusion — fetch and splice in the body
    try {
      const resp  = await fetch(wikiPath(slug), { cache: 'no-cache' });
      let   body  = resp.ok ? await resp.text() : `*(could not load: ${slug})*`;
      const { body: bodyOnly } = parseFrontmatter(body);
      md = md.replace(m[0], '\n\n' + bodyOnly + '\n\n');
    } catch {
      md = md.replace(m[0], `*(could not load: ${slug})*`);
    }
  }
  return md;
}

async function preprocess(md) {
  md = md.replace(/```dataviewjs[\s\S]*?```/g,
    '<span class="dataview-note">Dataview query — not rendered in web view</span>');
  md = md.replace(/```dataview[\s\S]*?```/g,
    '<span class="dataview-note">Dataview query — not rendered in web view</span>');

  md = await resolveTransclusions(md);

  // [[Target|Alias]] → markdown link
  md = md.replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, (_, target, alias) =>
    `[${alias}](#${encodePathSlug(target)})`);

  // [[Target]] → markdown link
  md = md.replace(/\[\[([^\]]+)\]\]/g, (_, name) =>
    `[${name}](#${encodePathSlug(name)})`);

  // Acronym expansion — first occurrence of each registered acronym becomes a
  // hover-linked reference to its definition page (or an <abbr> if no page exists).
  // Runs after wikilink conversion so we don't double-process already-linked terms.
  // buildTagIndex populates acronymMap asynchronously at startup; if it hasn't
  // finished yet (very fast first load), expansion is silently skipped this render.
  md = expandAcronyms(md);

  return md;
}

// ── Frontmatter → metadata block ─────────────────────────────────────────────

function renderMeta(meta) {
  if (!meta || !Object.keys(meta).length) return '';

  const rows = [];

  // Tags — links into tag browse view
  const tags = toArray(meta.tags);
  if (tags.length) {
    const html = tags.map(t =>
      `<a class="meta-tag" href="#tag:${encodeURIComponent(t)}">${escapeHtml(t)}</a>`
    ).join('');
    rows.push(`<span class="meta-label">Tags</span><span class="meta-value">${html}</span>`);
  }

  // Dates
  if (meta.created) {
    rows.push(`<span class="meta-label">Created</span><span class="meta-value">${escapeHtml(meta.created)}</span>`);
  }
  if (meta.updated && meta.updated !== meta.created) {
    rows.push(`<span class="meta-label">Updated</span><span class="meta-value">${escapeHtml(meta.updated)}</span>`);
  }

  // Raw source files (read-only; shown as monospace paths, not links)
  const sources = toArray(meta.sources).filter(Boolean);
  if (sources.length) {
    const html = sources.map(s => `<span class="meta-file">${escapeHtml(s)}</span>`).join(' ');
    rows.push(`<span class="meta-label">Sources</span><span class="meta-value">${html}</span>`);
  }

  // Related pages (wikilink strings → actual links)
  const related = toArray(meta.related).filter(Boolean);
  const relLinks = related.map(r => {
    const m = r.match(/\[\[([^|\]]+)(?:\|([^\]]+))?\]\]/);
    if (!m) return null;
    const slug  = m[1];
    const label = m[2] || slugToLabel(slug);
    return `<a href="#${encodePathSlug(slug)}">${escapeHtml(label)}</a>`;
  }).filter(Boolean);

  if (relLinks.length) {
    rows.push(`<span class="meta-label">Related</span><span class="meta-value">${relLinks.join(' · ')}</span>`);
  }

  if (!rows.length && !meta.type) return '';

  const typeClass = meta.type ? ` meta-type-${meta.type}` : '';
  const badge     = meta.type
    ? `<div class="meta-type-badge${typeClass}">${escapeHtml(meta.type)}</div>`
    : '';

  const grid = rows.length
    ? `<dl class="meta-grid">${rows.map(r => `<div class="meta-row">${r}</div>`).join('')}</dl>`
    : '';

  return `<div class="page-meta">${badge}${grid}</div>`;
}

// ── Tag browse page ───────────────────────────────────────────────────────────

function loadTagPage(tag) {
  renderNav('');
  const main = document.getElementById('content');
  main.removeAttribute('data-type');
  document.title = `Tag: ${tag} — ${WIKI_CONFIG.titleSuffix}`;

  const pages = tagIndex.get(tag) || [];

  if (!pages.length) {
    main.innerHTML = `<h1>Tag: ${escapeHtml(tag)}</h1><p>No pages indexed with this tag yet.</p>`;
    window.scrollTo(0, 0);
    return;
  }

  // Group by page type, preserving a sensible display order
  const ORDER = ['finding', 'definition', 'source', 'explanation', 'query', 'overview'];
  const byType = new Map();
  for (const p of pages) {
    const t = p.type || 'other';
    if (!byType.has(t)) byType.set(t, []);
    byType.get(t).push(p);
  }

  const sorted = [...byType.entries()].sort(([a], [b]) => {
    const ai = ORDER.indexOf(a), bi = ORDER.indexOf(b);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });

  const sections = sorted.map(([type, ps]) => {
    const items = ps
      .map(p => `<li><a href="#${encodePathSlug(p.slug)}">${escapeHtml(p.label)}</a></li>`)
      .join('');
    return `<h2>${escapeHtml(type)}</h2><ul>${items}</ul>`;
  }).join('');

  main.innerHTML = `<div class="page-type-label" data-type="tag">tag</div>
    <h1>Tag: ${escapeHtml(tag)}</h1>
    <p>${pages.length} page${pages.length !== 1 ? 's' : ''} tagged <strong>${escapeHtml(tag)}</strong></p>
    ${sections}`;
  window.scrollTo(0, 0);
}

// ── Page loader ───────────────────────────────────────────────────────────────

function getSlug() {
  const raw = window.location.hash.slice(1);
  return raw ? decodeURIComponent(raw) : HOME_SLUG;
}

async function loadPage(slug) {
  renderNav(slug);

  const main = document.getElementById('content');
  main.innerHTML = '<p class="loading">Loading…</p>';
  main.removeAttribute('data-type');

  // PDFs and other binary assets: show inline iframe rather than fetching as text
  if (/\.(pdf|png|jpg|jpeg|gif|svg)$/i.test(slug)) {
    const url = wikiPath(slug);
    const isPdf = slug.toLowerCase().endsWith('.pdf');
    main.innerHTML = isPdf
      ? `<p class="meta-file" style="margin-bottom:1rem;">
           ${escapeHtml(slug)} &mdash;
           <a href="${url}" target="_blank">open in new tab</a>
         </p>
         <iframe src="${url}" style="width:100%;height:80vh;border:none;"></iframe>`
      : `<img src="${url}" style="max-width:100%;" alt="${escapeHtml(slug)}">`;
    document.title = slugToLabel(slug) + ' \u2014 ' + WIKI_CONFIG.titleSuffix;
    window.scrollTo(0, 0);
    return;
  }

  const filename = wikiPath(slug);

  try {
    const resp = await fetch(filename, { cache: 'no-cache' });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const raw  = await resp.text();

    const { meta, body } = parseFrontmatter(raw);
    const processed      = await preprocess(body);
    const contentHtml    = marked.parse(processed);
    const metaHtml       = renderMeta(meta);

    // Apply page type to main for CSS targeting
    if (meta.type) main.dataset.type = meta.type;

    // Type badge injected before the content (appears above H1)
    const badge = meta.type
      ? `<div class="page-type-label" data-type="${escapeHtml(meta.type)}">${escapeHtml(meta.type)}</div>`
      : '';

    main.innerHTML = badge + contentHtml + metaHtml;

    // Update document title from frontmatter
    document.title = (meta.title || slugToLabel(slug)) + ` — ${WIKI_CONFIG.titleSuffix}`;

    // Backfill nav label with frontmatter title for future previews
    if (meta.title) {
      for (const section of navSections) {
        for (const p of section.pages) {
          if (p.slug === slug) p.label = meta.title;
        }
      }
    }

  } catch (err) {
    main.innerHTML = `<p class="error">Could not load <strong>${escapeHtml(filename)}</strong>: ${escapeHtml(err.message)}</p>`;
    document.title = `Not found — ${WIKI_CONFIG.titleSuffix}`;
  }

  window.scrollTo(0, 0);
}

// ── Page preview (hover popup) ────────────────────────────────────────────────
//
// Event delegation on both #nav and #content means we never need to re-wire
// listeners after a page render. Hover delay prevents flicker on casual mousing.
// Fetched content is cached; subsequent hovers are instant.

const previewEl = (() => {
  const el = document.getElementById('page-preview');
  el.addEventListener('mouseenter', () => { previewActive = true;  clearTimeout(hoverTimer); });
  el.addEventListener('mouseleave', () => { previewActive = false; scheduleHidePreview(); });
  return el;
})();

function scheduleHidePreview() {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(() => {
    if (!previewActive) previewEl.style.display = 'none';
  }, 400);
}

function positionPreview(x, y) {
  const PAD = 14, W = 360, H = 400;
  let left = x + PAD, top = y + PAD;
  if (left + W > window.innerWidth  - PAD) left = x - W - PAD;
  if (top  + H > window.innerHeight - PAD) top  = y - H - PAD;
  if (left < PAD) left = PAD;
  if (top  < PAD) top  = PAD;
  previewEl.style.left = left + 'px';
  previewEl.style.top  = top  + 'px';
}

async function showPreview(slug, label, x, y) {
  clearTimeout(hoverTimer);
  hoverTimer = setTimeout(async () => {
    positionPreview(x, y);

    if (previewCache.has(slug)) {
      previewEl.innerHTML     = previewCache.get(slug);
      previewEl.style.display = 'block';
      return;
    }

    previewEl.innerHTML     = `<div class="preview-title">${escapeHtml(label)}</div><p class="loading">Loading…</p>`;
    previewEl.style.display = 'block';

    try {
      const resp = await fetch(wikiPath(slug), { cache: 'no-cache' });
      if (!resp.ok) throw new Error('not found');
      const raw = await resp.text();

      const { meta, body } = parseFrontmatter(raw);
      // First ~50 non-blank lines — enough context without parsing the whole page
      const snippet = body.split('\n').slice(0, 50).join('\n');
      const html = `<div class="preview-title">${escapeHtml(meta.title || label)}</div>` +
                   marked.parse(await preprocess(snippet));

      previewCache.set(slug, html);
      previewEl.innerHTML     = html;
      previewEl.style.display = 'block';
    } catch {
      previewEl.style.display = 'none';
    }
  }, 260);
}

function attachPreviewDelegation(containerEl) {
  if (!containerEl) return;

  containerEl.addEventListener('mouseover', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const slug = decodeURIComponent(anchor.getAttribute('href').slice(1));
    if (slug.startsWith('tag:')) return;
    if (/\.(pdf|png|jpg|jpeg|gif|svg)$/i.test(slug)) return;
    if (slug === getSlug()) return;
    const page  = allNavPages.find(p => p.slug === slug);
    const label = page ? page.label : slugToLabel(slug);
    showPreview(slug, label, e.clientX, e.clientY);
  });

  containerEl.addEventListener('mouseout', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    if (e.relatedTarget && (e.relatedTarget === previewEl || previewEl.contains(e.relatedTarget))) return;
    scheduleHidePreview();
  });
}

// ── Utilities ─────────────────────────────────────────────────────────────────

function escapeHtml(s) {
  return String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function toArray(v) {
  if (!v) return [];
  return Array.isArray(v) ? v : [v];
}

// ── Graph ─────────────────────────────────────────────────────────────────────

function buildGraphData() {
  const slugSet = new Set(allNavPages.map(p => p.slug));

  graphNodes = allNavPages
    .filter(p => !GRAPH_EXCLUDE.has(p.slug))
    .map(p => ({
      id:    p.slug,
      label: p.label,
      type:  typeMap.get(p.slug) || 'other',
    }));

  const graphSlugSet = new Set(graphNodes.map(n => n.id));

  const edgeSet = new Set();
  graphEdges = [];
  for (const [source, targets] of linkMap) {
    if (!graphSlugSet.has(source)) continue;
    for (const raw of targets) {
      // Normalize target: try as-is, then with/without wiki/ prefix
      const target = graphSlugSet.has(raw)                            ? raw
                   : graphSlugSet.has('wiki/' + raw)                  ? 'wiki/' + raw
                   : graphSlugSet.has(raw.replace(/^wiki\//, ''))     ? raw.replace(/^wiki\//, '')
                   : null;
      if (!target || target === source) continue;
      const key = [source, target].sort().join('\0');
      if (!edgeSet.has(key)) {
        edgeSet.add(key);
        graphEdges.push({ source, target });
      }
    }
  }
}

function renderGraphLegend() {
  const types = [
    ['definition',  'Definition'],
    ['finding',     'Finding'],
    ['source',      'Source'],
    ['query',       'Query'],
    ['overview',    'Overview'],
    ['explanation', 'Explanation'],
  ];
  return types.map(([t, label]) =>
    `<span class="graph-legend-item graph-type-${t}">
       <svg width="10" height="10" viewBox="0 0 10 10"><circle cx="5" cy="5" r="5"/></svg>
       ${label}
     </span>`
  ).join('');
}

async function loadGraphPage() {
  renderNav('graph');
  const main = document.getElementById('content');
  main.removeAttribute('data-type');
  document.title = `Graph — ${WIKI_CONFIG.titleSuffix}`;

  main.innerHTML = `
    <div class="page-type-label">network</div>
    <h1>Knowledge Graph</h1>
    <p class="loading">Building graph…</p>
  `;

  await tagIndexReady;
  if (getSlug() !== 'graph') return; // navigated away while loading

  const H = Math.max(520, window.innerHeight - 260);

  main.innerHTML = `
    <div class="page-type-label">network</div>
    <h1>Knowledge Graph</h1>
    <p class="graph-hint">${graphNodes.length} pages &middot; ${graphEdges.length} links
      &mdash; click to focus &middot; click again or background to reset &middot; double-click to open &middot; drag to pin &middot; shift-click to unpin</p>
    <div id="graph-container" style="height:${H}px"></div>
    <div class="graph-legend">${renderGraphLegend()}</div>
  `;

  const container = document.getElementById('graph-container');
  const W = container.clientWidth || main.clientWidth - 80 || 720;

  // Degree for node sizing
  const degree = new Map(graphNodes.map(n => [n.id, 0]));
  for (const e of graphEdges) {
    degree.set(e.source, (degree.get(e.source) || 0) + 1);
    degree.set(e.target, (degree.get(e.target) || 0) + 1);
  }
  const radius = d => Math.max(5, Math.min(16, 5 + (degree.get(d.id) || 0) * 0.9));

  // Clone for D3 mutation
  const nodes = graphNodes.map(n => ({ ...n }));
  const edges = graphEdges.map(e => ({ ...e }));

  const nodeById = new Map(nodes.map(n => [n.id, n]));

  // ── Focus mode state ───────────────────────────────────────────────────────
  let focusNodeId      = null;
  let focusNeighborIds = new Set();
  const userPinned     = new Set(); // slugs pinned by user drag (survive focus transitions)

  function setFocus(d) {
    // Toggle off if clicking the active focal node
    if (focusNodeId === d.id) { clearFocus(); return; }

    // Release previous focus layout before applying the new one
    if (focusNodeId) {
      for (const n of nodes) { if (!userPinned.has(n.id)) { n.fx = null; n.fy = null; } }
      sim.force('focus-radial', null);
    }

    focusNodeId = d.id;
    focusNeighborIds = new Set();
    for (const e of edges) {
      const s = e.source?.id ?? e.source;
      const t = e.target?.id ?? e.target;
      if (s === d.id) focusNeighborIds.add(t);
      if (t === d.id) focusNeighborIds.add(s);
    }

    const count  = focusNeighborIds.size;
    const innerR = Math.max(90, Math.min(200, 55 + count * 20));
    const outerR = innerR + 200;

    // Fix focal node at viewport centre
    d.fx = W / 2; d.fy = H / 2;

    // Place neighbours evenly on a circle, starting at top
    [...focusNeighborIds].forEach((id, i) => {
      const angle = (2 * Math.PI * i) / count - Math.PI / 2;
      const n = nodeById.get(id);
      if (!n) return;
      n.fx = W / 2 + innerR * Math.cos(angle);
      n.fy = H / 2 + innerR * Math.sin(angle);
    });

    // Radially push everything else to the outer ring
    sim.force('focus-radial', d3.forceRadial(outerR, W / 2, H / 2)
      .strength(n => (n.id === d.id || focusNeighborIds.has(n.id)) ? 0 : 0.35));

    // Reset zoom to show the whole focused layout
    svg.transition().duration(450).call(zoom.transform, d3.zoomIdentity);

    sim.alpha(0.6).restart();
  }

  function clearFocus() {
    focusNodeId = null;
    focusNeighborIds = new Set();
    sim.force('focus-radial', null);
    for (const n of nodes) { if (!userPinned.has(n.id)) { n.fx = null; n.fy = null; } }
    sim.alpha(0.35).restart();
  }
  // ── End focus mode ─────────────────────────────────────────────────────────

  const svg = d3.select(container).append('svg')
    .attr('width', '100%')
    .attr('height', H)
    .attr('class', 'graph-svg');

  const g = svg.append('g');

  const zoom = d3.zoom().scaleExtent([0.1, 6])
    .on('zoom', ev => g.attr('transform', ev.transform));
  svg.call(zoom);
  svg.on('click', () => { if (focusNodeId) clearFocus(); });

  const link = g.append('g')
    .selectAll('line')
    .data(edges)
    .join('line')
    .attr('class', 'graph-edge');

  const node = g.append('g')
    .selectAll('g')
    .data(nodes)
    .join('g')
    .attr('class', d => `graph-node-group graph-type-${d.type}`)
    .call(
      d3.drag()
        .on('start', (ev, d) => { if (!ev.active) sim.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; })
        .on('drag',  (ev, d) => { d.fx = ev.x; d.fy = ev.y; })
        .on('end',   (ev, d) => { if (!ev.active) sim.alphaTarget(0); userPinned.add(d.id); })
    )
    .on('click', (ev, d) => {
      ev.stopPropagation();
      if (ev.shiftKey) {
        d.fx = null; d.fy = null;
        userPinned.delete(d.id);
        sim.alphaTarget(0.15).restart();
        return;
      }
      setFocus(d);
    })
    .on('dblclick', (ev, d) => { ev.stopPropagation(); window.location.hash = encodeURIComponent(d.id); })
    .on('mouseover', (ev, d) => showPreview(d.id, d.label, ev.clientX, ev.clientY))
    .on('mouseout',  ()      => scheduleHidePreview());

  node.append('circle')
    .attr('r', d => radius(d))
    .attr('class', 'graph-node-circle');

  // Labels only on well-connected nodes to avoid clutter
  node.filter(d => (degree.get(d.id) || 0) >= 3)
    .append('text')
    .attr('class', 'graph-node-label')
    .attr('dy', d => radius(d) + 9)
    .text(d => d.label);

  const sim = d3.forceSimulation(nodes)
    .force('link',    d3.forceLink(edges).id(d => d.id).distance(70))
    .force('charge',  d3.forceManyBody().strength(-220))
    .force('center',  d3.forceCenter(W / 2, H / 2))
    .force('collide', d3.forceCollide().radius(d => radius(d) + 5))
    .on('tick', () => {
      link
        .attr('x1', d => d.source.x).attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x).attr('y2', d => d.target.y)
        .classed('graph-edge-dim', d => !!focusNodeId &&
          d.source.id !== focusNodeId && d.target.id !== focusNodeId);
      node
        .attr('transform', d => `translate(${d.x ?? 0},${d.y ?? 0})`)
        .classed('graph-pinned', d => d.fx != null && !focusNeighborIds.has(d.id) && d.id !== focusNodeId)
        .classed('graph-dim',    d => !!focusNodeId && d.id !== focusNodeId && !focusNeighborIds.has(d.id));
    });
}

// ── Init ──────────────────────────────────────────────────────────────────────

async function navigate() {
  const hash = decodeURIComponent(window.location.hash.slice(1));
  if (hash.startsWith('tag:')) {
    loadTagPage(hash.slice(4));
  } else if (hash === 'graph') {
    loadGraphPage();
  } else {
    await loadPage(hash || HOME_SLUG);
  }
}

window.addEventListener('hashchange', () => {
  document.getElementById('search-results').style.display = 'none';
  document.getElementById('global-search').value = '';
  navigate();
});

document.addEventListener('DOMContentLoaded', async () => {
  // Inject project branding from config.js into header and auth overlay
  const nameEl = document.querySelector('.site-name');
  if (nameEl) { nameEl.innerHTML = WIKI_CONFIG.siteTitle; nameEl.href = '#' + WIKI_CONFIG.homeSlug; }
  document.querySelectorAll('.site-sub, .auth-sub').forEach(el => { el.innerHTML = WIKI_CONFIG.siteSub; });
  document.querySelectorAll('.auth-title').forEach(el => { el.innerHTML = WIKI_CONFIG.siteTitle; });
  document.title = WIKI_CONFIG.titleSuffix;

  // Build search results overlay element
  const searchResults = document.createElement('div');
  searchResults.id    = 'search-results';
  document.body.appendChild(searchResults);

  // Wire global search
  const searchInput = document.getElementById('global-search');
  searchInput.addEventListener('input', () => renderSearch(searchInput.value));
  searchInput.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      searchResults.style.display = 'none';
      searchInput.value = '';
    }
  });
  document.addEventListener('click', e => {
    if (!searchResults.contains(e.target) && e.target !== searchInput) {
      searchResults.style.display = 'none';
    }
  });

  // Intercept search result clicks to close the overlay
  searchResults.addEventListener('click', () => {
    searchResults.style.display = 'none';
    searchInput.value = '';
  });

  // Build nav from wiki/index.md
  navSections = await buildNavFromIndex();
  buildSearchIndex();

  // Build tag index + graph data in the background — doesn't block initial render
  tagIndexReady = buildTagIndex();

  // Load initial page, then attach hover delegation
  await navigate();
  attachPreviewDelegation(document.getElementById('nav'));
  attachPreviewDelegation(document.getElementById('content'));
});
