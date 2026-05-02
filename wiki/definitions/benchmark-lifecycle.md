---
title: "Benchmark Lifecycle"
type: definition
tags: [technical-safety, governance-theory, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/BetterBench Assessing AI Benchmarks, Uncovering Issues, and Establishing Best Practices.pdf"
related:
  - "[[wiki/sources/betterbench-ai-benchmark-assessment|BetterBench: Assessing AI Benchmarks]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
---

The five-stage model of an AI benchmark's development and maintenance, formalized by Reuel et al. (BetterBench, NeurIPS 2024): (1) **Design** — define purpose, scope, tasks, datasets, and metrics, involving domain experts and user personas; (2) **Implementation** — construct the benchmark, including evaluation code, contamination protections, and replication scripts; (3) **Documentation** — describe tasks, datasets, design decisions, limitations, licensing, and statistical reporting; (4) **Maintenance** — address user-reported issues, update for continued relevance, assess saturation; (5) **Retirement** — communicate end-of-life to stakeholders, archive data and code, mark benchmark as retired. BetterBench maps 46 quality criteria to these stages and finds implementation is the systematically weakest stage across existing benchmarks (avg 6.2/15). Governance relevance: capability-based regulatory triggers (UK AISI, EU AI Act) implicitly depend on benchmarks meeting quality standards across all five stages.
