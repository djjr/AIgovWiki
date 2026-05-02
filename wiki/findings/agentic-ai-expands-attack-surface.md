---
title: "Agentic AI Systems Expand the Cybersecurity Attack Surface"
type: finding
tags: [technical-safety, agentic-ai, cybersecurity, governance-mechanisms]
created: 2026-05-02
updated: 2026-05-02
sources:
  - "raw/FAR AI 2025 Securing Agentic AI.pdf"
related:
  - "[[wiki/sources/securing-agentic-ai|Securing Agentic AI (CSA Singapore / FAR.AI, 2025)]]"
  - "[[wiki/definitions/agentic-ai|Agentic AI]]"
  - "[[wiki/definitions/prompt-injection|Prompt Injection]]"
  - "[[wiki/findings/singapore-consensus-safety-research-framework|Singapore Consensus: Three-Part Safety Research Framework]]"
---

## Claim

Agentic AI systems introduce four categories of cybersecurity threat — prompt injection, memory poisoning, tool abuse, and inter-agent attacks — that have no direct analog in conventional software security or single-turn LLM deployment, making existing security frameworks insufficient and requiring new defenses organized around sandboxing, least-privilege access, audit trails, and human-in-the-loop checkpoints.

## Evidence

- CSA Singapore / FAR.AI discussion paper (2025): four threat categories: (1) **Prompt injection** — adversarially crafted content in the environment (documents, web pages, tool outputs) hijacks agent goal pursuit; (2) **Memory poisoning** — corrupting persistent memory stores that agents use for context across tasks; (3) **Tool abuse** — exploiting overly broad tool permissions to take unauthorized real-world actions (send emails, execute code, make purchases); (4) **Inter-agent attacks** — exploiting trust relationships between agents in multi-agent pipelines where a compromised sub-agent can inject malicious instructions into orchestrator agents; defense framework: sandboxing, least-privilege access, audit trails, human-in-the-loop checkpoints for irreversible actions; open problems: formal verification of agent behavior under adversarial conditions, multi-agent trust frameworks → [[wiki/sources/securing-agentic-ai|CSA Singapore / FAR.AI 2025]]

## Contradicted by / Tension with

The paper is a discussion document rather than an empirical study — the threat categories are plausible and partially demonstrated in published red-teaming work, but the prevalence and severity of these attacks in deployed systems is not systematically measured. The proposed defenses (sandboxing, least-privilege) are largely adaptations of conventional security principles; the paper's honest acknowledgment of "open problems" signals that robust defenses for the uniquely agentic threat categories do not yet exist.

## Relevant concepts

[[wiki/definitions/agentic-ai|Agentic AI]], [[wiki/definitions/prompt-injection|Prompt Injection]]

## Notes

The governance framing matters: agentic AI security is currently framed as a practitioner cybersecurity problem, but it has direct implications for AI governance. An agent with elevated system permissions that can be prompt-injected is a vector for adversarial third parties to take real-world actions attributed to the deploying organization. This creates liability uncertainty that may require regulatory clarification — the multi-stakeholder responsibility problem (developer vs. deployer vs. user) becomes acute when an agent acts under adversarial influence. The [[wiki/sources/singapore-consensus-ai-safety-research|Singapore Consensus]] Control pillar (AI system monitoring) implicitly requires the audit-trail and monitoring infrastructure this paper describes.
