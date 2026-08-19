<!-- markdownlint-disable -->

# Hardening Report: nosborn--github-action-markdown-cli/v3.1.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **nosborn--github-action-markdown-cli/v3.1.0** was hardened automatically. 2 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

Multiple workflow files reference GitHub Actions using mutable version tags instead of full 40-character commit SHAs. This exposes the workflow to supply-chain attacks if a tag is moved or a dependency is compromised.

.github/workflows/ci.yml:
  - actions/checkout@v3
  - actions/setup-python@v3.1.2
  - pre-commit/action@v3.0.0

.github/workflows/release.yml:
  - actions/checkout@v3
  - softprops/action-gh-release@v1

.github/workflows/versioning.yml:
  - Actions-R-Us/actions-tagger@v2.0.2

All should be pinned to their full SHA digest, e.g. `actions/checkout@11bd71901bbe5b1630ceea73d27597364c9af683 # v3`.

Locations:

- `.github/workflows/ci.yml:20`
- `.github/workflows/ci.yml:21`
- `.github/workflows/ci.yml:22`
- `.github/workflows/ci.yml:27`
- `.github/workflows/release.yml:13`
- `.github/workflows/release.yml:14`
- `.github/workflows/versioning.yml:12`

### missing-permissions (severity: medium)

None of the workflow files define a top-level `permissions:` key, and no individual jobs define job-level `permissions:` blocks. Without explicit permissions, workflows run with the default token permissions (which may be read-write depending on repository settings), violating the principle of least privilege. Each workflow should declare the minimal permissions required, e.g. `permissions: read-all` at the top level and then grant specific write scopes only where needed.

Locations:

- `.github/workflows/ci.yml:1`
- `.github/workflows/release.yml:1`
- `.github/workflows/versioning.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses, missing-permissions

**Notes:**

Fixed all 3 workflow files:

**unpinned-uses**: Pinned all 7 action references to full 40-char SHAs:
- actions/checkout@v3 → @a37ce9120846195fa4ece8f58b268e6043cb2f26 (used in ci.yml ×2 and release.yml)
- actions/setup-python@v3.1.2 → @98f2ad02fd48d057ee3b4d4f66525b231c3e52b6
- pre-commit/action@v3.0.0 → @646c83fcd040023954eafda54b4db0192ce70507
- softprops/action-gh-release@v1 → @de2c0eb89ae2a093876385947365aca7b0e5f844
- Actions-R-Us/actions-tagger@v2.0.2 → @f411bd910a5ad370d4511517e3eac7ff887c90ea

**missing-permissions**: Added `permissions: {}` at the top level of all 3 workflows (deny-all default), plus job-level permissions:
- ci.yml jobs: `contents: read` (checkout only)
- release.yml create-release job: `contents: write` (needed to create GitHub releases)
- versioning.yml actions-tagger job: `contents: write` (needed to create/update version tags)

