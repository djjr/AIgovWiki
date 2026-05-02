---
title: "Contextually Private Mechanisms (Haupt & Hitzig, 2025)"
type: source
tags: [economics, governance-theory, theoretical]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Contextually Private Mechanisms.pdf"
related:
  - "[[wiki/definitions/contextual-privacy-mechanism-design|Contextual Privacy (Mechanism Design)]]"
  - "[[wiki/definitions/regulatory-markets|Regulatory Markets]]"
  - "[[wiki/definitions/independent-verification-organization|Independent Verification Organization (IVO)]]"
---

## Précis

Haupt & Hitzig (arXiv:2112.10812v8, December 2025; Stanford Digital Economy Lab / Harvard Society of Fellows) develop a formal framework for comparing the privacy of different mechanisms. The central contribution is the concept of a *contextual privacy violation*: a piece of information a designer learns from running a protocol that is superfluous — not needed for computing the social choice rule at hand. A protocol is *maximally contextually private* if no alternative protocol produces a strict subset of those violations while still implementing the same rule. The paper proves that many common mechanisms cannot avoid contextual privacy violations entirely (k-item Vickrey auctions, stable school choice) and constructs a specific maximally private protocol — the *ascending-join protocol* — for Vickrey auctions, which achieves privacy by delaying queries to bidders whose private information is not yet relevant.

The paper is theoretical mechanism design applied primarily to auction settings, but its framework extends beyond auctions to any protocol in which a designer elicits private information from agents to compute a rule. The governance relevance for this wiki is indirect but meaningful: every AI governance mechanism that requires regulated entities to submit information — capability evaluations, incident reports, training data disclosures, IVO audit findings — is an information-elicitation mechanism. The contextual privacy framework offers a principled vocabulary for asking which disclosures are *necessary* to compute the regulatory rule and which are superfluous. This is particularly relevant to [[wiki/definitions/independent-verification-organization|IVO]] design: IVOs extract information from AI developers, and the scope of that access raises both privacy and strategic concerns. The ascending-join protocol's logic — delay learning about agents until their information is actually decision-relevant — has a direct analog in phased regulatory disclosure design.

## Key terms introduced

- [[wiki/definitions/contextual-privacy-mechanism-design|Contextual Privacy (Mechanism Design)]]

## Findings extracted

No finding pages created; this is a theoretical paper without direct empirical claims in the wiki's primary domains. The conceptual contribution is captured in the definition page.

## Tensions / contradictions with existing wiki

None directly. Potential productive extension: apply contextual privacy analysis to the [[wiki/definitions/regulatory-markets|Regulatory Markets]] proposal — specifically, what information must an IVO learn from an AI developer to certify it, vs. what it may learn incidentally? The Hadfield materials do not address this formally.

## Raw source

[[raw/Contextually Private Mechanisms.pdf]]
