---
title: "Contextual Privacy (Mechanism Design)"
type: definition
tags: [economics, governance-theory, theoretical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Contextually Private Mechanisms.pdf"
related:
  - "[[wiki/sources/contextually-private-mechanisms-haupt-hitzig|Contextually Private Mechanisms]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
---

Introduced by Haupt & Hitzig (2025): a *contextual privacy violation* occurs when an information-elicitation protocol causes a designer to learn something superfluous — a piece of an agent's private information that is not necessary for computing the intended social choice rule. A protocol is *maximally contextually private* if no alternative protocol produces a strict subset of those violations while still implementing the same rule; some rules admit protocols that are *fully* contextually private (no violations for any agent at any type profile). The framework is distinct from differential privacy (which restricts the sensitivity of outcomes to revealed information) and from unconditional privacy (which requires nothing beyond the outcome is revealed); contextual privacy is relational — it asks what disclosures are necessary given the specific rule being implemented. In auctions, maximal contextual privacy is achieved by delaying queries to agents whose information is not yet decision-relevant (the ascending-join protocol). Relevant to AI governance mechanism design: any regime requiring regulated entities to disclose information (capability evaluations, audit findings, incident reports) can be analyzed for which disclosures are necessary vs. superfluous to the regulatory rule.
