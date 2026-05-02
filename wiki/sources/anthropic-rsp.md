---
title: "Anthropic's Responsible Scaling Policy (2023)"
type: source
tags: [industry-practice, technical-safety, risk-existential, risk-misuse, governance-theory, empirical]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/anthropic-rsp.md"
related:
  - "[[wiki/sources/seoul-frontier-ai-safety-commitments-2024|Frontier AI Safety Commitments, AI Seoul Summit 2024]]"
  - "[[wiki/sources/gdm-frontier-safety-framework|Google DeepMind Frontier Safety Framework (2024)]]"
  - "[[wiki/sources/openai-preparedness-framework|OpenAI Preparedness Framework v2 (2025)]]"
  - "[[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]]"
  - "[[wiki/definitions/ai-safety-levels-asl|AI Safety Levels (ASL) — Anthropic]]"
---

# Anthropic's Responsible Scaling Policy (2023)

## Précis

Anthropic's Responsible Scaling Policy (RSP), published September 19, 2023, is the first publicly released voluntary safety framework by a major AI developer and the conceptual prototype for subsequent industry frameworks. Its central innovation is the **AI Safety Levels (ASL)** system — a tiered capability classification modeled explicitly on the U.S. government's Biosafety Level (BSL) standards for handling dangerous pathogens. ASL-1 through ASL-5+ define increasing levels of catastrophic risk potential, with corresponding safety, security, and operational requirements that must be demonstrated before further capability scaling is permitted. At publication, current Claude models were assessed as ASL-2 (early signs of dangerous capability but not yet providing meaningful uplift beyond search engines or textbooks).

The RSP's core mechanism is a *conditional scaling pause*: Anthropic commits not to train more capable models if doing so would cross an ASL threshold for which safety measures have not yet been developed and validated. This creates a deliberate coupling between capability advancement and safety research, in contrast to traditional product development where safety work is often parallel or trailing. The commitment to board-level approval for RSP changes and to external evaluation (via ARC Evals, now METR) added governance structure absent from most corporate safety statements. The analogy to aviation and automotive pre-market safety testing — cited explicitly in the document — frames frontier AI deployment as a safety-demonstration problem rather than a liability-after-the-fact problem.

The RSP's influence on subsequent industry practice and governance was substantial: Google DeepMind's Frontier Safety Framework and OpenAI's Preparedness Framework both adopt comparable structures (capability thresholds, pre-deployment evaluation, mitigation tiers), and the Seoul Safety Commitments require signatories to publish analogous frameworks.

## Key terms introduced

- [[wiki/definitions/ai-safety-levels-asl|AI Safety Levels (ASL) — Anthropic]] — Anthropic's tiered classification (ASL-1 through ASL-5+) linking capability levels to safety and security requirements
- [[wiki/definitions/responsible-capability-scaling|Responsible Capability Scaling]] — the approach of coupling capability advancement to demonstrated safety, with scaling pauses when safety lags
- Catastrophic risk — harms where "an AI model directly causes large scale devastation," including bioweapons misuse and unintended autonomous destruction
- Conditional scaling pause — commitment not to advance capabilities if ASL threshold requirements cannot be met

## Findings extracted

- [[wiki/findings/responsible-capability-scaling-as-industry-norm|Responsible Capability Scaling Has Become the Dominant Voluntary Industry Safety Approach]]
- [[wiki/findings/asl-bsl-analogy|ASL Bsl Analogy]]
- [[wiki/findings/frontier-developer-special-responsibility-norm|Emerging Norm: Frontier AI Developers Bear Special Responsibility]]

## Tensions / contradictions with existing wiki

- The RSP's self-assessment model (Anthropic evaluates its own models against ASL criteria) is in tension with the Seoul commitment to involve "trusted actors including home governments" in threshold-setting — external verification remains underdeveloped.

## Raw source

[[raw/anthropic-rsp.md]]
