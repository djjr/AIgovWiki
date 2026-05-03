# Web Viewer

A static, no-build web viewer for the wiki. Renders markdown pages, resolves
wikilinks, and provides search, hover previews, tag browsing, and a force-directed
knowledge graph. No server required beyond a file server.

---

## Running it

```bash
# From the project root:
python3 -m http.server 8000
# Then open: http://localhost:8000/
```

The viewer is the `index.html` at the project root. All paths are relative, so
it works from any static file host.

---

## Project configuration

`config.js` is loaded before `site.js` and exposes a `WIKI_CONFIG` object:

```js
const WIKI_CONFIG = {
  wikiBase:    'wiki/',          // path to the wiki/ directory
  homeSlug:    'overview',       // page loaded on first visit
  siteTitle:   'DJJR <em>AI Governance</em>',  // HTML, shown in header
  siteSub:     'Prototype',      // small label next to site name
  titleSuffix: 'AI Gov Wiki',    // appended to browser tab titles
};
```

Edit `config.js` when reusing this viewer for a new project.

---

## Features

### Navigation sidebar
- Built from `wiki/index.md` at startup — no separate manifest needed.
- Sections (Definitions, Findings, Sources, etc.) match the `##` headings in
  `index.md` and are **collapsible**. Open/closed state persists in
  `localStorage`.
- The section containing the active page auto-expands on navigation.
- Pages within each section are sorted alphabetically except Queries (recency
  order) and the top-level Wiki section.

### Search
- Global search input in the header (keyboard shortcut: just start typing).
- Two tiers: **label hits** (term appears in page title) ranked above **body
  hits** (term appears in page text), separated by a section divider.
- Body search runs against a stripped plain-text index built at startup.
- Results show a highlighted snippet for body hits.
- Escape or clicking outside closes the results panel.

### Hover previews
- Hovering any wikilink in body text or the nav shows a popup preview of the
  target page (first ~50 lines, rendered).
- 260ms hover delay prevents flicker on casual mousing.
- Previews are cached after the first fetch.
- Works on both nav links and in-body links via event delegation.

### Tag browsing
- Tags in page frontmatter are rendered as clickable links in the metadata block.
- Clicking a tag opens a `#tag:tagname` page listing all pages with that tag,
  grouped by type.

### Acronym expansion
- Definition pages with an `acronym:` field in their frontmatter register that
  acronym for auto-expansion.
- The first occurrence of a registered acronym on any page becomes a hover-linked
  reference to its definition page.
- Common ambiguous acronyms (AI, ML, EU, etc.) are excluded via `ACRONYM_EXCLUDE`
  in `site.js`.

### Wikilink rendering
- `[[wiki/path/slug|Alias]]` → rendered as an internal link.
- `[[wiki/path/slug]]` → rendered with a slug-derived label (avoid — use aliases).
- `![[image.png]]` → rendered as an `<img>` served from `raw/assets/`.
- `![[wiki/sources/slug]]` → transcluded inline (page body spliced in).
- Dataview blocks are replaced with a "not rendered in web view" notice.

---

## Knowledge graph

Accessed via the **Graph** link in the nav sidebar (or `#graph` in the URL).

The graph is built at startup from the same page-fetch pass used for search
and tag indexing — no separate data file needed.

### What's included / excluded
- All pages listed in `wiki/index.md` appear as nodes.
- Edges are extracted from `[[wikilinks]]` in each page's body.
- `index` and `log` are excluded from the graph (`GRAPH_EXCLUDE` in `site.js`)
  because `index.md` links to every page and would create a meaningless hub.
  Add other slugs to `GRAPH_EXCLUDE` as needed.
- Edges are **deduplicated** (A→B and B→A become one edge).

### Node appearance
- **Color** encodes page type using the same palette as the rest of the UI
  (slate teal for definitions, amber for findings, green for sources, etc.).
- **Size** scales with degree (number of connections), capped at radius 16.
- **Labels** are shown only on nodes with 3 or more connections to reduce
  clutter. All nodes show a label in the hover preview.
- **Dashed stroke** marks a node that has been manually pinned by dragging.

### Interactions

| Gesture | Effect |
|---|---|
| Click node | **Focus mode** — centers the node, arranges its immediate neighbors in a circle, pushes everything else to the periphery |
| Click same node again | Exit focus mode, return to free layout |
| Click background | Exit focus mode |
| Double-click node | Navigate to that wiki page |
| Drag node | **Pin** the node at the dropped position (sticky — does not spring back) |
| Shift-click node | **Unpin** the node and let the simulation resume |
| Scroll / pinch | Zoom in/out |
| Drag background | Pan |

### Focus mode detail
When a node is clicked, the simulation applies three layout forces simultaneously:
1. The focal node is fixed at the viewport center (`fx`/`fy`).
2. Its immediate neighbors are fixed at evenly-spaced positions on a circle
   (radius scales with neighbor count: `max(90, min(200, 55 + count × 20))`px).
3. `d3.forceRadial` pushes all other nodes to an outer ring (~200px beyond the
   neighbor circle) while allowing them to arrange freely within that ring.

Nodes pinned by the user before entering focus mode survive the transition
unchanged. Switching focus to a different node releases the previous layout first.

### Switching focus node-to-node
Clicking a different node while in focus mode releases the current layout and
immediately applies the new one — no need to click the background first.

---

## Technical notes

- **No build step.** All dependencies are loaded from CDN:
  - [marked.js](https://cdn.jsdelivr.net/npm/marked@12/marked.min.js) — markdown rendering
  - [D3 v7](https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js) — force graph
- **No backend.** The viewer fetches `.md` files directly via `fetch()`. It
  must be served from a file server (not opened as `file://`).
- **GitHub Pages:** requires a `.nojekyll` file in the repo root. Without it,
  GitHub Pages runs Jekyll, which processes `.md` files into HTML and makes
  them inaccessible at their `.md` paths. See README.md for the one-liner.
- **CORS:** when running locally, use `python3 -m http.server` or equivalent.
  Opening `index.html` directly in a browser will fail due to CORS on `fetch()`.

---

## Extending the viewer

All logic is in `site.js` (~1000 lines, well-sectioned). Key areas:

| What to change | Where in site.js |
|---|---|
| Nav structure / sections | `buildNavFromIndex()` |
| Page rendering / wikilinks | `preprocess()`, `loadPage()` |
| Search behavior | `buildTagIndex()`, `renderSearch()` |
| Acronym expansion | `expandAcronyms()`, `ACRONYM_EXCLUDE` |
| Graph data (nodes/edges) | `buildGraphData()`, `GRAPH_EXCLUDE` |
| Graph layout / forces | `loadGraphPage()` — force parameters |
| Focus mode layout | `setFocus()` inside `loadGraphPage()` |
| Styles / colors | `site.css` — design tokens at `:root` |
