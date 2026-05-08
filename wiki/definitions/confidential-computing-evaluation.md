---
title: "Confidential-Computing Evaluation Facility"
type: definition
tags: [technical-safety, evaluation, governance-mechanisms]
created: 2026-05-08
updated: 2026-05-08
sources:
  - "raw/Securing deep frontier AI evaluations.md"
related:
  - "[[wiki/definitions/dangerous-capability-evaluation|Dangerous Capability Evaluation]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/findings/glass-box-evaluation-deadlock|The Glass-Box Evaluation Deadlock]]"
  - "[[wiki/definitions/sandbagging|Sandbagging]]"
---

A proposed evaluation architecture (Tlaie Boria / Pour Demain, 2026) that uses hardware-rooted trusted execution environments — confidential computing substrates with attestation on H200-class GPUs — to allow independent auditors to access a model's internal signals (gradients, activations, attention patterns) without the provider exposing model weights or architecture as trade secrets. Access is mediated through a standardized Evaluation Instrumentation Interface (EII): typed callback endpoints the provider implements against its own model, invocable by auditors without seeing inference code. Audit evidence is rendered server-side, cryptographically bound to the platform identity, and accumulated in a longitudinal ledger. Described as a "de facto glass-box facility" — giving evaluators the analytical depth of internal access while preserving the IP protections that prevent providers from participating in current deep evaluation regimes.
