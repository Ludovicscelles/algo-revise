import { defineConfig } from "vitest/config";

// define Vitest configuration
export default defineConfig({
  test: {
    exclude: ["dist/**", "node_modules/**"],
  },
});
