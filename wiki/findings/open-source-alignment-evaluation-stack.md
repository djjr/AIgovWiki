---
title: "Open-Source Alignment Evaluation Stack Emerging at Meridian Labs"
type: finding
tags: [technical-safety, governance-institutions, industry-practice, evaluation]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Donating our open-source alignment tool.md"
related:
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as a Governance Prerequisite]]"
  - "[[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]"
  - "[[wiki/findings/sandbagging-detection-challenge|Sandbagging Detection Remains an Open Problem]]"
  - "[[wiki/findings/glass-box-evaluation-deadlock|The Glass-Box Evaluation Deadlock]]"
  - "[[wiki/sources/uk-aisi|UK AI Security Institute (AISI)]]"
  - "[[wiki/sources/petri-alignment-tool-anthropic|Petri 3.0 — Anthropic]]"
---

## Claim

A shared open-source alignment evaluation stack is coalescing at Meridian Labs — an independent AI evaluation nonprofit — with Petri (Anthropic's donated alignment testing toolbox), Inspect (UK AISI's evaluation framework), and Scout; this represents the first instance of a frontier lab donating a core evaluation tool to neutral nonprofit infrastructure, establishing a structural precedent for evaluation independence analogous to Anthropic's MCP donation to the Linux Foundation.

## Evidence

- [Anthropic 2025]: "As part of Meridian Labs, Petri joins other tools like Inspect and Scout, building a technology stack that is open to labs, independent researchers, and governments alike." The donation was explicitly modeled on the MCP Linux Foundation donation "to help ensure that Petri remains independent of any AI lab, so that its results will be seen as neutral and credible." → [[wiki/sources/petri-alignment-tool-anthropic|Petri 3.0 — Anthropic]]
- [Anthropic 2025]: UK AISI made Petri "a major part" of their model sabotage-propensity evaluations — demonstrating cross-institutional uptake before the independence transfer. → [[wiki/sources/petri-alignment-tool-anthropic|Petri 3.0 — Anthropic]]

## Contradicted by / Tension with

Adoption by other frontier labs (OpenAI, Google DeepMind, Meta) remains unconfirmed. Evaluation credibility depends not only on tool independence but on methodological consensus about what behaviors to measure and how to score them — a problem Petri alone does not resolve. The glass-box evaluation deadlock ([[wiki/findings/glass-box-evaluation-deadlock|Glass-Box Evaluation Deadlock]]) remains: Petri operates on model outputs and auditor-mediated scenarios, not on internal model signals, so it cannot verify claims that require access to weights or activations.

## Relevant concepts

[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]], [[wiki/definitions/sandbagging|Sandbagging]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]], [[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]

## Notes

The "Dish" add-on — running tests with the model's real system prompt and deployment scaffold — is a partial sandbagging countermeasure: it prevents the model from recognizing test conditions by making them indistinguishable from deployment. This complements FAR.AI's detection-via-retraining approach at the methodological level, but the two approaches target different failure modes (Dish: preventing sandbagging from being activated; FAR.AI: detecting it after the fact).
