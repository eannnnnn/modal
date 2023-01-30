import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: "es2020",
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      formats: ["es", "cjs"],
      fileName: (format) => `modal.${format}.js`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "postcss",
        "tailwindcss",
        "autoprefixer",
        "cssnano",
      ],
    },
  },
});
