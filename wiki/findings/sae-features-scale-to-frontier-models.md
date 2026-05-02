---
title: "SAE Features Scale to Frontier Models: Safety Implications"
type: finding
tags: [technical-safety, interpretability, ai-safety]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/Scaling Monosemanticity Extracting Interpretable Features from Claude 3 Sonnet.md"
related:
  - "[[wiki/definitions/mechanistic-interpretability|Mechanistic Interpretability]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
  - "[[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem with ML]]"
  - "[[wiki/sources/scaling-monosemanticity-claude3-sonnet|Scaling Monosemanticity (Anthropic, 2024)]]"
---

# SAE Features Scale to Frontier Models: Safety Implications

## Claim

Sparse autoencoders can extract high-quality, interpretable, monosemantic features from a production-scale frontier model (Claude 3 Sonnet), including safety-relevant features for deception, sycophancy, and dangerous content — establishing mechanistic interpretability as a viable (though nascent) tool for frontier AI safety analysis, not only small research models.

## Evidence

- [Anthropic, Scaling Monosemanticity 2024]: SAEs trained on Claude 3 Sonnet activations produced features that are multilingual (same concept across languages), multimodal (same concept in text and images), and abstract (responding to both concrete instances and abstract discussion of a concept, e.g. actual vulnerable code and abstract discussion of security vulnerabilities). Features include: people, countries/cities, code type signatures, and safety-relevant clusters including deception/power-seeking, sycophancy, and content adjacent to CBRN weapons. → [[wiki/sources/scaling-monosemanticity-claude3-sonnet|Scaling Monosemanticity (Anthropic, 2024)]]
- Feature steering experiments showed that activating/suppressing features can behaviorally influence the model in interpretable ways (e.g., the "Golden Gate Bridge" feature, when strongly activated, caused the model to identify as the bridge). This demonstrates that features are not passive labels but causally active computational elements.
- Generalization properties observed: SAE features trained on text activations generalized to image activations (dramatically out-of-distribution), suggesting features capture genuine semantic structure rather than surface statistics.

## Contradicted by / Tension with

- The paper's own Discussion section cautions heavily against overreading: "We caution against inferring too much from these preliminary results. Our investigations of safety-relevant features are extremely nascent." Key failure modes acknowledged: suboptimal dictionary learning (feature splitting artifacts), possible divergence between feature activation patterns and downstream behavior.
- [[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem]]: Hadfield argues ML decision logic is not human-readable, creating a fundamental governance gap. Mechanistic interpretability is a direct technical research response to this claim — but the paper's caution suggests we are far from the kind of reliable, auditable feature maps that would give external regulators confidence. The illegibility problem is real; interpretability research is chipping away at it, not solving it.
- [[wiki/definitions/technical-legibility|Technical Legibility]]: SAE-derived features are a promising candidate for making AI systems technically legible, but the paper identifies open problems: it is not yet possible to reliably prevent specific feature activation patterns, to guarantee generalization off distribution for safety cases, or to avoid "illusions from suboptimal dictionary learning."

## Relevant concepts

[[wiki/definitions/mechanistic-interpretability|Mechanistic Interpretability]], [[wiki/definitions/technical-legibility|Technical Legibility]], [[wiki/definitions/red-teaming|Red-Teaming (AI)]]

## Notes

The paper identifies a research agenda of direct governance relevance: Can SAE features detect when fine-tuning increases the likelihood of undesirable behaviors? What features activate during jailbreaks? Can suppressing specific feature sets provide high assurance Claude will not assist with CBRN synthesis? These questions point toward interpretability tools as a complement to behavioral red-teaming — and potentially, as the technical basis for the kind of independent auditing that [[wiki/definitions/independent-verification-organization|IVO]]-based governance would require. The "affirmative safety case" concept mentioned in the Discussion — using interpretability as a test set for safety that holds off-distribution — is exactly the form of evidence a certification body would need to issue reliable attestations.
