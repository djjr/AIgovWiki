---
title: "Google DeepMind Frontier Safety Framework (2024)"
type: source
tags: [industry-practice, technical-safety, risk-existential, risk-misuse, governance-theory, empirical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/gdm-frontier-safety-framework.md"
related:
  - "[[wiki/sources/anthropic-rsp|Anthropic's Responsible Scaling Policy (2023)]]"
  - "[[wiki/sources/openai-preparedness-framework|OpenAI Preparedness Framework v2 (2025)]]"
  - "[[wiki/sources/seoul-frontier-ai-safety-commitments-2024|Frontier AI Safety Commitments, AI Seoul Summit 2024]]"
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
  - "[[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]]"
---

# Google DeepMind Frontier Safety Framework (2024)

## Précis

Google DeepMind's Frontier Safety Framework (FSF), published May 17, 2024, establishes a three-component approach to prospective severe risk management: identification of **Critical Capability Levels (CCLs)** in high-risk domains; periodic model evaluation against early-warning indicators; and graduated mitigation plans triggered when models approach CCLs. The initial four risk domains are autonomy, biosecurity, cybersecurity, and ML R&D (the last capturing the risk of AI-accelerated capability escalation, a distinct concern from the direct-harm domains). The framework is explicitly exploratory and expected to evolve significantly; GDM committed to full implementation by early 2025.

The CCL concept is structurally similar to Anthropic's ASL thresholds and OpenAI's capability levels but differs in emphasis: CCLs are defined by what a threat actor *could do* with model capabilities (the "uplift" framing), not by what the model itself can do in isolation. This threat-actor-centered analysis requires modelling adversarial use-cases, which GDM addresses through an early warning evaluation suite developed in coordination with its Frontier Safety Team. The framework also distinguishes security mitigations (preventing model weight exfiltration) from deployment mitigations (restricting access to critical capabilities) — a distinction that maps well onto the difference between catastrophic misuse risk and more ordinary dual-use concerns.

GDM's FSF was submitted alongside the Seoul Safety Commitments, fulfilling the commitment to publish a safety framework focused on severe risks. The technical report accompanying the FSF includes an "early warning system" methodology — predicting capability trajectories using expert forecasters — that has influenced subsequent academic and policy discussions of AI evaluation.

## Key terms introduced

- [[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]] — CCLs: the minimum model capability level at which a threat actor could use the model to cause severe harm in a risk domain
- Early warning evaluations — test suites designed to detect approach to CCLs before they are reached
- Uplift — the incremental increase in a threat actor's capability to cause harm provided by an AI model, above the baseline achievable without it

## Findings extracted

- [[wiki/findings/responsible-capability-scaling-as-industry-norm|Responsible Capability Scaling Has Become the Dominant Voluntary Industry Safety Approach]]
- [[wiki/findings/converging-risk-domains-bio-cyber-autonomy|Convergence on Biosecurity, Cybersecurity, and Autonomy as Priority Risk Domains]]
- [[wiki/findings/uplift-framing-for-capability-assessment|Uplift Framing For Capability Assessment]]

## Tensions / contradictions with existing wiki

- GDM's four risk domains (autonomy, biosecurity, cybersecurity, ML R&D) differ slightly from OpenAI's tracked categories (bio/chem, cybersecurity, AI self-improvement) — suggesting the field has not yet converged on a canonical domain taxonomy.

## Raw source

[[raw/gdm-frontier-safety-framework.md]]
