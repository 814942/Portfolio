import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.ico',
        'apple-touch-icon.png',
        'android-chrome-192x192.png',
        'android-chrome-512x512.png',
        'maskable_icon.png',
        'images/me.webp'
      ],
      manifest: {
        name: 'Pablo Garay | Backend Developer',
        short_name: 'PabloDev',
        description: 'Portfolio de Pablo Garay, desarrollador backend especializado en Node.js, NestJS y sistemas escalables.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ebebeb',
        theme_color: '#000000',
        icons: [
          {
            src: '/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/maskable_icon.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          router: ['react-router-dom'],
          i18n: ['react-i18next', 'i18next'],
          motion: ['framer-motion'],
          ui: ['@radix-ui/react-slot'],
        }
      }
    }
  }
})
