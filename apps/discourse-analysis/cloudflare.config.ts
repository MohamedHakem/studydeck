import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    "name": "nono",
    "compatibilityDate": "2026-10-06",
    "observability": {
      "enabled": true
    }
  }
});