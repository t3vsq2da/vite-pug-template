import { defineConfig } from "vite";
import { viteConvertPugInHtml } from "@mish.dev/vite-convert-pug-in-html";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  resolve: {
    alias: {
      "@blocks": resolve(__dirname, "src/blocks"),
      "@desk": resolve(__dirname, "src/blocks-desk"),
      "@_btn": resolve(__dirname, "src/blocks/btn"),
    },
  },
  plugins: [viteConvertPugInHtml()],
  build: {
    outDir: "../dist",
  },
});
