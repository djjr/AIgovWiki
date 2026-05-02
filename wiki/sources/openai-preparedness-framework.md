---
title: "OpenAI Preparedness Framework v2 (2025)"
type: source
tags: [industry-practice, technical-safety, risk-existential, risk-misuse, governance-theory, empirical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/openai-preparedness-framework.md"
related:
  - "[[wiki/sources/anthropic-rsp|Anthropic's Responsible Scaling Policy (2023)]]"
  - "[[wiki/sources/gdm-frontier-safety-framework|Google DeepMind Frontier Safety Framework (2024)]]"
  - "[[wiki/sources/seoul-frontier-ai-safety-commitments-2024|Frontier AI Safety Commitments, AI Seoul Summit 2024]]"
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
---

# OpenAI Preparedness Framework v2 (2025)

## Précis

OpenAI's updated Preparedness Framework (v2, April 15, 2025) is OpenAI's contribution to the emerging industry standard of capability-based safety frameworks. It advances on v1 primarily by sharpening risk prioritization criteria, introducing a two-threshold severity system, and adding "Research Categories" for capability domains not yet mature enough for the main framework. Risks are included only if they meet five criteria: plausible, measurable, severe, *net new* (not merely amplifying existing baseline risks), and instantaneous or irremediable. This last pair of criteria is analytically significant: they capture the concern that AI harms may be qualitatively different from prior technological harms in speed and irreversibility.

The two thresholds — **High** (amplifies existing pathways to severe harm) and **Critical** (introduces unprecedented new pathways) — map to operational commitments: High capability models must have safeguards before deployment; Critical capability models must have safeguards during development. **Tracked Categories** include Biological/Chemical, Cybersecurity, and AI Self-improvement; **Research Categories** include Long-range Autonomy, Sandbagging (intentional underperformance), Autonomous Replication and Adaptation, Undermining Safeguards, and Nuclear/Radiological. Persuasion risks are explicitly handled outside the framework (via Model Spec and misuse policy), signaling a deliberate scope limitation.

The governance structure — a cross-functional **Safety Advisory Group (SAG)** that reviews Capabilities Reports and Safeguards Reports and makes recommendations to OpenAI Leadership — represents an internal accountability architecture that is more formalized than the RSP but less externally verifiable. The explicit provision that OpenAI may *lower* requirements if a competitor deploys a high-risk system "without comparable safeguards" — subject to conditions — is the framework's most contested element: it codifies a race-to-the-bottom pressure release valve.

## Key terms introduced

- Tracked vs. Research Categories — mature evaluated domains vs. emerging domains under active threat-model development
- High / Critical capability thresholds — amplification vs. unprecedented pathway distinction
- Safety Advisory Group (SAG) — OpenAI's internal cross-functional safety governance body
- Defense in depth — the principle that multiple independent safeguards are required; no single measure is relied upon

## Findings extracted

- [[wiki/findings/responsible-capability-scaling-as-industry-norm|Responsible Capability Scaling Has Become the Dominant Voluntary Industry Safety Approach]]
- [[wiki/findings/converging-risk-domains-bio-cyber-autonomy|Convergence on Biosecurity, Cybersecurity, and Autonomy as Priority Risk Domains]]
- [[wiki/findings/net-new-irremedibility-as-severity-criteria|Net New Irremedibility As Severity Criteria]]

## Tensions / contradictions with existing wiki

- The conditional standards-lowering provision (responding to competitor deployment of high-risk systems) creates a collective action problem absent from the Anthropic RSP and GDM FSF — it acknowledges competitive pressure as a legitimate reason to weaken safety requirements.

## Raw source

[[raw/openai-preparedness-framework.md]]
