---
title: "Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet (Anthropic, 2024)"
type: source
tags: [technical-safety, interpretability, ai-safety, industry-practice]
created: 2026-05-01
updated: 2026-05-01
sources:
  - "raw/Scaling Monosemanticity Extracting Interpretable Features from Claude 3 Sonnet.md"
related:
  - "[[wiki/definitions/mechanistic-interpretability|Mechanistic Interpretability]]"
  - "[[wiki/definitions/technical-legibility|Technical Legibility]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
  - "[[wiki/findings/sae-features-scale-to-frontier-models|SAE Features Scale to Frontier Models]]"
  - "[[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem with ML]]"
---

# Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet (Anthropic, 2024)

## Précis

Published by Anthropic's interpretability team in 2024, this paper demonstrates that sparse autoencoders (SAEs) — a form of dictionary learning — can extract high-quality, interpretable, monosemantic features from Claude 3 Sonnet, a production-scale frontier model. The result is significant because prior work (including Anthropic's own 2023 paper "Towards Monosemanticity") had established the technique on small, toy-scale models, leaving open whether it would survive scaling. It did.

The paper's technical core rests on two hypotheses: the *linear representation hypothesis* (neural networks represent meaningful concepts as directions in activation space) and the *superposition hypothesis* (models represent more features than they have dimensions by using almost-orthogonal directions, making individual neurons polysemantic). SAEs decompose activations into a sparse set of monosemantic features — each activating cleanly on a single interpretable concept — by training with a sparsity penalty. The features found in Claude 3 Sonnet are multilingual, multimodal (generalizing from text-trained SAEs to image activations), and abstract (responding to both concrete instances and abstract discussion of a concept). They include features for famous people, countries, code type signatures, and list positions, as well as a catalogue of safety-relevant features: code vulnerabilities, bias and slurs, lying/deception/power-seeking, sycophancy, and CBRN-adjacent content.

Feature steering experiments demonstrate that features are causally active: activating the "Golden Gate Bridge" feature strongly caused the model to identify as the bridge; similar experiments with deception-related features showed behaviorally coherent downstream effects. The paper explicitly frames this as foundational safety research and opens a research agenda: can interpretability serve as a "test set for safety" that provides assurance off-distribution? Can feature analysis detect when fine-tuning produces latent dangerous capabilities? Can suppressing specific features provide meaningful CBRN uplift assurance?

The Discussion section is notably cautious: these are "extremely nascent" investigations; the team identifies potential failure modes (suboptimal feature splitting, divergence between activation pattern and behavior) and explicitly cautions against overinterpreting the existence of safety-relevant features. Finding such features shows the model has represented the relevant concepts; it does not show the model will act on them inappropriately in deployment.

## Key terms introduced

- [[wiki/definitions/mechanistic-interpretability|Mechanistic Interpretability]] — research program to understand neural network internals via features and circuits

## Findings extracted

- [[wiki/findings/sae-features-scale-to-frontier-models|SAE Features Scale to Frontier Models: Safety Implications]]

## Tensions / contradictions with existing wiki

This paper is the technical AI safety complement to the policy governance documents that dominate the wiki. Its primary governance implication runs through [[wiki/definitions/technical-legibility|Technical Legibility]]: if SAE-derived feature maps mature into reliable, auditable characterizations of model reasoning, they could provide the provenance-traceable behavioral account that [[wiki/definitions/independent-verification-organization|IVO]]-based governance would need to certify frontier models. Currently, the paper's own cautions suggest this is a research horizon rather than a deployable tool.

The paper also bears on the [[wiki/findings/conventional-regulation-illegibility-problem|Conventional Regulation's Illegibility Problem]]: Hadfield's claim that ML's decision logic is produced by training rather than written — making it fundamentally non-human-readable — is the problem mechanistic interpretability is trying to solve. The Scaling Monosemanticity results are progress on that problem, but not a solution: features can be identified and causally probed, but we cannot yet reliably specify or constrain them at training time, which is what governance would require.

The 16MB raw file is dominated by embedded base64 images (interactive visualizations); stripping these yields ~226KB of text. The paper is best read at transformer-circuits.pub/2024/scaling-monosemanticity/index.html.

## Raw source

[[raw/Scaling Monosemanticity Extracting Interpretable Features from Claude 3 Sonnet.md]]
