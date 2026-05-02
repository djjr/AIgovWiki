---
title: "Technical Legibility"
type: definition
tags: [governance-theory, technical-safety, ai-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/20250430 Talk GKH SGP.md"
related:
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
  - "[[wiki/definitions/frontier-ai|Frontier AI]]"
---

# Technical Legibility

The property of an AI system that makes it inspectable and auditable by external parties — a prerequisite for third-party oversight. Introduced in this context by Hadfield's Regulatory Markets framework: for an [[wiki/definitions/independent-verification-organization|IVO]] to perform its verification function, the AI system and its development process must be legible — it must leave a verifiable trail that connects capabilities and behaviors to their origin. Hadfield proposes mandatory model registration and "Agent IDs" as infrastructure for legibility: if an autonomous agent performs a transaction or makes a decision, a verifiable chain must exist back to the model's certification status.

Technical legibility is structurally distinct from interpretability (understanding what a model does internally) — it refers to auditability of the *process and provenance* rather than the *mechanism* of model behavior. However, the two are related: a model whose decision logic cannot be characterized at all is also difficult to audit against defined outcome criteria. The absence of technical legibility infrastructure is one of the key practical obstacles to implementing regulatory markets at scale for frontier AI.
