#!/usr/bin/env bash

set -euo pipefail

# Deploy static export to either:
#  - a dedicated branch (default: deploy) using git worktree, or
#  - the docs/ folder on main (GitHub Pages fallback for user/org sites)
#
# Usage:
#   scripts/deploy.sh branch   # publishes to branch (default: deploy)
#   scripts/deploy.sh docs     # publishes to docs/ folder on main
#
# Env vars:
#   DEPLOY_BRANCH   Branch name to publish to (default: deploy)

MODE=${1:-branch}
DEPLOY_BRANCH=${DEPLOY_BRANCH:-deploy}

ROOT_DIR=$(git rev-parse --show-toplevel)
OUT_DIR="$ROOT_DIR/out"

if [[ -n $(git status --porcelain) ]]; then
  echo "Error: working tree is not clean. Commit or stash changes first." >&2
  exit 1
fi

echo "Building static site (Next.js export) ..."
if command -v bun >/dev/null 2>&1; then
  bun install --frozen-lockfile
  bun run build
else
  npm ci
  npm run build
fi

if [[ ! -d "$OUT_DIR" ]]; then
  echo "Error: build output directory 'out/' not found." >&2
  exit 1
fi

touch "$OUT_DIR/.nojekyll"

if [[ "$MODE" == "branch" ]]; then
  echo "Publishing to branch: $DEPLOY_BRANCH"
  WORKTREE_DIR="$ROOT_DIR/.deploy-worktree"

  # Prepare orphan branch if it doesn't exist
  if ! git show-ref --verify --quiet "refs/heads/$DEPLOY_BRANCH" && \
     ! git ls-remote --exit-code --heads origin "$DEPLOY_BRANCH" >/dev/null 2>&1; then
    echo "Creating orphan branch '$DEPLOY_BRANCH'"
    git switch --orphan "$DEPLOY_BRANCH"
    git reset --hard
    git commit --allow-empty -m "chore: initialize $DEPLOY_BRANCH branch"
    git push -u origin "$DEPLOY_BRANCH"
    git switch -
  fi

  # Clean old worktree if present
  if [[ -d "$WORKTREE_DIR" ]]; then
    echo "Removing existing worktree dir"
    rm -rf "$WORKTREE_DIR"
  fi

  echo "Adding worktree for '$DEPLOY_BRANCH'"
  git worktree add -f "$WORKTREE_DIR" "$DEPLOY_BRANCH"

  echo "Syncing built files into worktree ..."
  rsync -av --delete --exclude ".git" "$OUT_DIR/" "$WORKTREE_DIR/"

  pushd "$WORKTREE_DIR" >/dev/null
  git add -A
  COMMIT_MSG="deploy: $(date -u +"%Y-%m-%d %H:%M:%S UTC")"
  if git diff --cached --quiet; then
    echo "No changes to deploy."
  else
    git commit -m "$COMMIT_MSG"
    git push origin "$DEPLOY_BRANCH"
  fi
  popd >/dev/null

  echo "Cleaning up worktree ..."
  git worktree remove "$WORKTREE_DIR" --force
  rm -rf "$WORKTREE_DIR"

  echo "Done. Set GitHub Pages source to: Branch = $DEPLOY_BRANCH, Folder = / (root)"
  exit 0
fi

if [[ "$MODE" == "docs" ]]; then
  echo "Publishing to docs/ on main"
  DOCS_DIR="$ROOT_DIR/docs"

  # Ensure on main
  CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
  if [[ "$CURRENT_BRANCH" != "main" ]]; then
    echo "Switching to main"
    git switch main
  fi

  mkdir -p "$DOCS_DIR"
  echo "Syncing built files into docs/ ..."
  rsync -av --delete "$OUT_DIR/" "$DOCS_DIR/"

  git add docs
  COMMIT_MSG="deploy(docs): $(date -u +"%Y-%m-%d %H:%M:%S UTC")"
  if git diff --cached --quiet; then
    echo "No changes to deploy."
  else
    git commit -m "$COMMIT_MSG"
    git push origin main
  fi

  echo "Done. Set GitHub Pages source to: Branch = main, Folder = /docs"
  exit 0
fi

echo "Unknown mode: $MODE (expected 'branch' or 'docs')" >&2
exit 1


