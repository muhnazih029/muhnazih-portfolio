// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  site: "https://muhnazih.azdastudio.my.id",
  base: "/",
  integrations: [tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@components": path.resolve(__dirname, "./src/components"),
        "astro:toolbar:internal": path.resolve(__dirname, "./src/dummy-toolbar.js"),
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
  preview: {
    allowedHosts: ["muhnazih.azdastudio.my.id"],
  },
});
