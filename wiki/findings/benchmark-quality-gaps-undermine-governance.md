---
title: "Benchmark Quality Gaps Undermine AI Governance"
type: finding
tags: [technical-safety, governance-theory, ai-policy, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/BetterBench Assessing AI Benchmarks, Uncovering Issues, and Establishing Best Practices.pdf"
related:
  - "[[wiki/sources/betterbench-ai-benchmark-assessment|BetterBench: Assessing AI Benchmarks]]"
  - "[[wiki/findings/compute-threshold-as-governance-proxy|Compute Thresholds as a Governance Proxy]]"
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as Governance Prerequisite]]"
  - "[[wiki/findings/responsible-capability-scaling-as-industry-norm|Responsible Capability Scaling as Industry Norm]]"
  - "[[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
---

## Claim

AI benchmarks embedded in governance frameworks have significant quality problems — especially in reproducibility and statistical reporting — that undermine their reliability as capability proxies and regulatory triggers.

## Evidence

- BetterBench (Reuel et al., NeurIPS 2024): 24 benchmarks assessed against 46 criteria; MMLU (widely used for capability evaluation) scored 5.5/15 weighted average; implementation stage avg 6.2/15 across all benchmarks; replication script score avg 3.75/15; statistical significance reporting avg 5.62/15; the UK AISI *Inspect* framework and EU AI Act Article 51 are both cited as governance uses of benchmarks → [[wiki/sources/betterbench-ai-benchmark-assessment|BetterBench: Assessing AI Benchmarks]]

## Contradicted by / Tension with

Industry responsible scaling policies (Anthropic RSP, GDM FSF, OpenAI Preparedness Framework) use benchmark-based evaluations as capability-level triggers for scaling pauses. Those frameworks do not address benchmark quality as a variable — they assume the benchmark is a reliable instrument. BetterBench's findings add structural uncertainty to that assumption.

## Relevant concepts

[[wiki/definitions/benchmark-lifecycle|Benchmark Lifecycle]], [[wiki/definitions/compute-threshold|Compute Threshold]], [[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]]

## Notes

The governance implication is an instance of the [[wiki/findings/government-technical-capacity-as-governance-prerequisite|government technical capacity]] problem at one level deeper: even if a regulator has the capacity to run benchmarks independently, the benchmarks themselves may be unreliable instruments. Independent benchmark quality assessment — not just independent evaluation — may be a prerequisite for robust capability-based governance.
