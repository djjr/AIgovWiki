---
title: "AI Uplift Could Substantially Raise Lone Wolf Bioterrorism Probability"
type: finding
tags: [biosecurity, dual-use, bioterrorism, uplift, risk-assessment, cbrn, quantitative]
created: 2026-05-12
updated: 2026-05-12
sources:
  - "raw/Dual-Use_AI_Capabilities_and_the_Risk_of_Bioterrorism.pdf"
related:
  - "[[wiki/findings/capability-to-risk-conversion-framework|Framework: Converting Capability Evaluations to Bioterrorism Risk Assessments]]"
  - "[[wiki/definitions/uplift|Uplift]]"
  - "[[wiki/findings/converging-risk-domains-bio-cyber-autonomy|Convergence on Biosecurity, Cybersecurity, and Autonomy as Priority Risk Domains]]"
  - "[[wiki/findings/frontier-cbrn-capability-threshold-reached|Frontier AI CBRN Capability Threshold Reached]]"
---

## Claim

If AI systems were to provide simultaneous uplift on virus synthesis (enabling 10 percentage points more STEM Bachelors to synthesize pathogens as complex as influenza) and operational attack planning (enabling design and execution of complex attacks circumventing current defenses), the annual probability of a lone wolf epidemic attack might rise from 0.15% to approximately 1.0% — equivalent to roughly 12,000 additional expected deaths per year, or ~$100B in annual expected harm.

## Evidence

- [Righetti, GovAI 2025]: Framework applying historical case studies, expert elicitation (6 subject-matter experts), and reference-class forecasting (5 superforecasters). Author's estimates show 5th–95th percentile range spanning multiple orders of magnitude; expert and forecaster medians similar to author's 50th percentile estimates, but all forecasts have high uncertainty. → [[wiki/sources/righetti-2025-dual-use-ai-bioterrorism|Righetti 2025]]

## Structure of the risk model

The 0.15% → 1.0% shift is conditioned on simultaneous threshold crossings in two of three technical barriers:

**Barrier 1 — Virus Discovery**: AI identifying epidemic-potential pathogens (novel virus discovery or sensitive information proliferation). Scenarios including this barrier reach substantially higher expected damages than synthesis/ops uplift alone.

**Barrier 2 — AI Lab Coach**: AI teaching specialized virus synthesis skills including troubleshooting laboratory procedures. The 10pp STEM Bachelor threshold is the specific benchmark used in the central scenario.

**Barrier 3 — AI Ops Coach**: AI helping design complex operational attack plans — circumventing DNA synthesis screening, avoiding law enforcement detection.

The central scenario (synthesis + ops, no virus discovery) generates the 0.15% → 1.0% estimate. Adding virus discovery capability pushes expected damages into a higher range that the author's chart shows exceeding 1M expected annual deaths in the 95th percentile scenario.

## Scope limitations (critical)

This finding applies **only** to lone wolf epidemic terrorism — individual actors or very small groups engineering epidemic-scale pathogens. It explicitly excludes:
- Anthrax-class attacks (different technical barriers and attacker profile)
- State biological weapons programs (different resource base, intent, infrastructure)
These other threat models require separate quantitative analysis.

## Contradicted by / Tension with

- High uncertainty across all estimates means the central figure (12,000 deaths/year) should be read as an order-of-magnitude estimate, not a precise forecast. The 5th–95th percentile range spans orders of magnitude.
- The [[wiki/findings/frontier-cbrn-capability-threshold-reached|Ball-Buchanan documentation]] (May 2026) that GPT-5.4 outperforms PhD virologists in some domains suggests the capability thresholds in Righetti's central scenario may already be partially crossed — meaning the 0.15% baseline probability may already be under pressure.

## Relevant concepts

[[wiki/definitions/uplift|Uplift]], [[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]], [[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]]

## Notes

The $100B annual expected harm figure uses standard value-of-statistical-life methodology. The comparison across scenarios (synthesis-only vs. synthesis+ops vs. synthesis+ops+discovery) shows that virus discovery capability is the largest risk multiplier — raising expected deaths by a factor of roughly 100 over the synthesis+ops baseline in the median scenario.
