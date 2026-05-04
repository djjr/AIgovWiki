---
title: "State Content Provenance Laws: Emerging Multi-State Framework (2025–2026)"
type: finding
tags: [ai-policy, law, democratic, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Analyzing Utah and Washington's New AI Provenance Laws.md"
  - "raw/Connecticut SB 5 2026 Bill Text.pdf"
  - "raw/As White House blocks Utah AI bill, other chatbot and deepfake regulations advance • Utah News Dispatch.md"
related:
  - "[[wiki/findings/connecticut-sb5-content-provenance|CT SB 5 §15: Embedded Metadata as Content Provenance Requirement]]"
  - "[[wiki/definitions/digital-content-provenance|Digital Content Provenance]]"
  - "[[wiki/findings/state-ai-legislation-2026-wave|State AI Legislation: 2026 Wave]]"
  - "[[wiki/sources/utah-washington-ai-provenance-laws|Analyzing Utah and Washington's New AI Provenance Laws]]"
---

## Claim

Four U.S. states (Connecticut, Utah, Washington, California) have enacted or advanced AI content provenance requirements in 2025–2026; all require embedding latent disclosures or metadata in AI-generated image, video, and audio content, but diverge substantially on platform-layer obligations, capture device duties, and enforcement mechanisms — constituting the most significant U.S. development in AI-generated content accountability law yet.

## Evidence

| State | Law | Effective | Provider obligation | Platform layer | Device mfr | Enforcement |
|-------|-----|-----------|--------------------|--------------------|------------|-------------|
| CT | SB 5 §15 | TBD (2026) | Embed provenance metadata (>1M users) | No separate tier | No | AG / civil |
| UT | Digital Content Provenance Standards Act | 1/1/27 | Embed latent disclosures (>1M users) | Detect + display UI (>2M) | Yes (1/1/28) | Div. Consumer Protection; $2,500/violation |
| WA | HB 1170 | 2/1/27 | Embed provenance data (>1M users) | No separate tier | No | AG only; no private right of action; per se unfair trade practice |
| CA | (enacted 2026) | 8/2/26 | Free detection tool + latent disclosures (>1M users) | Detect + display UI (>2M) | Yes, opt-in default (1/1/28) | AG/city/county; $5,000/day/violation |

Sources: [[wiki/sources/utah-washington-ai-provenance-laws|JD Supra comparative analysis]], [[wiki/sources/connecticut-sb5-senate-passage|CT SB 5 Senate passage coverage]]

## Contradicted by / Tension with

The proliferation of non-harmonized state provenance standards creates a compliance fragmentation problem: covered providers must simultaneously satisfy different technical standards, UI obligations, device manufacturer duties, and enforcement exposures across four states. This is structurally analogous to pre-GDPR EU data protection fragmentation. No federal baseline provenance requirement exists; Utah HB 276 (deepfake/intimate image consent + provenance) and the Utah Digital Content Provenance Standards Act represent the most comprehensive combined state approach.

## Relevant concepts

[[wiki/definitions/digital-content-provenance|Digital Content Provenance]], [[wiki/definitions/ai-companion|AI Companion]]

## Notes

California's requirement of a "free AI detection tool" — a positive obligation to build and expose a detection capability — is the most demanding single obligation in any of the four statutes and has no analog in CT, UT, or WA. Washington's AG-only enforcement with no private right of action is the weakest enforcement regime. The four-state framework has emerged with no federal coordination and is the direct product of the governance vacuum created by EO 14179's revocation of federal AI content standards.
