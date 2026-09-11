# crypto-asset-freeze

**Law-enforcement-restricted coordination for blockchain asset freezes.** Incident
intake, per-exchange freeze requests, and wallet-trace records for
`crypto-asset-freeze.etzhayyim.com` (nanoid `qjp7mjyb`).

The name does not say what this repo is, so: this is **not** a freezing service. It
does not move, block, or unfreeze anything. It holds the *records* — who opened an
incident, under which court order, which wallets are under investigation, and which
exchange was asked to act. The blocking action itself stays elsewhere (see
[the split](#the-split), below).

> **Restricted.** `requestFreeze` requires a caller DID with
> `performer.role = law-enforcement` plus a per-incident HAR, and every record is
> bound to a court-order CID and an LE-agency DID signature. Treat everything in
> `freezeIncident` / `freezeRequest` as CUI.

## The split

Three tiers, decided by ADR-2606011400 (product-front / infra-back), ADR-2605172400
(3-axis OR-test) and ADR-2605181100 (E2E encrypted-record envelope). The tier
boundary is the point of this repo, so it is worth stating plainly:

| Tier | What | Where it lives |
|---|---|---|
| **Public, plaintext** | `incidentProjection` — aggregate incident counts by chain × status. No wallet addresses, no case IDs, no subject PII. | This repo, `sdk.write` / `sdk.read` |
| **CUI / LE, E2E-sealed** | `freezeIncident`, `freezeRequest` — case IDs, court-order CIDs, wallet sets, target exchanges. | This repo, `sdk.encryptedWrite` / `encryptedRead`. Read-cap = owner DID plus explicitly named LE-agency recipients. **The substrate never sees these in plaintext.** |
| **Execution** | Freeze/unfreeze at the issuer or CEX (Tether/Circle/exchange), and recursive wallet-trace inference over the chain graph. | Stays etzhayyim, reached by consent-capability. Not a collection here. |

Only the *data* migrated. The regulated blocking *acts* did not.

## Layout

```
kotoba/     TypeScript reference implementation — the runnable surface
  src/      types.ts (shapes + validators), registry.ts (the eight operations)
  test/     6 tests, including the read-cap negative case
appview/etzhayyim-wasm-crypto-asset-freeze-qjp7mjyb/
  src/      app.ts — kotodama worker with the domain commands; **deployed as
            `wrangler.jsonc` `main` since the svelte→cljs migration (2026-09-04)**
  (cljs)    shadow-cljs.edn / deps.edn / src/cloud_itonami/crypto_asset_freeze/ + web/
            — reagent + kotoba-ui appview UI (migrated from SvelteKit 2026-09-04);
            `amu compile --target wasm32-browser app` → Build completed, 0 errors
```

`kotoba/` exports eight operations: `recordProjection`, `listProjections`,
`createIncident`, `listIncidents`, `getIncident`, `requestFreeze`, `listRequests`,
`coverage`. They take an SDK handle as their first argument, so the test suite drives
them against `MockEtzhayyim` with no network and no credentials.

## Verify it

```bash
cd kotoba && npm install && npm test
```

Expect **6 passed**. Full walkthrough, including the one npm config that breaks the
install on this machine, is in
[`docs/operator-quickstart.md`](docs/operator-quickstart.md).

## Known state

This repo was extracted from `etzhayyim/root` on 2026-07-19 (`migration.edn` records
the source tree). Two things did not survive the extraction intact, and neither is
hidden by the build succeeding:

1. **`appview/…/src/app.ts` is now the deployed worker.** It imports
   `@etzhayyim/kotodama-host-sdk`, but no `package.json` in this repo declares that
   dependency — the dep was hoisted by the monorepo it came from. Since the
   svelte→cljs migration (2026-09-04), `wrangler.jsonc` deploys
   `main: ./src/app.ts` with static assets from `web/dist`, so `kotodama.jsonld`'s
   `component.path` and the deployed program are now the same. (The audit note
   below describes the pre-migration state and is kept as the record of why the
   deploy target had to change: the built SvelteKit worker
   (`svelte/.svelte-kit/cloudflare/_worker.js`) contained **zero** references to
   `cryptoAssetFreeze` — the appview built and deployed, but it carried the
   scaffold page and the XRPC proxy only — **not** the domain commands in `app.ts`.)
2. **The two surfaces disagree about plaintext.** `app.ts` writes
   `wallet_addresses` and `source_case_id` as plaintext columns into
   `vertex_crypto_asset_freeze_*`. That is exactly what the tier table above forbids;
   `kotoba/` seals the same fields via `encryptedWrite`. `kotoba/` is the side that
   matches the accepted ADRs. Do not port `app.ts`'s storage shape forward.

Treat `kotoba/` as authoritative for domain semantics.
