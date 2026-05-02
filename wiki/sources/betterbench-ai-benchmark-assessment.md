---
title: "BetterBench: Assessing AI Benchmarks (Reuel et al., 2024)"
type: source
tags: [technical-safety, governance-theory, ai-policy, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/BetterBench Assessing AI Benchmarks, Uncovering Issues, and Establishing Best Practices.pdf"
related:
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
  - "[[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]]"
  - "[[wiki/findings/compute-threshold-as-governance-proxy|Compute Thresholds as a Governance Proxy]]"
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as Governance Prerequisite]]"
---

## Précis

BetterBench (Reuel et al., NeurIPS 2024, Stanford) presents the first structured assessment framework for AI benchmark quality, covering 46 criteria across a five-stage [[wiki/definitions/benchmark-lifecycle|benchmark lifecycle]] (design, implementation, documentation, maintenance, retirement). Applied to 24 benchmarks — 16 foundation model (FM) and 8 non-FM — it finds large and consequential quality differences: the widely-used MMLU benchmark scored lowest (weighted average 5.5/15), while GPQA scored highest (11.0). Implementation is the weakest lifecycle stage across all benchmarks (avg 6.2/15), with near-universal failure on replication scripts (avg score 3.75) and statistical significance reporting (avg 5.62). Benchmark design quality strongly predicts usability (Pearson r=0.730 for FM benchmarks, p=0.001).

The governance stakes are made explicit in the paper: benchmarks are now embedded in policy infrastructure — the UK AI Security Institute's *Inspect* framework and EU AI Act Article 51 both mandate or rely on benchmark-based capability evaluation. If these benchmarks fail basic quality criteria, governance mechanisms that treat them as proxies for capability or risk inherit those failures. This connects directly to the [[wiki/findings/government-technical-capacity-as-governance-prerequisite|government technical capacity]] problem: regulators who depend on external benchmarks without independent quality assessment are structurally vulnerable to measurement error in their compliance triggers.

## Key terms introduced

- [[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]] — five-stage model: design → implementation → documentation → maintenance → retirement

## Findings extracted

- [[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]

## Tensions / contradictions with existing wiki

Creates tension with the [[wiki/findings/responsible-capability-scaling-as-industry-norm|Responsible Capability Scaling as Industry Norm]] cluster: industry safety frameworks (Anthropic RSP, GDM FSF, OpenAI Preparedness) use benchmark-based capability evaluations as scaling-pause triggers. If those benchmarks have systematic quality problems — especially in reproducibility and statistical reporting — the reliability of the trigger mechanism is weaker than it appears.

## Raw source

[[raw/BetterBench Assessing AI Benchmarks, Uncovering Issues, and Establishing Best Practices.pdf]]
