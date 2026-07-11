import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  publicDir: false,
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        termos: resolve(__dirname, "termos.html"),
        privacidade: resolve(__dirname, "privacidade.html"),
      },
    },
  },
});
