<!-- markdownlint-disable -->

# Hardening Report: nosborn--github-action-markdown-cli/v3.2.0

> This file was generated automatically by the hardening agent.

**Policy SHA:** `d636be7e43ef829af6e853da6b3c7566db9f72fe`

**Test Policy SHA:** `843adf9e4b8f85d0c08b27b9d0b09dd094b54702`

**Harden Agent Version:** `2`

Action **nosborn--github-action-markdown-cli/v3.2.0** was hardened automatically. 6 finding(s) were identified and resolved across 1 iteration(s).

## Findings Fixed

### unpinned-uses (severity: high)

Multiple `uses:` references in ci.yml use mutable version tags instead of full 40-character commit SHAs, making the workflow vulnerable to supply-chain attacks if those tags are moved. Failing references: `actions/checkout@v3.0.2` (lines 20, 27), `actions/setup-python@v4.2.0` (line 21), `pre-commit/action@v3.0.0` (line 23).

Locations:

- `.github/workflows/ci.yml:20`
- `.github/workflows/ci.yml:21`
- `.github/workflows/ci.yml:23`
- `.github/workflows/ci.yml:27`

### unpinned-uses (severity: high)

Multiple `uses:` references in release.yml use mutable version tags instead of full 40-character commit SHAs. Failing references: `actions/checkout@v3.0.2`, `softprops/action-gh-release@v1`.

Locations:

- `.github/workflows/release.yml:13`
- `.github/workflows/release.yml:14`

### unpinned-uses (severity: high)

`uses:` reference in versioning.yml uses a mutable version tag instead of a full 40-character commit SHA. Failing reference: `Actions-R-Us/actions-tagger@v2.0.2`.

Locations:

- `.github/workflows/versioning.yml:11`

### missing-permissions (severity: medium)

ci.yml has no top-level `permissions:` key and none of its jobs define job-level `permissions:`. Without explicit permissions, the workflow runs with the default (potentially broad) token permissions, violating the principle of least privilege.

Locations:

- `.github/workflows/ci.yml:1`

### missing-permissions (severity: medium)

release.yml has no top-level `permissions:` key and its `create-release` job has no job-level `permissions:`. The workflow uses `secrets.GITHUB_TOKEN` to create releases and should declare minimal required permissions (e.g., `contents: write`).

Locations:

- `.github/workflows/release.yml:1`

### missing-permissions (severity: medium)

versioning.yml has no top-level `permissions:` key and its `actions-tagger` job has no job-level `permissions:`. Without explicit permissions, the workflow runs with default token permissions.

Locations:

- `.github/workflows/versioning.yml:1`

## Iteration Notes

### Iteration 1

**Fixes applied:** unpinned-uses, missing-permissions

**Notes:**

Fixed all 6 findings across 3 workflow files:

**ci.yml**: Added `permissions: contents: read` top-level block. Pinned 4 action references to full SHAs: actions/checkout@v3.0.2→2541b1294d2704b0964813337f33b291d3f8596b, actions/setup-python@v4.2.0→b55428b1882923874294fa556849718a1d7f2ca5, pre-commit/action@v3.0.0→646c83fcd040023954eafda54b4db0192ce70507 (both checkout occurrences pinned).

**release.yml**: Added `permissions: contents: write` top-level block (required for creating GitHub releases). Pinned actions/checkout@v3.0.2→2541b1294d2704b0964813337f33b291d3f8596b and softprops/action-gh-release@v1→de2c0eb89ae2a093876385947365aca7b0e5f844.

**versioning.yml**: Added `permissions: contents: write` top-level block (required for creating/updating tags). Pinned Actions-R-Us/actions-tagger@v2.0.2→f411bd910a5ad370d4511517e3eac7ff887c90ea.

All original version tags preserved as inline comments for readability.

