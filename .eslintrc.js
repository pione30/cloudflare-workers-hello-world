export default {
  env: "node",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "es2021",
    lib: ["es2021"],
  },
  plugins: ["@typescript-eslint"],

}
