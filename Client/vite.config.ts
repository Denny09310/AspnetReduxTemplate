import { defineConfig, loadEnv, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import mkcert from "vite-plugin-mkcert";
import { VitePWA } from "vite-plugin-pwa";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const getPlugins = () => {
    const plugins: PluginOption[] = [react()];

    if (process.platform !== "linux") {
      plugins.push(mkcert());
    }

    return plugins;
  };

  return defineConfig({
    server: {
      https: {
        key: process.env.VITE_SSL_KEY_FILE,
        cert: process.env.VITE_SSL_CERT_FILE,
      },
      port: parseInt(process.env.VITE_PORT),
      proxy: {
        "/api": {
          target: process.env.ASPNETCORE_HTTPS_PORT
            ? `https://localhost:${process.env.ASPNETCORE_HTTPS_PORT}`
            : process.env.ASPNETCORE_URLS
            ? process.env.ASPNETCORE_URLS.split(";")[0]
            : "http://localhost:5001",
          secure: false,
        },
      },
    },
    plugins: getPlugins().concat([
      VitePWA({
        includeAssets: [
          "favicon.svg",
          "favicon.ico",
          "robots.txt",
          "apple-touch-icon.png",
        ],
        manifest: {
          name: "Vite",
          short_name: "Vite",
          description: "Vite",
          lang: "en",
          start_url: "/",
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
    ]),
  });
};
