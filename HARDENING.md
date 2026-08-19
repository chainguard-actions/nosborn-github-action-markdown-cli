<!-- markdownlint-disable -->

# Hardening Report: nosborn--github-action-markdown-cli/v3.3.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **nosborn--github-action-markdown-cli/v3.3.0** was hardened automatically. 3 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### missing-permissions (severity: medium)

The workflow file has no top-level `permissions:` key and no job-level `permissions:` key on any of its jobs. Without explicit permissions, the GITHUB_TOKEN is granted its default (potentially broad) permissions. A minimal permissions block should be added at the top level or on each job.

Locations:

- `.github/workflows/ci.yml:1`

### missing-permissions (severity: medium)

The workflow file has no top-level `permissions:` key and no job-level `permissions:` key on any of its jobs. Without explicit permissions, the GITHUB_TOKEN is granted its default (potentially broad) permissions. A minimal permissions block should be added at the top level or on each job.

Locations:

- `.github/workflows/release.yml:1`

### missing-permissions (severity: medium)

The workflow file has no top-level `permissions:` key and no job-level `permissions:` key on any of its jobs. Without explicit permissions, the GITHUB_TOKEN is granted its default (potentially broad) permissions. A minimal permissions block should be added at the top level or on each job.

Locations:

- `.github/workflows/versioning.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** missing-permissions

**Notes:**

Added top-level `permissions:` blocks to all three workflow files:
- `.github/workflows/ci.yml`: `permissions: { contents: read }` — the workflow only checks out code and runs tests, so read-only access is sufficient.
- `.github/workflows/release.yml`: `permissions: { contents: write }` — the workflow uses softprops/action-gh-release to create GitHub releases, which requires write access to contents.
- `.github/workflows/versioning.yml`: `permissions: { contents: write }` — the workflow uses Actions-R-Us/actions-tagger to manage version tags, which requires write access to contents.

