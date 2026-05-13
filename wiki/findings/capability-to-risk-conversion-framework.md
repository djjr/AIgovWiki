---
title: "Framework: Converting Capability Evaluations to Bioterrorism Risk Assessments"
type: finding
tags: [biosecurity, methodology, risk-assessment, capability-evaluation, dual-use, quantitative]
created: 2026-05-12
updated: 2026-05-12
sources:
  - "raw/Dual-Use_AI_Capabilities_and_the_Risk_of_Bioterrorism.pdf"
related:
  - "[[wiki/findings/lone-wolf-bioterrorism-probability-ai-uplift|AI Uplift Could Substantially Raise Lone Wolf Bioterrorism Probability]]"
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
  - "[[wiki/definitions/uplift|Uplift]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
---

## Claim

Capability evaluation results — even rigorous ones — cannot directly inform high-stakes policy decisions because they do not answer the question regulators need answered: what is the overall societal risk? A structured framework combining qualitative domain expertise, quantitative probability modeling, and reference-class forecasting can bridge the capability-to-risk gap, even under high uncertainty.

## Evidence

- [Righetti, GovAI 2025]: Demonstrates a capability-to-risk conversion methodology using three components — (1) qualitative mapping of technical barriers to a specific threat model, (2) quantitative probability modeling drawing on historical base rates (prior bioterrorism attack attempts, success rates), and (3) structured expert elicitation from subject-matter experts and superforecasters to bound uncertainty ranges. → [[wiki/sources/righetti-2025-dual-use-ai-bioterrorism|Righetti 2025]]

## Why this matters for AI governance

AI safety governance currently operates primarily through **capability evaluations**: does this model exhibit dangerous capability X? But capability evaluations answer a necessary-but-not-sufficient question. Policymakers need to weigh the costs of restricting or delaying AI deployment against the benefit of risk reduction — a calculation that requires a probability, not just a binary capability assessment.

Righetti's framework suggests that the relevant conversion requires:

1. **Threat model scoping**: Narrow to a specific attacker profile and pathway (lone wolf epidemic, not all bioterrorism). Over-broad threat models make quantification impossible and produce unhelpful upper bounds.
2. **Technical barrier identification**: Map the specific technical obstacles currently preventing the threat, and define AI capability thresholds that would erode each barrier.
3. **Base rate anchoring**: Ground probability estimates in historical reference classes (how often have lone wolf bioterrorism attempts occurred? what was the success rate?).
4. **Uplift quantification**: Express AI assistance as a concrete behavioral change (e.g., "X more STEM Bachelors can synthesize pathogen Y") rather than a vague capability label.
5. **Expert and forecaster calibration**: Use structured elicitation from both domain experts and professional forecasters to triangulate uncertainty ranges.

## Contradicted by / Tension with

- The methodology depends on having meaningful base rate data for the threat model. For truly novel risks (no historical incidents), the base rate anchoring step is weak. Lone wolf bioterrorism has a thin historical record, making all estimates highly uncertain.
- [[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark quality gaps]] mean that the capability evaluation inputs to this framework may themselves be unreliable — garbage in, garbage out applies even to sophisticated conversion frameworks.

## Relevant concepts

[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]], [[wiki/definitions/uplift|Uplift]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]]

## Notes

The methodology is a genuine contribution independent of the specific bioterrorism application. It provides a template for how to convert any AI dangerous capability evaluation into a policy-relevant risk estimate — applicable to cyberoffense, chemical weapons uplift, or other CBRN pathways, each of which would require separate threat-model scoping and base-rate analysis.
