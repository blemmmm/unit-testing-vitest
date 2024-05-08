import { defineConfig as defineViteConfig, mergeConfig } from "vite";
import { defineConfig as defineVitestConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

const vitestConfig = defineVitestConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/__tests__/setup.ts",
  },
});

// https://vitejs.dev/config/
const viteConfig = defineViteConfig({
  plugins: [react()],
});

export default mergeConfig(viteConfig, vitestConfig);
