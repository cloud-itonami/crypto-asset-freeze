(ns cloud-itonami.crypto-asset-freeze.state
  "App state for the crypto-asset-freeze appview UI. Ported 1:1 from the
  former svelte/src/routes/+page.svelte template shell — a single static
  screen describing the app surface (title / project / routes / bindings /
  source path). Single reagent atom, murakumo-studio構成."
  (:require [reagent.core :as r]))

(defonce state
  (r/atom
   {:app {:title "Crypto Asset Freeze Qjp7mjyb"
          :project "etzhayyim-project-crypto-asset-freeze"
          :name "etzhayyim-wasm-crypto-asset-freeze-qjp7mjyb"
          :kind "appview"
          :route-count 0
          :routes []
          :vars []
          :xrpc? true
          :relative-path "60-apps/etzhayyim-project-crypto-asset-freeze/appview/etzhayyim-wasm-crypto-asset-freeze-qjp7mjyb/svelte/src/routes/+page.svelte"}}))
