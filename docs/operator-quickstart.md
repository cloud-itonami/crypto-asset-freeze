# Operator quickstart

Get from a fresh clone to a green test run. Every command below was executed on
2026-08-12 against commit `67d6835`; the outputs are transcribed, not predicted.

No credentials, no network service, and no deployed environment are required. The
test suite drives the domain operations against an in-memory mock.

## 0. Prerequisites

Verified with:

| | version |
|---|---|
| node | v26.3.0 |
| npm | 11.16.0 |
| vitest | 4.1.10 (resolved by `npm install`) |
| typescript | 5.9.3 (resolved by `npm install`) |

`npm install` pulls `@etzhayyim/sdk` and `@etzhayyim/sdk-mock` over **git+https** from
GitHub, so you need outbound HTTPS to `github.com` and `registry.npmjs.org`. Both
dependency repos are public. Their declared URLs are the historical
`etzhayyim/com-etzhayyim-sdk*` paths, which GitHub redirects to `kotoba-lang/sdk` and
`kotoba-lang/sdk-mock`; the redirect is followed transparently and needs no action.

## 1. Install

```bash
cd kotoba
npm install
```

This takes a couple of minutes on a cold npm cache — `@etzhayyim/sdk` itself has six
further git dependencies plus `viem` and the `@atproto` packages.

<details>
<summary><strong>If this fails with <code>EALLOWSCRIPTS</code></strong> — the one known trap</summary>

```
npm error git dep preparation failed
npm error npm error code EALLOWSCRIPTS
npm error npm error --allow-scripts is not allowed in project-scoped installs.
```

This is a **local npm configuration** problem, not a repo problem. `@etzhayyim/sdk`
builds itself with a `prepare: tsc` script, so npm runs a nested install to prepare
the git dependency. Under npm ≥ 11.16, if your **user-level** `~/.npmrc` contains an
`allow-scripts` entry, that nested install inherits it and refuses to start.

Check with `npm config get allow-scripts`. To install without editing your global
config, point npm at a userconfig that does not carry the entry:

```bash
: > /tmp/empty-npmrc
npm install --userconfig /tmp/empty-npmrc
```

Verified from a clean tree: an entirely empty userconfig is sufficient. If your
`~/.npmrc` also holds a private-registry token, note that none of this package's
dependencies come from a private registry, so dropping it costs nothing here.

npm will still print `npm warn allow-scripts … not yet covered by allowScripts` for
eight packages. That warning is expected and is **not** a failure — the git
dependencies are prepared regardless, and `node_modules/@etzhayyim/sdk/dist` is
present afterwards. Confirm with:

```bash
ls node_modules/@etzhayyim/sdk/     # → README.md  dist  package.json  src
```

</details>

## 2. Run the tests

```bash
npm test          # vitest run
```

```
 Test Files  1 passed (1)
      Tests  6 passed (6)
   Duration  330ms
```

Six tests is the whole suite. What they actually pin down:

| Group | Invariant |
|---|---|
| `incidentProjection` | Records, dedups by `projectionId` (second write returns `alreadyExists`, not a duplicate), rejects a negative `incidentCount` and an empty `chain`, filters by chain and by status. |
| `freezeIncident` | Seals through `encryptedWrite` and round-trips through `encryptedRead` with `walletAddresses` and `priority` intact; rejects `priority > 100` and an empty wallet set; `getIncident` on an unknown id returns `notFound`. |
| **read-cap** | **A DID that is not a recipient sees zero incidents.** This is the test that makes the CUI/LE boundary real rather than decorative — it constructs a second `MockEtzhayyim` as `did:web:outsider.example` and asserts `listIncidents` returns `total: 0`. |
| recipient grant | An explicitly named LE-agency DID passed via `recipients` is granted read-cap. |
| `freezeRequest` | Seals, round-trips, rejects an empty `walletAddress` and a missing `incidentId`, filters by `incidentId` and by `exchange`. |
| `coverage` | Rolls up plaintext projections plus E2E incidents plus E2E requests, and groups projections by chain. |

If you change anything in `kotoba/src/`, the read-cap test is the one to watch. It is
the only test that fails loudly when the encryption boundary is weakened.

## 3. Typecheck

```bash
npm run typecheck     # tsc --noEmit
```

Exits 0 with no output. `tsconfig.json` sets `strict: true` and
`moduleResolution: bundler`, and only covers `src/**/*.ts` — the test directory is
typechecked by vitest at run time, not by this command.

## 4. Optional — build the appview

Only needed if you are working on the Cloudflare surface.

```bash
cd appview/etzhayyim-wasm-crypto-asset-freeze-qjp7mjyb/svelte
npm install
npm run build
```

The workspace requires heavy builds to be serialised through the shared resource
governor rather than started directly:

```bash
node <workspace-root>/scripts/resource-guard.mjs run build -- npm run build
```

The build succeeds and emits `.svelte-kit/cloudflare/_worker.js`, which is the path
`wrangler.jsonc` names as `main`.

**Expect less than the file tree suggests.** The built worker serves the scaffold page
and the `/xrpc/[...path]` route, which proxies to the MCP router at
`AGENTGATEWAY_MCP_ROUTER_URL`. It does **not** contain the domain commands from
`appview/…/src/app.ts` — that file declares no dependency manifest and is not part of
the build. Verified: `grep -c cryptoAssetFreeze .svelte-kit/cloudflare/_worker.js`
returns `0`. See the README's *Known state* section.

## 5. Leave the tree clean

`npm install` and `npm run build` create `node_modules/`, `package-lock.json`, and
`.svelte-kit/`. These are listed in `.gitignore`, so `git status` should report
nothing after following this document. If it reports something else, that is your
change, not a build artifact.
