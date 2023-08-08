module.exports = {
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["plugin:vue/vue3-recommended"],
  rules: {},
};
