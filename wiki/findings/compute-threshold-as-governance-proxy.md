---
title: "Compute Thresholds as a Governance Proxy for Frontier AI"
type: finding
tags: [compute, ai-policy, governance-theory, technical-safety, theoretical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/eo-14110-biden-2023.md"
  - "raw/eu-ai-act-overview.md"
related:
  - "[[wiki/sources/eo-14110-biden-2023|Executive Order 14110: Safe, Secure, and Trustworthy AI (Biden, 2023)]]"
  - "[[wiki/sources/eu-ai-act-overview|EU AI Act Overview (Regulation EU 2024/1689)]]"
  - "[[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]]"
  - "[[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]]"
  - "[[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]]"
---

## Claim

Both EO 14110 (U.S., 2023) and the EU AI Act (2024) use training compute (measured in FLOPs) as a primary trigger for heightened regulatory obligations, establishing compute thresholds as the dominant proxy for frontier AI governance — though the two thresholds differ by an order of magnitude (10²⁶ vs. 10²⁵ FLOPs).

## Evidence

- [EO 14110 Sec. 4.2]: 10²⁶ FLOPs for dual-use foundation model reporting; 10²³ FLOPs for biology-focused models; 10²⁰ FLOPs/sec for training clusters → [[wiki/sources/eo-14110-biden-2023|Executive Order 14110: Safe, Secure, and Trustworthy AI (Biden, 2023)]]
- [EU AI Act]: 10²⁵ FLOPs as default trigger for GPAI systemic risk obligations → [[wiki/sources/eu-ai-act-overview|EU AI Act Overview (Regulation EU 2024/1689)]]

## Contradicted by / Tension with

- Compute efficiency improvements ("compute-capability decoupling") may allow capable models to be trained below thresholds, reducing the thresholds' effectiveness over time.
- Compute is a necessary but not sufficient proxy for risk: small, efficiently trained models may pose comparable risks to large, wastefully trained ones.
- The U.S.-EU threshold discrepancy (one order of magnitude) means comparable models face different regulatory treatment in different jurisdictions.

## Relevant concepts

[[wiki/definitions/compute-threshold|Compute Threshold (AI governance)]], [[wiki/definitions/frontier-ai|Frontier AI]], [[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]], [[wiki/definitions/general-purpose-ai|General-Purpose AI (GPAI)]]

## Notes

The use of compute thresholds is analogous to the use of tonnage (for shipping), megawatts (for nuclear), and annual production (for pharmaceutical) as regulatory triggers — simple, measurable proxies for underlying risk that are easier to administer than direct risk assessment. The analogy to nuclear weapons yield thresholds in nonproliferation is particularly instructive: both face the problem that the technology can be designed to stay below the threshold without reducing underlying risk.
