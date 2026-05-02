---
title: "Mechanistic Interpretability"
type: definition
tags: [technical-safety, ai-safety, interpretability]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/Scaling Monosemanticity Extracting Interpretable Features from Claude 3 Sonnet.md"
related:
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
  - "[[wiki/findings/sae-features-scale-to-frontier-models|SAE Features Scale to Frontier Models]]"
  - "[[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem with ML]]"
---

# Mechanistic Interpretability

A research program in AI safety that attempts to understand the internal computational structure of neural networks — what representations they form, what circuits implement their computations, and how these map onto human-interpretable concepts. Distinguished from behavioral interpretability (which studies model input/output patterns) by its focus on the internals of the model itself.

The dominant contemporary approach is *sparse autoencoder* (SAE) based dictionary learning, grounded in the *superposition hypothesis*: because neural networks have fewer dimensions than the features they must represent, they pack multiple almost-orthogonal features into each dimension. SAEs learn to decompose activations into a sparse set of interpretable, monosemantic features — each feature corresponding to a single, human-readable concept — by training a bottleneck network with a sparsity penalty on a corpus of model activations. Anthropic's 2024 Scaling Monosemanticity paper demonstrated this approach at production scale on Claude 3 Sonnet, finding multilingual, multimodal, and abstract features including safety-relevant ones (deception, sycophancy, CBRN-adjacent content).

Mechanistic interpretability is the technical substrate for what governance frameworks call [[wiki/definitions/technical-legibility|Technical Legibility]]: if SAE-derived feature maps can reliably characterize what a model is "thinking" about, they could in principle give external auditors (e.g., [[wiki/definitions/independent-verification-organization|IVOs]]) a provenance-traceable account of model behavior rather than relying solely on behavioral evaluation.
