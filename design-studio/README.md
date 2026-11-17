# Design Studio for Claude Code — Phase 1

Agents: ops, strategy, research, ui-designer, critic, scribe

## Install (Mac/Linux)
    unzip design-studio.zip && cd design-studio && ./install.sh

## Start a project
    mkdir my-client && cd my-client
    cp -R ~/.claude/studio-template/studio ./
    claude --agent ops

## Use the agents in any session
- Automatic: just describe the work ("draft a brief from these notes").
- Explicit: type @ and pick the agent, or "use the critic agent on …".
- Check they're loaded: run /agents inside Claude Code.
