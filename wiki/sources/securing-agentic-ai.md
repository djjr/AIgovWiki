---
title: "Securing Agentic AI: Cybersecurity for the Age of AI Agents (CSA Singapore / FAR.AI, 2025)"
type: source
tags: [technical-safety, agentic-ai, cybersecurity, governance-mechanisms]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/FAR AI 2025 securing-agentic-ai-discussion.pdf"
related:
  - "[[wiki/findings/agentic-ai-expands-attack-surface|Agentic AI Systems Expand the Cybersecurity Attack Surface]]"
  - "[[wiki/definitions/agentic-ai|Agentic AI]]"
  - "[[wiki/definitions/prompt-injection|Prompt Injection]]"
  - "[[wiki/findings/singapore-consensus-safety-research-framework|Singapore Consensus: Three-Part Safety Research Framework]]"
---

## Précis

This discussion paper (Cloud Security Alliance Singapore, FAR.AI, 2025) addresses a gap in the AI security literature: most cybersecurity guidance was developed for static software systems and fails to account for the distinctive threat surface introduced by agentic AI — systems that plan sequences of actions, call external tools, operate semi-autonomously over extended time horizons, and interact with other AI agents. The paper identifies four threat categories specific to agentic deployments: **prompt injection** (adversarially crafted inputs that hijack agent goals through natural-language instructions), **memory poisoning** (corrupting persistent memory stores agents consult for context), **tool abuse** (exploiting broad tool permissions to take unauthorized actions), and **inter-agent attacks** (exploiting trust relationships between agents in multi-agent pipelines). Each category exploits architectural features that have no direct analog in conventional software security.

The paper's proposed defenses are organized around four principles: **sandboxing** (isolating agent execution from unintended system surfaces), **least-privilege access** (granting agents only the minimum tool permissions required for a task), **audit trails** (maintaining logs sufficient to reconstruct agent decision chains), and **human-in-the-loop checkpoints** (requiring human approval before irreversible or high-consequence actions). The paper surveys these principles across six sectors — financial, insurance, retail, manufacturing, healthcare, and public sector — with sector-specific threat scenarios. The open problems identified include formal verification of agent behavior under adversarial conditions and multi-agent trust frameworks for heterogeneous pipelines. While the paper is practitioner-oriented, its open-problems section maps directly onto the [[wiki/sources/singapore-consensus-ai-safety-research|Singapore Consensus]] Control pillar (AI system monitoring) and [[wiki/definitions/technical-ai-governance|TAIG]] deployment governance.

## Key terms introduced

- [[wiki/definitions/agentic-ai|Agentic AI]] — AI systems that autonomously plan and execute multi-step action sequences using tools, memory, and environmental feedback
- [[wiki/definitions/prompt-injection|Prompt Injection]] — an attack in which adversarially crafted natural-language inputs cause an AI agent to deviate from its intended instructions

## Findings extracted

- [[wiki/findings/agentic-ai-expands-attack-surface|Agentic AI Systems Expand the Cybersecurity Attack Surface]]

## Tensions / contradictions with existing wiki

The paper's sector-specific framing highlights a gap in the current wiki: most governance analysis addresses AI development and evaluation, not deployment security. Connecting to [[wiki/findings/capability-accountability-trap|The Capability-Accountability Trap]]: the same opacity that makes AI systems hard for regulators to evaluate makes agentic systems hard for security teams to audit. The least-privilege and audit-trail principles proposed here are operationally consistent with [[wiki/definitions/technical-legibility|Technical Legibility]] but at the deployment layer rather than the evaluation layer.

## Raw source

[[raw/FAR AI 2025 securing-agentic-ai-discussion.pdf]]
