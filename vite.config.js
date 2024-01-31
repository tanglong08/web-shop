import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tailwindcss from "tailwindcss";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
      },
    },
    postcss: {
      plugins: [tailwindcss],
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@configs": path.resolve(__dirname, "src/configs"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
      "@hocs": path.resolve(__dirname, "src/hocs"),
      "@layout": path.resolve(__dirname, "src/layout"),
      "@modules": path.resolve(__dirname, "src/modules"),
      "@routes": path.resolve(__dirname, "src/routes"),
      "@services": path.resolve(__dirname, "src/services"),
      "@store": path.resolve(__dirname, "src/store"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
