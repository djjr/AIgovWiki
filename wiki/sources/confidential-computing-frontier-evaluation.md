---
title: "Securing Deep Frontier AI Evaluations (Tlaie Boria / Pour Demain, 2026)"
type: source
tags: [technical-safety, governance-mechanisms, evaluation, governance-theory]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Securing deep frontier AI evaluations.md"
related:
  - "[[wiki/findings/glass-box-evaluation-deadlock|The Glass-Box Evaluation Deadlock]]"
  - "[[wiki/definitions/confidential-computing-evaluation|Confidential-Computing Evaluation Facility]]"
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as a Governance Prerequisite]]"
  - "[[wiki/findings/taig-taxonomy-as-research-agenda|TAIG Taxonomy Defines an Underbuilt Field]]"
  - "[[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]"
---

## Précis

A technical brief from Alejandro Tlaie Boria (Pour Demain NGO) proposing a confidential-computing facility to enable deep safety audits of frontier AI models without requiring providers to expose model weights, architecture details, or training artefacts as trade secrets. The proposal addresses a structural deadlock: regulators increasingly need to verify claims that black-box output testing cannot reach (suppressed dangerous capabilities, training-time backdoors, surface-masking vs. genuine removal of hazardous mechanisms) — but granting the evaluator the required access to internal signals (gradients, activations, attention patterns) has historically required exposing assets worth billions, which providers refuse. The result is that deep evaluations either do not happen or are conducted internally by the provider being evaluated.

The proposed solution has three integrated layers: a confidential-computing substrate (hardware-rooted attestation on H200-class GPUs, now generally available since 2025), an Evaluation Instrumentation Interface (EII) — a standardized set of typed callback endpoints that providers implement against their own model for auditors to invoke without seeing inference code — and a governed evidence pipeline with export budgets and cryptographically bound audit reports. The brief notes conditional consortium commitments already secured and an ongoing pre-pilot. It is explicitly designed to break the chicken-and-egg problem: providers will not commit proprietary weights to a novel architecture before it has been demonstrated at frontier scale, but frontier-scale demonstration requires proprietary weights.

For the wiki's core themes, this is significant: it represents a proposed technical solution to one of the central gaps identified in the TAIG taxonomy — the absence of infrastructure enabling genuinely independent, deep evaluation of closed frontier models. It also has direct IVO relevance: an IVO conducting dangerous capability evaluations currently faces exactly this black-box constraint.

## Key terms introduced

- [[wiki/definitions/confidential-computing-evaluation|Confidential-Computing Evaluation Facility]] — hardware-rooted trusted execution environment enabling evaluators to access model internals without provider IP exposure

## Findings extracted

- [[wiki/findings/glass-box-evaluation-deadlock|The Glass-Box Evaluation Deadlock]]

## Tensions / contradictions with existing wiki

The TAIG finding ([[wiki/findings/taig-taxonomy-as-research-agenda|TAIG Taxonomy]]) identifies model provenance and deployment monitoring as missing governance infrastructure; this brief addresses the evaluation-access dimension of that gap. TIAP 2026 ([[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]) noted versioning is unverifiable and policy-grade evaluations fail validity/reliability tests; confidential computing addresses a subset of this by making internal model state accessible for verification, though it does not resolve all validity concerns.

## Raw source

[[raw/Securing deep frontier AI evaluations.md]]
