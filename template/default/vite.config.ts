import { defineConfig } from "vite";
import { smp } from "@sailoud/smp/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    smp()
  ],
});
