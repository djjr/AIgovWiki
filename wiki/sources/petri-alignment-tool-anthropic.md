---
title: "Donating Our Open-Source Alignment Tool — Petri 3.0 (Anthropic, 2025)"
type: source
tags: [technical-safety, industry-practice, governance-institutions, evaluation]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Donating our open-source alignment tool.md"
related:
  - "[[wiki/findings/open-source-alignment-evaluation-stack|Open-Source Alignment Evaluation Stack Emerging at Meridian Labs]]"
  - "[[wiki/findings/sandbagging-detection-challenge|Sandbagging Detection Remains an Open Problem]]"
  - "[[wiki/sources/uk-aisi|UK AI Security Institute (AISI)]]"
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as a Governance Prerequisite]]"
---

## Précis

Anthropic's announcement that Petri — its open-source alignment testing toolbox — has been donated to Meridian Labs, an AI evaluation nonprofit, and updated to version 3.0. Petri runs alignment-relevant scenario tests against any LLM using a separate "auditor" model to simulate scenarios and a "judge" model to score transcripts for misaligned behaviors (deception, sycophancy, harmful cooperation). It has been used in every Claude model assessment since Claude Sonnet 4.5, and was adopted by the UK AISI as a major component of their model sabotage-propensity evaluations. Version 3.0 introduces: (1) architectural changes for adaptability (auditor and target model separated); (2) "Dish," an add-on that runs tests using the model's real system prompt and deployment scaffold to prevent models from recognizing they are being tested; and (3) integration with Bloom, Anthropic's more in-depth behavior assessment tool. The donation to Meridian Labs — modeled on the MCP donation to the Linux Foundation — is explicitly intended to establish independence from any single lab so that Petri's results are seen as credible by the whole industry.

The governance significance is structural: Petri joins UK AISI's Inspect and Meridian Labs' Scout in a shared open-source evaluation stack. This is the first public instance of a major frontier lab donating a core alignment evaluation tool to an independent nonprofit for cross-industry use, establishing a precedent for how proprietary evaluation methodologies can transition to neutral public infrastructure. Notably, "Dish" directly addresses the sandbagging problem ([[wiki/findings/sandbagging-detection-challenge|Sandbagging Detection]]) by making the testing environment indistinguishable from real deployment — a complementary approach to the detection-via-retraining method FAR.AI tested.

## Key terms introduced

No new definitions; sandbagging is already defined → [[wiki/definitions/sandbagging|Sandbagging]].

## Findings extracted

- [[wiki/findings/open-source-alignment-evaluation-stack|Open-Source Alignment Evaluation Stack Emerging at Meridian Labs]]

## Tensions / contradictions with existing wiki

The TIAP 2026 finding ([[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]) describes governance infrastructure as not keeping pace with what it is being asked to do. The Petri donation represents a countervailing development: a frontier lab proactively standardizing and spinning out evaluation infrastructure to independent governance. Whether this is sufficient to close the gap depends on adoption by other labs and regulatory uptake — neither is assured.

## Raw source

[[raw/Donating our open-source alignment tool.md]]
