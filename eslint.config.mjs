import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "prettier" // Add Prettier to disable conflicting ESLint rules
  ),
  {
    plugins: async () => ({
      prettier: (await import("eslint-plugin-prettier")).default,
    }),
    rules: {
      "prettier/prettier": "error", // Enforce Prettier formatting
    },
  },
];

export default eslintConfig;
