/* eslint-disable import/no-anonymous-default-export */
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import checker from "vite-plugin-checker";
import { createHtmlPlugin } from "vite-plugin-html";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";
import pkg from "./package.json";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // WARNING: The homepage must start with a slash "/"
  const needCustmodeomBase =
    process.env.NODE_ENV === "production" && pkg.homepage !== ".";

  const webpackBase = needCustmodeomBase ? `${pkg.homepage}/` : "/";
  const proxyTarget = process.env.ASPNETCORE_HTTPS_PORT
    ? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}`
    : process.env.ASPNETCORE_URLS
    ? process.env.ASPNETCORE_URLS.split(";")[0]
    : "http://localhost:5001";

  return defineConfig({
    server: {
      https: {
        key: process.env.VITE_SSL_KEY_FILE,
        cert: process.env.VITE_SSL_CERT_FILE,
      },
      port: parseInt(process.env.VITE_PORT),
      proxy: {
        "/api": {
          target: proxyTarget + webpackBase,
          secure: false,
        },
      },
    },
    base: webpackBase,
    build: {
      outDir: "./build",
    },
    plugins: [
      react(),
      mkcert({
        // mkcertPath: "path/to/mkcert", // <- Only if behind a proxy
      }),
      checker({ typescript: true }),
      createHtmlPlugin({
        template: "./index.html",
        minify: true,
        inject: {
          data: {
            title: pkg.htmlData.title,
            themeColor: pkg.htmlData.themeColor,
            base: webpackBase,
          },
        },
      }),
      VitePWA({
        includeAssets: ["favicon.ico", "robots.txt", "apple-touch-icon.png"],
        manifest: {
          scope: webpackBase,
          name: pkg.htmlData.title,
          short_name: pkg.htmlData.title,
          description: pkg.htmlData.description,
          lang: "en",
          start_url: "./",
          display: "standalone",
          background_color: "#fff",
          theme_color: "#fff",
          icons: [
            {
              src: "pwa-192x192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "pwa-512x512.png",
              sizes: "512x512",
              type: "image/png",
              purpose: "any maskable",
            },
          ],
        },
      }),
    ],
  });
};
