import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Priyanshu-Mundra-Portfolio/",
  plugins: [react(), tailwindcss()],
});
