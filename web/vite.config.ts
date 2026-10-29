import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

const API = process.env.API_URL ?? 'http://localhost:4300';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'ExamPrepa CI',
        short_name: 'ExamPrepa',
        description: 'Prépare ton BEPC et ton BAC : cours, questions et devoirs notés, même hors ligne.',
        lang: 'fr',
        start_url: '/',
        display: 'standalone',
        background_color: '#FFF8F2',
        theme_color: '#FF6B00',
        icons: [
          { src: 'icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // Coquille de l'application (JS, CSS, polices KaTeX) en cache ; les données passent par IndexedDB.
        globPatterns: ['**/*.{js,css,html,svg,png,woff2}'],
        navigateFallback: '/index.html',
        navigateFallbackDenylist: [/^\/api\//],
        // Notifications push (public/push-sw.js)
        importScripts: ['push-sw.js'],
      },
    }),
  ],
  server: {
    port: 5174,
    proxy: { '/api': API },
  },
  preview: { proxy: { '/api': API } },
  build: { chunkSizeWarningLimit: 700 },
});
