import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  outDir: "dist",
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom", "@emotion/react"],

  esbuildOptions(options) {
    options.minify = true;
    options.treeShaking = true;
  },
});
