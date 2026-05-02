---
title: "Agentic AI"
type: definition
tags: [technical-safety, agentic-ai, deployment]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/FAR AI 2025 Securing Agentic AI.pdf"
related:
  - "[[wiki/definitions/prompt-injection|Prompt Injection]]"
  - "[[wiki/findings/agentic-ai-expands-attack-surface|Agentic AI Systems Expand the Cybersecurity Attack Surface]]"
  - "[[wiki/definitions/technical-ai-governance|Technical AI Governance (TAIG)]]"
---

AI systems that autonomously plan and execute sequences of actions — calling external tools, reading and writing to memory, browsing the web, writing and running code, or interacting with other AI agents — in order to complete multi-step tasks with limited per-step human oversight. Agentic AI systems differ from single-turn chatbots in that they operate over extended time horizons, take actions with real-world consequences, and may be granted elevated system permissions. The term is used broadly to cover both single-agent systems (one model, many tool calls) and multi-agent pipelines (multiple specialized models delegating subtasks to each other). As analyzed in [[wiki/sources/securing-agentic-ai|CSA Singapore / FAR.AI (2025)]], the agentic architecture introduces a new cybersecurity threat surface — including prompt injection, memory poisoning, and tool abuse — that has no direct analog in conventional software or single-turn LLM security.
