import { defineConfig } from "vite";
// import { resolve } from "path";
const path = require("path");

export default defineConfig({
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "@imgs": "/src/imgs",
    },
  },
  server: {
    port: 8080,
    hot: true,
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    manifest: true,
    emptyOutDir: true,
    minify: "terser", // Enable minification
    css: {
      postcss: {},
    },
    rollupOptions: {
      input: {
        index: "./src/index.html",
        speedboat: "./src/speedboat.html",
        catamaran: "./src/catamaran.html",
      },
    },
  },
});
