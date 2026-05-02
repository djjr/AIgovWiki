---
title: "Computational Reproducibility Crisis in Scientific Research"
type: finding
tags: [technical-safety, empirical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/CORE-Bench Fostering the Credibility of Published Research Through a Computational Reproducibility Agent Benchmark.pdf"
related:
  - "[[wiki/sources/core-bench-computational-reproducibility|CORE-Bench]]"
  - "[[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps Undermine AI Governance]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
---

## Claim

Computational reproducibility is severely deficient across scientific disciplines even when code and data are provided, and current AI agents can automate only a small fraction of reproduction tasks — making near-term AI-driven scientific verification unlikely and leaving the epistemic foundations of AI policy research fragile.

## Evidence

- CORE-Bench (Siegel et al., Princeton 2024): documented reproducibility failure rates across 15 fields (e.g., 472/549 NLP papers; 484/1008 finance papers; 1480/2000 multi-field papers fail computational reproducibility despite available code/data); best AI agent (CORE-Agent, GPT-4o) achieves 60% on easiest tasks, 21% on hardest → [[wiki/sources/core-bench-computational-reproducibility|CORE-Bench]]

## Contradicted by / Tension with

Claims about AI agents' near-term capacity to automate scientific research (e.g., "AI Scientist" frameworks, Lu et al. 2024) are optimistic relative to CORE-Bench's empirical results on the narrower task of reproducing existing work.

## Relevant concepts

[[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/mechanistic-interpretability|Mechanistic Interpretability]]

## Notes

Governance relevance operates at two levels. First, policy decisions about AI capabilities are frequently grounded in published research findings; if those findings are not computationally reproducible, the evidence base for governance is weaker than assumed. Second, AI safety research itself is subject to the same reproducibility problems — safety-relevant empirical results (benchmark scores, evaluation outcomes, interpretability findings) may not be independently verifiable. The connection to [[wiki/findings/benchmark-quality-gaps-undermine-governance|Benchmark Quality Gaps]] is direct: a benchmark whose results cannot be replicated fails one of the core criteria BetterBench identifies as systematically missing.
