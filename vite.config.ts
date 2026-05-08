import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (id.includes("framer-motion")) {
            return "animation-vendor";
          }

          if (id.includes("lucide-react")) {
            return "icons-vendor";
          }

          if (
            id.includes("react") ||
            id.includes("scheduler") ||
            id.includes("react-router") ||
            id.includes("@remix-run")
          ) {
            return "react-vendor";
          }

          if (id.includes("embla-carousel")) {
            return "carousel-vendor";
          }
        },
      },
    },
  },
});
