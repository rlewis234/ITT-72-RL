import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  base:
    command === "build"
      ? "/ITT-72-RL/Project4/dist/"
      : "/",
}));