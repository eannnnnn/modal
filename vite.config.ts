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
  define: {
    "process.env": {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    },
  },
  build: {
    target: "esnext",
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "modal",
      fileName: "modal",
    },

    rollupOptions: {
      output: {
        exports: "named",
        globals: {
          react: "React",
        },
      },
      external: ["react", "react-dom", "tailwindcss"],
    },
  },
});
