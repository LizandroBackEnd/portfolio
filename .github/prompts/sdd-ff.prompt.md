---
description: "Fast-forward an SDD change through planning"
agent: "agent"
argument-hint: "Change name"
---
Fast-forward the requested SDD change through proposal, specification, design, and tasks using the orchestrated `sdd-ff` flow. Enforce SDD Session Preflight and validate each phase before starting the next. Do not apply implementation tasks.

Change: ${input:change}
