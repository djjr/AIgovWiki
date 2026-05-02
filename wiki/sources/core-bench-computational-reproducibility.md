---
title: "CORE-Bench: Computational Reproducibility Agent Benchmark (Siegel et al., 2024)"
type: source
tags: [technical-safety, empirical, llm]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/CORE-Bench Fostering the Credibility of Published Research Through a Computational Reproducibility Agent Benchmark.pdf"
related:
  - "[[wiki/findings/computational-reproducibility-crisis-ai-research|Computational Reproducibility Crisis in Scientific Research]]"
  - "[[wiki/sources/betterbench-ai-benchmark-assessment|BetterBench: Assessing AI Benchmarks]]"
  - "[[wiki/sources/scaling-monosemanticity-claude3-sonnet|Scaling Monosemanticity]]"
---

## Précis

CORE-Bench (Siegel et al., Princeton 2024) introduces a benchmark for evaluating AI agents on computational reproducibility — the ability to re-run the code from published research papers and obtain the originally reported results. The benchmark comprises 270 tasks drawn from 90 papers across computer science, social science, and medicine, at three difficulty levels (Easy: extract from provided output; Medium: run Docker container and extract; Hard: install dependencies, determine run command, execute, and extract). Its motivating premise is a documented crisis: across 15 scientific disciplines, significant proportions of published papers are computationally irreproducible even when code and data are provided (e.g., 472/549 NLP papers; 484/1008 finance papers; 1480/2000 multi-field papers).

Current AI agents perform poorly on the benchmark. The best agent — a task-specific variant of AutoGPT (CORE-Agent, GPT-4o) — achieves 60% on the easiest tasks but only 21% on the hardest, indicating that end-to-end scientific workflow execution remains well beyond current capabilities despite progress on narrower coding tasks. For this wiki, the primary governance relevance is indirect but real: policy decisions about AI capabilities are frequently grounded in published research findings. If those findings are not computationally reproducible, the epistemic foundation for governance is weaker than assumed. This applies reflexively to AI safety research itself, and connects to the broader question of what counts as credible evidence in AI policy.

## Key terms introduced

No new definitions warranted; "computational reproducibility" is self-explanatory.

## Findings extracted

- [[wiki/findings/computational-reproducibility-crisis-ai-research|Computational Reproducibility Crisis in Scientific Research]]

## Tensions / contradictions with existing wiki

No direct contradictions. Connects with [[wiki/sources/betterbench-ai-benchmark-assessment|BetterBench]] and [[wiki/sources/scaling-monosemanticity-claude3-sonnet|Scaling Monosemanticity]] as part of an emerging cluster on the epistemic infrastructure of AI evaluation — the gap between what AI systems claim to be able to do and what can be independently verified.

## Raw source

[[raw/CORE-Bench Fostering the Credibility of Published Research Through a Computational Reproducibility Agent Benchmark.pdf]]
