import { defineConfig } from "cypress";

interface CypressConfig extends Record<string, any> {
  // Define your TypeScript-specific properties here
  supportFile?: string;
}

export default defineConfig<CypressConfig>({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  supportFolder:"cypress/support/e2e.ts",

  //supportFile: "cypress/support/e2e.ts", // Set the correct path to your support file

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
