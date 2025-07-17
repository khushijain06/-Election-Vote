import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/candidate": "https://election-vote-1.onrender.com",
      "/user": "https://election-vote-1.onrender.com",
    },
  },
});
