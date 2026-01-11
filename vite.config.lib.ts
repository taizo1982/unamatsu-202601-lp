import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      exclude: ["src/**/*.test.ts", "src/**/*.test.tsx", "demo/**/*"],
      rollupTypes: true,
      outDir: "dist",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MagiLPTemplate",
      formats: ["es", "cjs"],
      fileName: (format) => `index.${format === "es" ? "js" : "cjs"}`,
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        // Peer dependencies should be external
        "tailwindcss",
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
        // Preserve module structure for tree-shaking
        preserveModules: false,
      },
    },
    // Generate sourcemaps for debugging
    sourcemap: true,
    // Minify for production
    minify: "esbuild",
    // Output directory
    outDir: "dist",
    // Clean output directory before build
    emptyOutDir: true,
  },
});
