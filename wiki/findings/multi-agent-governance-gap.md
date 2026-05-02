---
title: "Existing AI Governance Frameworks Have a Multi-Agent Gap"
type: finding
tags: [agentic-ai, governance-mechanisms, evaluations, technical-safety]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/Technical Innovations for AI Policy 2026 What We Heard, and What It Means.md"
related:
  - "[[wiki/findings/agentic-ai-expands-attack-surface|Agentic AI Systems Expand the Cybersecurity Attack Surface]]"
  - "[[wiki/findings/tiap-governance-infrastructure-gap|The Governance Infrastructure Gap]]"
  - "[[wiki/definitions/agentic-ai|Agentic AI]]"
  - "[[wiki/sources/tiap-2026|TIAP 2026 (FAR.AI)]]"
  - "[[wiki/sources/securing-agentic-ai|Securing Agentic AI (FAR AI / CSA Singapore)]]"
---

## Claim

Every existing AI governance framework was designed to assess individual systems; none is equipped to evaluate the emergent harms produced when multiple agents interact. As the infrastructure for agents to interact at scale is already being built, this is an urgent unaddressed gap.

## Evidence

- [TIAP 2026, Paskov/RAND]: UK AISI researchers found the share of action-taking tools in Model Context Protocol (MCP) rose from 24% to 65% between late 2024 and early 2026 — the infrastructure for multi-agent interaction is deploying faster than governance frameworks can track. → [[wiki/sources/tiap-2026|TIAP 2026]]
- [TIAP 2026, Paskov/RAND]: Preliminary inter-agent influence evaluation results show that simple prompting for coercion or persuasion raises approvals of policy-violating requests from a 5% baseline to 11% and 14% respectively. Even individually safe and aligned systems can produce harmful outcomes through interaction — a property that single-model assessment frameworks cannot detect. → [[wiki/sources/tiap-2026|TIAP 2026]]
- [TIAP 2026]: Every major existing governance framework — from frontier lab preparedness frameworks (Anthropic RSP, OpenAI Preparedness, GDM Frontier Safety Framework) to the EU AI Act — was designed to assess single models. None has been extended to evaluate systems in relation. → [[wiki/sources/tiap-2026|TIAP 2026]]

## Contradicted by / Tension with

The FAR AI / CSA Singapore agentic security paper ([[wiki/sources/securing-agentic-ai|Securing Agentic AI]]) identifies inter-agent attacks as a threat category, but is focused on cybersecurity threats to agentic pipelines, not on governance evaluation frameworks. The two analyses are complementary: one describes the attack surface, the other the governance gap.

## Relevant concepts

[[wiki/definitions/agentic-ai|Agentic AI]], [[wiki/definitions/prompt-injection|Prompt Injection]]

## Notes

The 24% → 65% rise in MCP action-taking tools over ~14 months is the most concrete empirical data point in the wiki for the pace of agentic deployment. It implies that the multi-agent governance gap is closing fast — not in the sense of being addressed, but in the sense that the window for addressing it before large-scale deployment is narrowing.
