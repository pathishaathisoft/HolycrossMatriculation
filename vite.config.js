import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api/website-contact': {
        target: 'https://api-prod.aathisoft.com',
        changeOrigin: true,
        secure: true,
        headers: {
          Accept: 'application/json',
          Origin: 'https://aathisoft.com',
          Referer: 'https://aathisoft.com/',
        },
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('origin', 'https://aathisoft.com')
            proxyReq.setHeader('referer', 'https://aathisoft.com/')
          })
        },
        rewrite: () => '/webportal/public/website-contact',
      },
    },
  },
})
