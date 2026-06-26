import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base:
    command === "build"
      ? "/ITT-72-RL/Project2/"
      : "/",

  build: {
    outDir: "dist"
  }
}));