import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  base: "/", // Asegúrate de que esta línea esté presente
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Mi PWA App",
        short_name: "PWA App",
        description: "Esta es mi aplicación PWA",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#42a5f5",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
