---
title: "Prompt Injection"
type: definition
tags: [technical-safety, agentic-ai, cybersecurity]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/FAR AI 2025 Securing Agentic AI.pdf"
related:
  - "[[wiki/definitions/agentic-ai|Agentic AI]]"
  - "[[wiki/findings/agentic-ai-expands-attack-surface|Agentic AI Systems Expand the Cybersecurity Attack Surface]]"
---

An attack in which adversarially crafted natural-language content — embedded in a document, webpage, tool output, or inter-agent message — causes an AI agent to deviate from its intended instructions and execute the attacker's commands instead. Prompt injection exploits the same mechanism that makes LLMs useful (following natural-language instructions) as a security vulnerability: the model cannot reliably distinguish between instructions from its legitimate principal (the user or developer system prompt) and instructions injected by an adversary in the environment. In [[wiki/definitions/agentic-ai|agentic]] deployments, prompt injection is especially dangerous because it can redirect tool use, exfiltrate data, or cause the agent to take irreversible real-world actions. Prompt injection is the AI-specific analog of SQL injection in conventional web security, but harder to mitigate because the injection surface is open-ended natural language rather than a structured query language.
