---
title: "Uplift"
type: definition
tags: [technical-safety, risk-misuse, industry-practice]
created: 2026-04-30
updated: 2026-04-30
sources:
  - "raw/gdm-frontier-safety-framework.md"
  - "raw/anthropic-rsp.md"
related:
  - "[[wiki/definitions/critical-capability-levels|Critical Capability Levels (CCL) — Google DeepMind]]"
  - "[[wiki/definitions/dual-use-foundation-model|Dual-Use Foundation Model]]"
  - "[[wiki/definitions/red-teaming|Red-Teaming (AI)]]"
---

# Uplift

The incremental increase in a threat actor's capability to cause harm that an AI model provides, above what the actor could achieve using non-AI means (e.g., search engines, textbooks, expert consultation). A model provides "meaningful uplift" for a given harm if it enables a broader range of actors to cause that harm, enables harm at greater scale, or substantially reduces the time, cost, or expertise required.

The uplift framing is analytically important because it shifts the question from "can this model produce harmful content?" to "does this model make harmful outcomes significantly more likely or severe?" A model that can describe bioweapon synthesis steps provides meaningful uplift only if those steps are not otherwise accessible or if the model significantly lowers the barrier to a sophisticated attack. Used by GDM in defining Critical Capability Levels and by Anthropic in distinguishing ASL-2 (no meaningful uplift) from ASL-3 (substantial uplift). The concept originates in biosecurity literature on "dual-use research of concern."
