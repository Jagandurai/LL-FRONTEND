// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,        // ✅ Fixed port
    strictPort: true,  // 🚫 Fail if port is in use
  },
});