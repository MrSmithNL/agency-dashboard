import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
  {
    // Only lint the JS data file — inline scripts in HTML are not linted by ESLint
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        ...globals.browser,
        // Globals used by data.js
        DASHBOARD_DATA: "writable",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      // Relax rules that don't suit a data-only file
      "no-redeclare": ["error", { builtinGlobals: false }],
      "no-unused-vars": ["warn", { varsIgnorePattern: "^DASHBOARD_DATA$" }],
      "no-console": "warn",
      eqeqeq: ["error", "always"],
      "no-var": "error",
      "prefer-const": "warn",
    },
  },
  {
    ignores: ["node_modules/", ".husky/"],
  },
  // Disable formatting rules that conflict with Prettier
  prettier,
];
