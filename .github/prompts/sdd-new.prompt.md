---
description: "Start a new SDD change"
agent: "agent"
argument-hint: "Change name and intent"
---
Start a new SDD change using the orchestrated `sdd-new` flow: enforce SDD Session Preflight and the init guard, then run exploration and proposal in dependency order. Do not skip planning or begin implementation.

New change: ${input:change}
