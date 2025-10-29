import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "node:url";

// Fix: __dirname is not available in ES modules. The following lines define it for use in path.resolve().
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@components": path.resolve(__dirname, "components"),
    }
  },
  build: {
    sourcemap: false,
    outDir: "dist",
    emptyOutDir: true,
    chunkSizeWarningLimit: 1000
  },
  server: {
    port: 5173,
    open: true
  }
});