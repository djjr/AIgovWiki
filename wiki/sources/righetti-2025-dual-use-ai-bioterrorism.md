---
title: "Dual-Use AI Capabilities and the Risk of Bioterrorism (Righetti, GovAI, 2025)"
type: source
tags: [biosecurity, dual-use, bioterrorism, risk-assessment, capability-evaluation, cbrn]
created: 2026-05-12
updated: 2026-05-12
sources:
  - "raw/Dual-Use_AI_Capabilities_and_the_Risk_of_Bioterrorism.pdf"
related:
  - "[[wiki/findings/lone-wolf-bioterrorism-probability-ai-uplift|AI Uplift Could Substantially Raise Lone Wolf Bioterrorism Probability]]"
  - "[[wiki/findings/capability-to-risk-conversion-framework|Framework: Converting Capability Evaluations to Bioterrorism Risk Assessments]]"
  - "[[wiki/definitions/uplift|Uplift]]"
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
  - "[[wiki/sources/ball-buchanan-ai-national-security-2026|Ball & Buchanan: A.I. Is a National Security Risk]]"
  - "[[wiki/findings/converging-risk-domains-bio-cyber-autonomy|Convergence on Biosecurity, Cybersecurity, and Autonomy as Priority Risk Domains]]"
---

## Précis

Authored by Luca Righetti at GovAI (2025), this peer-reviewed report addresses a gap that sits between two existing bodies of work: capability evaluations (which AI labs run to detect biological uplift) and policy responses (which require risk assessments, not just capability data). Righetti argues that capability evaluation results — even robust ones — cannot answer the question regulators actually need answered: what do these results imply for the overall probability of a bioterrorist attack? The report builds a framework for that conversion using historical case studies, expert elicitation from six subject-matter experts, and reference-class forecasting from five superforecasters.

The scope is deliberately narrow: "lone wolf epidemic terrorism," meaning individual actors or very small groups attempting to engineer epidemic-scale pathogens. Righetti identifies three technical barriers that currently make such attacks very unlikely, and proposes AI capability thresholds for each that would signal meaningful erosion of those barriers. Virus Discovery refers to AI helping identify epidemic-potential pathogens — either by discovering novel dual-use information or by proliferating access to existing sensitive information. AI Lab Coach refers to AI teaching the specialized skills needed to actually synthesize a virus, including troubleshooting laboratory experiments. AI Ops Coach refers to AI helping design and execute complex operational attack plans, including circumventing defenses like DNA synthesis screening or avoiding law enforcement detection.

The central quantitative finding: if AI systems were to provide simultaneous [[wiki/definitions/uplift|uplift]] on virus synthesis (enabling 10 percentage points more STEM Bachelors to synthesize influenza-complexity pathogens) and operational attack planning, the annual probability of a lone wolf epidemic attack might rise from 0.15% to 1.0% — equivalent to roughly 12,000 additional expected deaths per year, or approximately $100B in expected annual harm. Scenarios where AI also helps discover novel viruses reach substantially higher expected damages. Expert and superforecaster reviews found similar medians, though with high uncertainty across all estimates. The report is explicitly scoped to exclude other AI bioweapons pathways — anthrax, state biological weapons programs — which require separate analysis.

## Key terms introduced

- [[wiki/definitions/lone-wolf-epidemic-terrorism|Lone Wolf Epidemic Terrorism]] (needs definition page)
- Capability-to-risk conversion (methodological contribution — see findings)

## Findings extracted

- [[wiki/findings/lone-wolf-bioterrorism-probability-ai-uplift|AI Uplift Could Substantially Raise Lone Wolf Bioterrorism Probability]]
- [[wiki/findings/capability-to-risk-conversion-framework|Framework: Converting Capability Evaluations to Bioterrorism Risk Assessments]]

## Tensions / contradictions with existing wiki

- Directly operationalizes the [[wiki/definitions/uplift|uplift]] concept that recurs across developer safety frameworks (Anthropic RSP, GDM FSF) but rarely gets quantified — this report is the most concrete attempt to attach a probability to uplift in a specific scenario.
- The "lone wolf only" scope limitation is important: the policy community often conflates lone wolf and state actor bioweapons risk, and Righetti's narrow framing prevents over-generalization from his estimates.
- The high uncertainty in all forecasts (5th to 95th percentile ranges span orders of magnitude) is consistent with [[wiki/sources/betterbench-ai-benchmark-assessment|BetterBench]] and [[wiki/sources/data-leakage-reproducibility-ml-science|Kapoor & Narayanan]] themes about the epistemic limits of quantitative evaluation in novel domains.

## Raw source

[[raw/Dual-Use_AI_Capabilities_and_the_Risk_of_Bioterrorism.pdf]]
