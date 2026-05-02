---
title: "TAIG Taxonomy Defines an Underbuilt Field at the Technical-Policy Interface"
type: finding
tags: [governance-theory, technical-safety, ai-policy, research-agenda]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Open Problems in Technical AI Governance.pdf"
related:
  - "[[wiki/sources/open-problems-technical-ai-governance|Open Problems in Technical AI Governance (Reuel, Bucknall et al., 2025)]]"
  - "[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as Governance Prerequisite]]"
---

## Claim

Technical AI Governance (TAIG) is a systematically underbuilt field: governance interventions routinely assume technical tools that do not yet exist (compute attribution, model provenance, deployment monitoring, verifiable watermarking), while technical researchers solve problems without governance consumers — and the TAIG taxonomy makes these misalignments explicit for the first time.

## Evidence

- Reuel, Bucknall et al. (TMLR, April 2025): 2D taxonomy across 6 Capacities × 4 Targets yields a structured catalog of open problems; examples of technically absent but governance-assumed capabilities: reliable compute attribution to specific entities, model fingerprinting that survives fine-tuning, interpretable audit trails for deployment decisions, ecosystem-wide monitoring of model proliferation → [[wiki/sources/open-problems-technical-ai-governance|Open Problems in TAIG]]

## Contradicted by / Tension with

Not directly contradicted; the paper is explicitly a research agenda, not a claim about current capabilities. In tension with governance frameworks that implicitly assume technical readiness (e.g., [[wiki/sources/anthropic-rsp|Anthropic RSP]], [[wiki/sources/openai-preparedness-framework|OpenAI Preparedness Framework]]) — those frameworks propose capability-based triggers whose implementation requires technical tools the TAIG paper identifies as open problems.

## Relevant concepts

[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]], [[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/compute-threshold|Compute Threshold]]

## Notes

The TAIG taxonomy's "Operationalization" capacity is the closest to [[wiki/definitions/independent-verification-organization|IVO]] design: it covers the technical infrastructure needed to translate governance goals into enforceable standards. The paper's anti-technosolutionism is a useful check on the IVO literature, which sometimes implies that technical legibility is achievable without specifying which aspects are open research problems.
