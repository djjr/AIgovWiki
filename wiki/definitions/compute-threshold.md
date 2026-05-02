---
title: "Compute Threshold (AI governance)"
type: definition
tags: [compute, ai-policy, governance-theory, technical-safety]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eo-14110-biden-2023.md"
  - "raw/eu-ai-act-overview.md"
related:
  - "[[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]]"
  - "[[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
  - "[[wiki/definitions/compute-governance|Compute Governance]]"
  - "[[wiki/findings/compute-governance-four-properties|Compute Governance: Four Properties That Make It Tractable]]"
---

# Compute Threshold (AI governance)

A quantitative measure of training computation — expressed in floating-point operations (FLOPs) — used as a regulatory trigger in AI governance frameworks. Compute thresholds operationalize "frontier" or "powerful" AI by reference to a measurable physical quantity (hardware operations), avoiding the need to assess model behavior or capabilities directly.

Two thresholds are currently embedded in governance frameworks:

- **EO 14110 (U.S., 2023)**: 10²⁶ FLOPs for general [[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]] reporting requirements; 10²³ FLOPs for biology-focused models; 10²⁰ FLOPs/sec for training compute clusters. (Revoked Jan 2025.)
- **EU AI Act (2024)**: 10²⁵ FLOPs as the default trigger for [[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]] systemic risk obligations.

The EU threshold is one order of magnitude lower than EO 14110, meaning the EU applies heavier obligations at a lower capability level. Both are subject to revision as compute efficiency improves and capable models are trained with fewer FLOPs (the "compute-capability decoupling" problem). Compute thresholds have been criticized as governance proxies that may be gamed through efficient training techniques and that do not capture the actual risk properties of a model; they have been defended as the only objective, pre-deployment signal currently available.
