---
title: "The Glass-Box Evaluation Deadlock"
type: finding
tags: [technical-safety, governance-mechanisms, evaluation, governance-theory]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Securing deep frontier AI evaluations.md"
related:
  - "[[wiki/findings/government-technical-capacity-as-governance-prerequisite|Government Technical Capacity as a Governance Prerequisite]]"
  - "[[wiki/findings/taig-taxonomy-as-research-agenda|TAIG Taxonomy Defines an Underbuilt Field]]"
  - "[[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]"
  - "[[wiki/findings/sandbagging-detection-challenge|Sandbagging Detection Remains an Open Problem]]"
  - "[[wiki/definitions/confidential-computing-evaluation|Confidential-Computing Evaluation Facility]]"
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
  - "[[wiki/sources/confidential-computing-frontier-evaluation|Securing Deep Frontier AI Evaluations]]"
---

## Claim

Frontier AI safety governance faces a structural deadlock: regulators need access to a model's internal signals (gradients, activations, backdoors) to verify safety claims that black-box output testing cannot reach, but granting this access requires exposing model weights and architecture worth billions — which providers refuse — so deep evaluations either do not happen or are conducted internally by the provider being evaluated.

## Evidence

- [Tlaie Boria 2026]: "For these claim classes, evaluators need analytical access to the model's internal signals (gradients, activations, attention patterns) not just its outputs. But granting that access has historically meant exposing assets worth billions, which providers reasonably refuse. The result has been a deadlock: deeper evaluations either don't happen, or are conducted internally by the very provider being evaluated." → [[wiki/sources/confidential-computing-frontier-evaluation|Securing Deep Frontier AI Evaluations]]

## Contradicted by / Tension with

The TAIG taxonomy ([[wiki/findings/taig-taxonomy-as-research-agenda|TAIG]]) documents this gap as a missing technical capacity but does not propose a concrete solution. TIAP 2026 ([[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]) treats evaluation reliability as a governance infrastructure failure without distinguishing black-box from glass-box constraints. The Pour Demain brief's proposed confidential-computing facility is a candidate solution but remains in pre-pilot; its technical claims have not been independently validated at the scale of closed frontier models.

## Relevant concepts

[[wiki/definitions/confidential-computing-evaluation|Confidential-Computing Evaluation Facility]], [[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]], [[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]

## Notes

The deadlock has a second dimension beyond IP protection: the chicken-and-egg adoption problem. Providers will not commit proprietary weights to a novel evaluation architecture before it has been demonstrated at frontier scale, but frontier-scale demonstration requires proprietary weights. The Pour Demain proposal explicitly addresses this with a staged open-weights validation phase. This is a governance infrastructure bootstrapping problem with structural parallels to IVO adoption challenges (see [[wiki/findings/voluntary-ivo-design-tradeoff|Voluntary IVO Participation: Design Tradeoff]]).
