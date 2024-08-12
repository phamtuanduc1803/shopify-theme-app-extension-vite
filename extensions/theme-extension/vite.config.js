import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";
import preact from "@preact/preset-vite";
import pageReload from "vite-plugin-page-reload";
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [
    shopify({
      additionalEntrypoints: [
        'frontend/foo.jsx', // Relative to sourceCodeDir
        'bar.jsx' // Relative to project root
      ]
    }),
    preact(),
    react(),
    pageReload("/tmp/extension.update", {
      delay: 1800,
    }),
  ],
});
