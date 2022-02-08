import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";
import json from "@rollup/plugin-json";
import typescript from "@rollup/plugin-typescript";

const production = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
    sourcemap: true,
  },
  plugins: [
    typescript(), // translate typescript
    json(), // import json files
    resolve(), // tells Rollup how to find usages in node_modules
    commonjs(), // converts to ES modules
    production && terser(), // minify, but only in production
  ],
};
