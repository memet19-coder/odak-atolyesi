import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] || "odak-atolyesi";

export default defineConfig({
  base: process.env.GITHUB_PAGES === "true" ? `/${repositoryName}/` : "/",
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://127.0.0.1:3001",
    },
  },
});
