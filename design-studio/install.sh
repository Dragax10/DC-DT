#!/usr/bin/env bash
# Installs the Design Studio agents for Claude Code (user level = every project).
set -e
HERE="$(cd "$(dirname "$0")" && pwd)"
mkdir -p "$HOME/.claude/agents"

# Agents
cp "$HERE"/agents/*.md "$HOME/.claude/agents/"
echo "✓ Agents installed to ~/.claude/agents/"

# Global rules: append instead of overwriting an existing CLAUDE.md
if [ -f "$HOME/.claude/CLAUDE.md" ] && ! grep -q "Design Studio — Global Rules" "$HOME/.claude/CLAUDE.md"; then
  cp "$HOME/.claude/CLAUDE.md" "$HOME/.claude/CLAUDE.md.bak"
  printf "\n\n" >> "$HOME/.claude/CLAUDE.md"
  cat "$HERE/CLAUDE.md" >> "$HOME/.claude/CLAUDE.md"
  echo "✓ Studio rules appended to ~/.claude/CLAUDE.md (backup: CLAUDE.md.bak)"
elif [ ! -f "$HOME/.claude/CLAUDE.md" ]; then
  cp "$HERE/CLAUDE.md" "$HOME/.claude/CLAUDE.md"
  echo "✓ Studio rules installed to ~/.claude/CLAUDE.md"
else
  echo "• Studio rules already present in ~/.claude/CLAUDE.md, skipped"
fi

# Project template
mkdir -p "$HOME/.claude/studio-template"
cp -R "$HERE/project-template/studio" "$HOME/.claude/studio-template/"
echo "✓ Project template saved to ~/.claude/studio-template/studio"
echo
echo "New project:  cp -R ~/.claude/studio-template/studio ./"
echo "Then run:     claude --agent ops"
