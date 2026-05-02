# Wiki Log
_Append-only. Newest entries at top. Format: `## [YYYY-MM-DD] operation | title`_

To see recent activity:
```bash
grep "^## \[" wiki/log.md | head -10
```

---

## [2026-05-02] wiki-run | 8 new files — procurement policy, democratic resilience, OECD government AI, TIAP 2026, CIFAR regulatory transformation, Rob Reich AISIs, Hadfield democratic deficit

- **Files processed (8):**
  - `raw/Governance by Procurement How AI Rights Became a Bilateral Negotiation.md`
  - `raw/Military AI Policy by Contract The Limits of Procurement as Governance.md`
  - `raw/Gillian Hadfield on the Democratic Deficit in AI.md`
  - `raw/AI Agents and Democratic Resilience.md`
  - `raw/Rob Reich - The Role of AISIs in AI Governance.md`
  - `raw/Technical Innovations for AI Policy 2026 What We Heard, and What It Means.md`
  - `raw/CIFAR-Regulatory-Transformation-in-the-Age-of-AI.pdf`
  - `raw/OECD 2025 Governing with AI.pdf`
- **Source pages created (8):** governance-by-procurement, military-ai-policy-by-contract, hadfield-democratic-deficit, ai-agents-democratic-resilience, rob-reich-aisi-governance, tiap-2026, cifar-regulatory-transformation-ai, oecd-governing-with-ai
- **Finding pages created (13):** governance-by-procurement-as-democratic-vacancy, procurement-cannot-substitute-public-law, democratic-deficit-ai-governance, harms-paradigm-critique-ai-regulation, aisi-professionalization-argument, aiml-as-immature-discipline, ai-companions-as-manipulation-technology, ai-agents-four-structural-pressures-democracy, democratic-agents-design-framework, tiap-governance-infrastructure-gap, multi-agent-governance-gap, ai-safety-ecosystem-property, government-ai-adoption-lags-private-sector
- **Definition pages created (5):** governance-by-procurement, regulation-by-contract, anticipatory-ethics, cognitive-autonomy, regulatory-impacts-analysis (acronym: RIA)
- **Filename mismatches fixed (5):** singapore-consensus-ai-safety-research, open-weight-model-risk-management, llm-conspiracy-promotion, securing-agentic-ai, computing-power-ai-governance — raw filenames corrected in both source pages and index.md
- **Index:** 122 → 148 pages total
- **Coverage gaps addressed:** AI procurement policy (now substantial), democratic institutions risks (now substantial), government AI adoption (OECD 2025)
- **Notes:** OECD (300-page report) processed from executive summary only (pp. 1–16); full ingestion deferred. AI Agents paper (Lazar & Cuéllar) read through Section III; Sections IV–V reconstructed from prior session context.

## [2026-05-02] schema-update | overview.md — current scope, emerging thesis, coverage gaps updated

- **Current scope:** Corrected stale "no sources ingested" language; updated to reflect 122 pages, 34 source notes, content clusters
- **Emerging thesis:** Four claims articulated from the source base: (1) technical-governance gap is structural; (2) epistemic foundations of AI policy research are fragile; (3) open-weight model safety technically unsolved; (4) epistemic/democratic effects determined by design, not technology
- **Coverage gaps:** Populated with 8 specific gaps (labor, China, state legislation, democratic institutions, environment, procurement, fairness/civil rights, non-US/EU regimes)

## [2026-05-02] wiki-run | 5 new PDFs — Singapore Consensus, Sastry compute governance, Caspar open-weight risk, Costello conspiracy, FAR AI agentic security

- **Files processed (5):**
  - `raw/Bengio et al 2025 Singapore Consensus on Global AI Safety Research Priorities.pdf`
  - `raw/Sastry et al 2024 Computing Power and the Governance of Artificial Intelligence.pdf`
  - `raw/Caspar et al 2026 Open Technical Problems in Open-Weight Model Risk Management.pdf`
  - `raw/Costello et al 2026 Large Language Models Can Promote Conspiracy Beliefs.pdf`
  - `raw/FAR AI 2025 Securing Agentic AI.pdf`
- **Source pages created (5):** singapore-consensus-ai-safety-research, computing-power-ai-governance, open-weight-model-risk-management, llm-conspiracy-promotion, securing-agentic-ai
- **Finding pages created (8):** singapore-consensus-safety-research-framework, compute-governance-four-properties, compute-governance-three-capacities, open-weight-tamper-resistance-limits, open-weight-lifecycle-governance-gaps, llm-conspiracy-bunking-debunking-symmetric, agentic-ai-expands-attack-surface
- **Definition pages created (7):** dangerous-capability-evaluation, loss-of-control-risk, compute-governance, open-weight-model, tamper-resistant-training, agentic-ai, prompt-injection
- **Existing definitions updated (1):** compute-threshold — added related links to compute-governance and compute-governance-four-properties
- **Bugs fixed:** capability-accountability-trap-caputo.md and index.md had wrong Caputo raw filename (`Capability-Accountability Trap.pdf` → `Technology Complexity and Administration.pdf`); corrected in both
- **Index:** 102 → 122 pages total
- **Cross-cluster connections:** Singapore Consensus links to TAIG taxonomy (its multilateral legitimation); Sastry compute governance links to IVO model (two-layer detection); Caspar open-weight links to Deep Ignorance (shared authors, layered problem); Costello conspiracy links to sycophancy cluster; FAR AI agentic links to Singapore Consensus Control pillar

## [2026-05-02] query | Congressional staffer bootcamp curriculum — revised

- **Revision of:** wiki/queries/congressional-staffer-bootcamp-curriculum.md (updated in place)
- **New material incorporated:** benchmark-quality-gaps-undermine-governance, frontier-model-transparency-declining, data-leakage-reproducibility-crisis-ml, capability-accountability-trap, scrutability-as-governance-infrastructure, taig-taxonomy-as-research-agenda, sycophantic-ai-increases-extremity, ai-circumvents-identity-source-bias
- **Structural changes:** (1) Day 1 afternoon now covers epistemic/democratic risk (sycophancy, source bias) — previously missing; (2) Day 3 adds fourth structural obstacle: instruments problem (benchmark quality + data leakage + zero transparency on train-test overlap); (3) Day 4 restructured around TAIG taxonomy as organizing device for technical-governance interface; (4) Day 5 adds capability-accountability trap + SCOTUS trilogy as US administrative law constraint, scrutability as constructive response, and epistemic/democratic risk as distinct legislative area
- **Coverage gaps remaining:** labor/systemic risk, AI procurement policy, China domestic governance, state-level AI legislation and federal preemption

## [2026-05-02] query | One-week AI governance bootcamp for congressional staffers

- **Question:** What curriculum might we develop for a one-week AI governance bootcamp for congressional staffers?
- **Saved to:** wiki/queries/congressional-staffer-bootcamp-curriculum.md
- **Sources drawn on:** overview.md; 13 finding pages; 8 definition pages; rand-ai-governance-historical-analogues source page
- **Structure:** Five days — (1) What are we regulating?, (2) Policy landscape, (3) Structural obstacles, (4) What good governance looks like, (5) What Congress can actually do
- **Coverage gaps noted in query page:** labor/systemic risk, AI and democratic institutions, AI procurement policy, China's domestic governance regime

## [2026-05-02] schema-update | Viewer code updates + pending raw files noted

- **config.js:** siteTitle → "AI Governance & LLM Safety"; siteSub, titleSuffix, authKey updated to match project
- **site.js:** Sidebar nav now alphabetized at build time in `buildNavFromIndex()` — sorted sections: Definitions, Findings, Sources, Entities, Overviews; unsorted: Wiki (top nav), Queries (recency order preserved)
- **Pending raw files (4) awaiting ingest:**
  - `BetterBench Assessing AI Benchmarks, Uncovering Issues, and Establishing Best Practices.md` + `.pdf` — arxiv 2411.12990
  - `CORE-Bench Fostering the Credibility of Published Research Through a Computational Reproducibility Agent Benchmark.md` + `.pdf` — arxiv 2409.11363
  - `Contextually Private Mechanisms.md` + `.pdf` — arxiv 2112.10812, authors Haupt & Hitzig
  - `Untitled.md` — failed clip of arxiv PDF url (error page only); can be deleted or re-fetched
- **Accounted-for files (not new):** IASEAI `(1)(2)(3)` outcomes drafts consolidated into iaseai-workshop-outcomes-framework source page; RAND blog post `.md` is companion to the PDF, both listed in rand-ai-governance-historical-analogues source frontmatter

## [2026-05-02] wiki-run | 8 new PDFs — TAIG, Caputo, FMTI ×2, Deep Ignorance, Globig ×2, Kapoor

- **Files processed (8):** "Open Problems in Technical AI Governance.pdf" (Reuel, Bucknall et al., TMLR 2025); "Caputo 2026 Capability-Accountability Trap.pdf" (Oxford Martin, draft); "Foundation Model Transparency Index 2025.pdf" (Bommasani et al., 3rd ed.); "Foundation Model Transparency Index 2023.pdf" (Bommasani et al., 1st ed.); "Deep Ignorance Pretraining Data Filtering for Tamper-Resistant LLM Safeguards.pdf" (O'Brien, Casper et al., EleutherAI/UK AISI, Aug 2025); "Globig Rathje et al 2025 Sycophantic AI.pdf" (NYU); "Globig et al 2025 Identity Driven Biases.pdf" (NYU/Google); "Kapoor Narayanan 2023 Leakage and the Reproducibility Crisis in ML-Based Science.pdf" (Patterns/CellPress)
- **Source pages created (8):** open-problems-technical-ai-governance, capability-accountability-trap-caputo, foundation-model-transparency-index-2025, foundation-model-transparency-index-2023, deep-ignorance-pretraining-filter, sycophantic-ai-attitude-extremity, identity-driven-source-selection-biases, data-leakage-reproducibility-ml-science
- **Definition pages created (6):** technical-ai-governance (TAIG), scrutability, foundation-model-transparency-index (FMTI), data-leakage-ml, pretraining-data-filtering, ai-sycophancy
- **Finding pages created (8):** taig-taxonomy-as-research-agenda, capability-accountability-trap, scrutability-as-governance-infrastructure, frontier-model-transparency-declining, pretraining-filter-tamper-resistance, sycophantic-ai-increases-extremity, ai-circumvents-identity-source-bias, data-leakage-reproducibility-crisis-ml
- **Index updated:** wiki/index.md — 99 pages total
- **Flags:** (1) Caputo is a working draft (2026, Oxford Martin); treat findings as provisional until published. (2) FMTI 2025 is the 3rd edition; the 2nd edition was not added to raw/ — the 2023→2025 trend line uses 1st and 3rd editions only; 2nd edition data noted in FMTI 2025 source page. (3) Globig papers are a natural pair — sycophancy (adverse epistemic effect) and identity-bias bypass (beneficial epistemic effect) sit in productive tension; together they constitute an "AI epistemic effects" cluster worth a future synthesis query. (4) Deep Ignorance (O'Brien/Casper) connects to CORE-Bench + BetterBench to form an "evaluation epistemic infrastructure" cluster (benchmark quality, reproducibility, tamper-resistance) that is now large enough for a synthesis query. (5) Kapoor + CORE-Bench form the two-layer epistemic critique: inflated original results + failure to reproduce them. (6) TAIG taxonomy's "Operationalization" capacity maps directly onto the IVO cluster — worth a cross-cluster synthesis query.

## [2026-05-02] wiki-run | BetterBench, CORE-Bench, Contextually Private Mechanisms

- **Files processed (3):** "BetterBench Assessing AI Benchmarks, Uncovering Issues, and Establishing Best Practices.pdf" (Reuel et al., NeurIPS 2024); "CORE-Bench Fostering the Credibility of Published Research Through a Computational Reproducibility Agent Benchmark.pdf" (Siegel et al., Princeton 2024); "Contextually Private Mechanisms.pdf" (Haupt & Hitzig, arXiv v8 Dec 2025)
- **Source pages created (3):** betterbench-ai-benchmark-assessment, core-bench-computational-reproducibility, contextually-private-mechanisms-haupt-hitzig
- **Definition pages created (2):** benchmark-lifecycle, contextual-privacy-mechanism-design
- **Finding pages created (2):** benchmark-quality-gaps-undermine-governance, computational-reproducibility-crisis-ai-research
- **Index updated:** wiki/index.md — 81 pages total
- **Flags:** (1) `Untitled.md` in raw/ is a failed web clip of the BetterBench arXiv page (URL: arxiv.org/pdf/2411.12990); content is an error message. Treated as a duplicate clip; no source page created. (2) Contextually Private Mechanisms is pure mechanism design theory; no finding pages created — governance relevance is conceptual (IVO information-elicitation design) and captured in the definition page and source précis. (3) CORE-Bench and BetterBench form a natural cluster with the existing Scaling Monosemanticity source on the theme of AI evaluation epistemic infrastructure — worth a future synthesis query. (4) BetterBench finding creates tension with the responsible capability scaling cluster: if benchmark quality is poor, capability-level triggers in RSPs/Preparedness Frameworks are less reliable than assumed.

## [2026-05-01] wiki-run | Responsible AI governance paper + Scaling Monosemanticity

- **Files processed (2):** "Responsible artificial intelligence governance A review and research framework.md" (Papagiannidis, Mikalef & Conboy, JSIS 2024); "Scaling Monosemanticity Extracting Interpretable Features from Claude 3 Sonnet.md" (Anthropic, transformer-circuits.pub 2024)
- **Source pages created (2):** responsible-ai-governance-review-framework, scaling-monosemanticity-claude3-sonnet
- **Definition pages created (2):** responsible-ai-governance, mechanistic-interpretability
- **Finding pages created (2):** principle-to-practice-gap-responsible-ai, sae-features-scale-to-frontier-models
- **Index updated:** wiki/index.md — 74 pages total
- **Cross-links added:** mechanistic-interpretability → technical-legibility, conventional-regulation-illegibility-problem; sae-features-scale-to-frontier-models → ivo (IVO certification implications); principle-to-practice-gap → broad-adoption-shallow-commitment, regulatory-markets (organizational capacity prerequisite)
- **Flags:** (1) Scaling Monosemanticity raw file is 16MB; ~15.8MB is base64-encoded images. Text content is ~226KB. Best read at transformer-circuits.pub. (2) Responsible AI governance paper is IS/management literature — disciplinary lens is different from the rest of the wiki's policy and technical safety focus; this is intentional and noted in source précis. (3) mechanistic-interpretability definition does not have an acronym field — the field doesn't have a universally used acronym.

## [2026-05-01] wiki-run | RAND historical analogues ingest

- **Files processed (2):** "AI Governance Lessons from Earlier Technologies.pdf" (Vermeer, RAND 2024) + companion blog post markdown
- **Source pages created (1):** rand-ai-governance-historical-analogues
- **Definition pages created (1):** collingridge-dilemma
- **Finding pages created (3):** nonphysical-asset-governance-challenge, norm-consensus-as-governance-prerequisite, asilomar-moratorium-as-voluntary-governance-model
- **Index updated:** wiki/index.md — 68 pages total
- **Flags:** (1) Blog post markdown is a brief summary of the PDF; PDF is the canonical source — both listed in source page frontmatter. (2) Three additional analogues discussed in report (automated vehicles, synthetic biology, reproductive cloning) were not foregrounded — could yield future finding pages. (3) Report explicitly cites Gillian Hadfield in its bibliography (Bengio et al. 2023 "Managing AI Risks"), creating a direct cross-reference between the RAND and IVO cluster sources.

## [2026-05-01] wiki-run | IVO cluster ingest — 11 new raw files

- **Files processed (11):** "20250430 Talk GKH SGP.md", "202507 PODCAST Gillian Hadfield Andrew Freeman.md", "IASEAI Workshop Notes_ Licensed Independent Verification Organizations in Other Industries.md" (+ drafts 1, 2, 3 consolidated), "IVO Licensing Criteria Checklist.md", "Claude's Exhaustive List of Licensing Criteria.md", "catalog of engagement modes.md", "ivo_regulatory_table.docx.md", "ivo_rules_of_engagement.docx.md"
- **Source pages created (9):** hadfield-talk-regulatory-markets, hadfield-freeman-podcast-cognitive-revolution, iaseai-workshop-ivo-cross-industry, iaseai-workshop-outcomes-framework, ivo-regulatory-table, ivo-rules-of-engagement, ivo-catalog-engagement-modes, ivo-licensing-criteria (Note: outcomes drafts 1/2/3 consolidated into one source page)
- **Definition pages created (5):** independent-verification-organization (IVO), regulatory-markets, rebuttable-presumption, technical-legibility, level-1-level-2-outcomes
- **Finding pages created (7):** conventional-regulation-illegibility-problem, regulatory-markets-as-governance-structure, rebuttable-presumption-as-market-incentive, race-to-bottom-countermeasure-license-revocation, ivo-financial-independence-tension, embedded-oversight-as-high-stakes-model, level-1-level-2-outcome-gap
- **Link scan:** responsible-capability-scaling and risk-based-approach updated to link to IVO and regulatory-markets definitions
- **Index updated:** wiki/index.md — 63 pages total
- **Flags:** (1) IASEAI outcomes drafts (1)(2)(3) are near-duplicates; treated as one source. (2) Licensing criteria working docs are drafts, not finalized proposals — précis notes this. (3) "Claude's Exhaustive List of Licensing Criteria.md" title implies Claude authorship; treated as project working document. (4) IVO acronym registered in frontmatter of new definition page — will auto-expand in viewer.

## [2026-04-30] wiki-run | Initial ingest of all 12 raw sources
- **Files processed (12):** bletchley-declaration-2023, seoul-frontier-ai-safety-commitments-2024, nist-ai-rmf, eo-14110-biden-2023, eo-14179-trump-2025, eu-ai-act-overview, anthropic-rsp, openai-preparedness-framework, gdm-frontier-safety-framework, oecd-ai-principles, uk-aisi, stanford-hai-ai-index-2026-policy
- **Source pages created (12):** wiki/sources/ — one per raw file
- **Definition pages created (12):** frontier-ai, responsible-capability-scaling, ai-safety-levels-asl, critical-capability-levels, risk-based-approach, dual-use-foundation-model, red-teaming, general-purpose-ai, ai-sovereignty, compute-threshold, uplift, high-risk-ai
- **Finding pages created (13):** bletchley-first-multilateral-frontier-safety-agreement, responsible-capability-scaling-as-industry-norm, eu-ai-act-first-binding-ai-law, us-executive-ai-governance-reversal-2025, compute-threshold-as-governance-proxy, converging-risk-domains-bio-cyber-autonomy, eu-us-regulatory-divergence, government-technical-capacity-as-governance-prerequisite, ai-sovereignty-as-policy-principle, public-private-investment-gap-ai, broad-adoption-shallow-commitment-dynamic, frontier-developer-special-responsibility-norm, competitiveness-vs-safety-framing-divergence
- **Index updated:** wiki/index.md — 38 pages total
- **Flags:** (1) nist-ai-rmf.md is the landing page only; full RMF PDF at https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf — consider fetching. (2) openai-preparedness-framework.md is the announcement post; full PDF at https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf. (3) stanford-hai-ai-index-2026-policy.md contains 6 key findings only; full chapter data is in the complete report. (4) "Gillian's Talk Why AI Governance?.md" referenced in earlier log entry not found in raw/ — may have been removed or never written.

## [2026-04-30] fetch | Twelve starter sources retrieved into raw/
- Fetched via mcp web_fetch + Python HTML→markdown extraction (BeautifulSoup + markdownify); provenance header (source_url, fetched date, fetcher) prepended to each file
- Files in `raw/` (not yet ingested):
  - `bletchley-declaration-2023.md` — UK gov, Nov 2023
  - `seoul-frontier-ai-safety-commitments-2024.md` — UK gov, May 2024
  - `nist-ai-rmf.md` — NIST landing page (the AI Risk Management Framework 1.0; full PDF not pulled)
  - `eo-14110-biden-2023.md` — Federal Register, full text of "Safe, Secure, and Trustworthy Development and Use of AI" (rescinded by EO 14179 in Jan 2025; preserved here as the high-water mark of US executive action)
  - `eo-14179-trump-2025.md` — White House, "Removing Barriers to American Leadership in AI"
  - `eu-ai-act-overview.md` — European Commission digital-strategy portal (overview, not the full statute)
  - `anthropic-rsp.md` — Anthropic, original 2023 RSP announcement
  - `openai-preparedness-framework.md` — OpenAI v2 (April 2025) update post
  - `gdm-frontier-safety-framework.md` — Google DeepMind, original FSF announcement
  - `oecd-ai-principles.md` — OECD AI Policy Observatory
  - `uk-aisi.md` — UK AI Security Institute homepage (note: rebranded from "AI Safety Institute" to "AI Security Institute"; worth flagging in a future entity page)
  - `stanford-hai-ai-index-2026-policy.md` — Policy and Governance chapter, AI Index 2026
- Caveats to address at ingestion:
  - Several files contain residual nav/footer boilerplate (gov.uk masthead, Federal Register prototype notice, OECD SVG icon refs); ingestion should strip these
  - `nist-ai-rmf.md` is the landing page only; if needed, the full RMF PDF lives at https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
  - `openai-preparedness-framework.md` is the v2 announcement; full PDF at https://cdn.openai.com/pdf/18a02b5d-6b67-4cec-ab64-68cdfbddebcd/preparedness-framework-v2.pdf
- Note: a pre-existing file `Gillian's Talk Why AI Governance?.md` (added by DJR before this fetch) is also in raw/ awaiting ingestion
- Next step: wiki run

## [2026-04-30] schema-update | Aligned scaffolding to AI governance focus
- project-particulars.md: replaced "The project is about X" placeholder with
  a substantive goal statement; expanded the unfinished domain-tag list into
  a structured taxonomy (substantive domains, risk frames, disciplinary
  lenses, cross-cutting tags)
- wiki/overview.md: full rewrite from inherited LLM-personas / Mead-Goffman-
  Sartre framing to AI governance; introduces the four-domain organization
  (technical safety, governance theory, AI policy, pedagogy) and the five
  live tensions (existential vs. ordinary harms; speed of capability vs.
  speed of institutions; voluntary vs. binding; compute as chokepoint;
  translation across vocabularies)
- wiki/StartHere.md: new file — the human-facing gateway described in the
  CLAUDE.md schema
- wiki/index.md: bumped date, incremented page count, added StartHere row

## [2026-04-10] init | Wiki initialized
- Schema written to CLAUDE.md
- Directory structure created: raw/, wiki/concepts/, wiki/entities/,
  wiki/sources/, wiki/queries/, wiki/overviews/
- Starter files created: index.md, log.md, overview.md
- Next step: drop a source file into raw/ and say "ingest [filename]"

## [2026-04-10] schema-update | Page taxonomy revised, project context added
- Renamed wiki/concepts/ → wiki/definitions/ (hover-link targets)
- Added wiki/findings/ (first-class claim pages)
- CLAUDE.md: added PROJECT CONTEXT section (customizable per project)
- CLAUDE.md: replaced generic page types with: definition, explanation,
  finding, source, query
- CLAUDE.md: added WIKI RUN as first-class operation (autonomous, multi-step)
- CLAUDE.md: added audience calibration (post-PhD, active researcher)
- CLAUDE.md: added two-domain framing (LLM ↔ sociology/philosophy) and
  domain tags
- overview.md: rewritten with project-specific framing and open questions
- index.md: updated table structure to match new page types
