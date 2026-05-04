---
title: "Ohio HB 628: IVO Licensing Framework with Harm-Triggered Revocation"
type: finding
tags: [ai-policy, governance-theory, law]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/OHIO HB628_BILL ANALYSIS_27288.pdf"
related:
  - "[[wiki/findings/virginia-sb384-ivo-licensing-framework|Virginia SB 384: First State IVO Licensing Statute]]"
  - "[[wiki/findings/voluntary-ivo-design-tradeoff|Voluntary IVO Participation: Design Tradeoff]]"
  - "[[wiki/findings/rebuttable-presumption-as-market-incentive|Rebuttable Presumption as the Market Incentive for IVO Certification]]"
  - "[[wiki/findings/race-to-bottom-countermeasure-license-revocation|Race-to-Bottom Countermeasure: License Revocation Cascade]]"
  - "[[wiki/findings/state-ai-legislation-2026-wave|State AI Legislation: 2026 Wave]]"
  - "[[wiki/sources/ohio-hb628-2025|Ohio HB 628 (2025)]]"
---

## Claim

Ohio HB 628 is the third state IVO licensing framework (after CT SB 5 §33 and VA SB 384), but introduces a structurally distinct mandatory revocation trigger: the Attorney General *must* revoke an IVO's license if a verified AI model or application causes a material harm of the type the IVO was licensed to prevent.

## Evidence

- [[wiki/sources/ohio-hb628-2025|Ohio HB 628 LSC Bill Analysis]]: R.C. 3755.04 lists five mandatory revocation grounds, the fifth being outcome-triggered: "An AI model or application verified by the IVO causes a material harm of the type the IVO is licensed to prevent." This is absent in Virginia SB 384's revocation provisions, which focus on procedural non-compliance, conflicts of interest, and technological obsolescence.

## Key structural features (comparison with VA SB 384)

Ohio HB 628 and Virginia SB 384 share the same basic IVO architecture (voluntary participation, [[wiki/definitions/rebuttable-presumption|rebuttable presumption of reasonable care]], advisory council, 10-year document retention, 1-year post-employment restriction). They differ on:

- **Licensor**: Ohio — Attorney General; Virginia — VITA (state IT agency)
- **Advisory council home**: Ohio — AG's Office, jointly with State Auditor; Virginia — independent AI Safety Advisory Council
- **Mandatory revocation**: Ohio includes outcome-triggered revocation (verified model causes harm); Virginia does not
- **Scope of coverage**: Ohio explicitly covers both "AI models" and "AI applications" (software using AI models); Virginia focuses on AI systems/models
- **Security vendor**: Ohio defines "security vendor" as a third-party red-teaming entity; Virginia has no equivalent
- **Whistleblower**: Ohio requires IVO plans to address developer/deployer whistleblower protections; Virginia does not
- **Legislative status**: Ohio — introduced December 11, 2025, as introduced; Virginia — signed April 13, 2026

## Contradicted by / Tension with

The outcome-triggered mandatory revocation creates a potential systemic risk: if [[wiki/findings/race-to-bottom-countermeasure-license-revocation|license revocation voids all IVO certificates simultaneously]], harm-triggered revocation could produce market disruption proportional to the IVO's market penetration. An IVO certifying a widely deployed model that causes harm faces not just license loss but cascading verification voids across its entire portfolio. The Hadfield regulatory markets literature treats this cascade as a feature (deterring race-to-bottom selection) but does not address the collateral disruption to verified systems that caused no harm.

## Relevant concepts

[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]], [[wiki/definitions/rebuttable-presumption|Rebuttable Presumption of Reasonable Care]], [[wiki/definitions/regulatory-markets|Regulatory Markets]]

## Notes

Ohio HB 628 was introduced December 11, 2025 by Rep. T. Mathews (136th General Assembly). The bill analysis is dated February 27, 2026 — no passage or committee action has been recorded in the source document. Ohio joins Minnesota HF 4544 / SF 4636 (noted in the Transparency Coalition April 2026 tracker) as states introducing IVO licensing frameworks in the same session as Virginia's enactment.
