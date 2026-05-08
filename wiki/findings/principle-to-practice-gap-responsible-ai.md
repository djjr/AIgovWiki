---
title: "Principle-to-Practice Gap in Responsible AI Governance"
type: finding
tags: [governance-theory, industry-practice, ai-policy]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/Responsible artificial intelligence governance A review and research framework.md"
related:
  - "[[wiki/definitions/responsible-ai-governance|Responsible AI Governance]]"
  - "[[wiki/findings/broad-adoption-shallow-commitment-dynamic|Broad Adoption, Shallow Commitment: The OECD AI Principles Dynamic]]"
  - "[[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem with ML]]"
  - "[[wiki/sources/responsible-ai-governance-review-framework|Responsible AI Governance — Review and Research Framework]]"
---

# Principle-to-Practice Gap in Responsible AI Governance

## Claim

Adherence to responsible AI principles is systematically deprioritized during actual AI implementation and management; the gap between stated principles and enacted governance practices is the central challenge in responsible AI, not the identification of principles themselves.

## Evidence

- [Papagiannidis, Mikalef & Conboy 2024]: Systematic literature review of empirical studies finds that while seven responsible AI principles (accountability, fairness, human agency/oversight, privacy/data governance, technical robustness/safety, transparency, social/environmental well-being) are well-established in policy and academic literature, organizations face a structural challenge translating them into practice. "For most organizations, AI has several potential ramifications and unexpected and unwanted outcomes." The governance practices literature — structural (roles/authority), procedural (processes/audits), relational (stakeholder engagement, AI literacy) — is substantially underdeveloped relative to the principles literature. → [[wiki/sources/responsible-ai-governance-review-framework|Responsible AI Governance — Review and Research Framework]]
- Antecedent structure: responsible AI governance is mediated by organizational values and path dependencies, which filter societal norms before they reach governance practice — explaining why identical principles produce divergent implementation across organizations.

## Contradicted by / Tension with

- [[wiki/findings/broad-adoption-shallow-commitment-dynamic|Broad Adoption, Shallow Commitment]]: The OECD dynamic is the international-level version of the same phenomenon — formal endorsement without behavioral constraint. The Papagiannidis et al. finding adds the organizational mechanism: path dependencies and corporate culture mediate how external normative signals are absorbed and acted upon.
- [[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem]]: Hadfield's point that [[wiki/definitions/command-and-control-regulation|command-and-control regulation]] cannot specify ML decision logic is partly a supply-side explanation for why procedural governance practices are so hard to implement: you cannot audit what you cannot specify. Responsible AI governance practices presuppose a degree of [[wiki/definitions/technical-legibility|Technical Legibility]] that frontier models currently lack.
- EU AI Act obligations map directly onto several of the seven principles — creating legally mandated structural and procedural practices for high-risk AI operators. Whether legal mandate closes the principle-to-practice gap, or whether it reproduces compliance theater at scale, is an open empirical question the paper identifies as a research priority.

## Relevant concepts

[[wiki/definitions/responsible-ai-governance|Responsible AI Governance]], [[wiki/definitions/risk-based-approach|Risk-Based Approach (AI regulation)]], [[wiki/definitions/technical-legibility|Technical Legibility]]

## Notes

This finding is grounded in IS (information systems) / management research rather than policy or technical AI safety, making it a usefully distinct perspective from the rest of the wiki. The organizational-level analysis (how firms actually implement governance) complements the system-level analysis (what regulations require) and the technical-level analysis (what interpretability tools can reveal). The three governance practice types — structural, procedural, relational — provide a checklist for evaluating whether any governance instrument (NIST RMF, EU AI Act compliance, voluntary RSP frameworks) has actually been instantiated.
