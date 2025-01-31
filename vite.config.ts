

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src", // Alias für den src-Ordner
    },
  },
  plugins: [react()],
});
