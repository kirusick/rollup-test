import scss from "rollup-plugin-scss";

export default {
  input: "src/main.ts",
  output: {
    dir: "dist",
  },
  plugins: [scss({ fileName: "dist/bundle.css" })],
};
