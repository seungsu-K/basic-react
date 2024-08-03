import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import pluginReact from "@vitejs/plugin-react";

const viteConfig = defineConfig({
  // 기본 경로 설정
  base: "/",

  // 개발 서버 설정
  server: {
    host: "localhost",
    port: 3000,
  },
  plugins: [
    pluginReact({
      jsxRuntime: "automatic",
    }),
  ],
  resolve: {
    // 모듈 경로 설정 @ => ./src
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

export default viteConfig;
