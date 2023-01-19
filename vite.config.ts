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
      // 적절한 확장자가 추가됩니다.
      fileName: (format) => `modal.${format}.js`,
    },
    rollupOptions: {
      // 라이브러리에 포함하지 않을 디펜던시를 명시해주세요
      external: ["react", "react-dom"],
    },
  },
});
