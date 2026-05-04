---
title: "CT SB 5 §15: Embedded Metadata as Content Provenance Requirement"
type: finding
tags: [ai-policy, law, democratic, risk-misuse, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Senate Passes Sweeping AI Mandates » CBIA.md"
  - "raw/Connecticut SB 5 2026 OLR Bill Analysis.pdf"
related:
  - "[[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]"
  - "[[wiki/sources/connecticut-sb5-senate-passage|CT SB 5: Senate Passage and Employer Analysis]]"
  - "[[wiki/findings/connecticut-sb5-ai-companion-framework|CT SB 5: AI Companion Framework]]"
  - "[[wiki/findings/llm-conspiracy-bunking-debunking-symmetric|LLM Conspiracy Bunking and Debunking Effects Are Symmetric]]"
  - "[[wiki/findings/state-content-provenance-laws-2026|State Content Provenance Laws: Emerging Multi-State Framework]]"
  - "[[wiki/definitions/digital-content-provenance|Digital Content Provenance]]"
---

# CT SB 5 §15: Embedded Metadata as Content Provenance Requirement

## Claim

Connecticut SB 5 §15 requires large consumer-facing AI providers (>1M monthly users) to embed content provenance metadata in AI-generated or materially altered images, audio, and video — enacting a technical standard (C2PA-compatible) into state law as a CUTPA obligation, making it the first U.S. state mandatory content provenance requirement for AI-generated media.

## Evidence

- [CT SB 5 §15, CBIA/OLR Analysis]: Providers with more than one million monthly users must include embedded metadata to make certain media difficult to tamper with or remove; violations are CUTPA violations enforced solely by the AG. Business-to-business uses and narrowly scoped tools are exempt. → [[wiki/sources/connecticut-sb5-senate-passage|CT SB 5: Senate Passage and Employer Analysis]]
- [OLR Analysis, §15]: The requirement is aligned with "emerging technical standards" — a reference to the Coalition for Content Provenance and Authenticity (C2PA) standard used by Adobe, Microsoft, and others. → [[wiki/sources/connecticut-sb5-2026|Connecticut SB 5 (2026)]]

## Contradicted by / Tension with

- The one-million-user threshold exempts most AI image generation tools used by businesses, which are not consumer-facing at scale — the regulation hits consumer platforms (ChatGPT, Midjourney, Stable Diffusion consumer products) while leaving enterprise deployments unregulated.
- Provenance metadata is only as useful as the verification infrastructure downstream — requiring embedding does not require browsers, social platforms, or operating systems to surface or enforce that metadata. The standard is a necessary but not sufficient condition for provenance-based accountability.
- This provision is the closest CT SB 5 comes to addressing the deepfake/synthetic media problem — but it relies entirely on technical embedding rather than behavioral prohibition, a distinctly different regulatory approach than the "AI companion deception" prohibition in §5.

## Relevant concepts

[[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/ai-sycophancy|AI Sycophancy]]

## Notes

This is the CT bill's most relevant provision for the wiki's existing cluster on epistemic effects and democratic risks. Mandatory content provenance is a technical-legibility intervention at the information layer: it makes AI-generated content identifiable without prohibiting it. The implicit theory of change is that users with better information will make better judgments about AI-generated media. This is in tension with the [[wiki/findings/llm-conspiracy-bunking-debunking-symmetric|Costello et al. finding]] that AI-assisted information manipulation is symmetric — knowing content is AI-generated does not automatically correct the persuasive effect.
