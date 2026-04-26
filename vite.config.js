import { defineConfig } from "vite";
import { viteConvertPugInHtml } from "@mish.dev/vite-convert-pug-in-html";
import { resolve } from "path";

export default defineConfig({
  root: "src",
  publicDir: resolve(__dirname, "public"),
  resolve: {
    alias: {
      "@blocks": resolve(__dirname, "src/blocks"),
      "@desk": resolve(__dirname, "src/blocks-desk"),
      "@assets": resolve(__dirname, "src/assets"),
      "@_btn": resolve(__dirname, "src/blocks/btn"),
    },
  },
  plugins: [viteConvertPugInHtml()],
  build: {
    outDir: "../dist",
  },
});
