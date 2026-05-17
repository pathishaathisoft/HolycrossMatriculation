import { Buffer } from 'node:buffer'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const websiteContactApiUrl =
  'https://api-prod.aathisoft.com/webportal/public/website-contact'

function createWebsiteContactRelay() {
  return async (req, res, next) => {
    const requestPath = req.url?.split('?')[0]

    if (requestPath !== '/api/website-contact') {
      next()
      return
    }

    if (req.method === 'OPTIONS') {
      res.statusCode = 204
      res.end()
      return
    }

    if (req.method !== 'POST') {
      res.statusCode = 405
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: { statusCode: 405, message: 'Method Not Allowed' } }))
      return
    }

    try {
      const requestBody = await new Promise((resolve, reject) => {
        const chunks = []

        req.on('data', (chunk) => chunks.push(chunk))
        req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
        req.on('error', reject)
      })

      let payload = {}

      try {
        payload = requestBody ? JSON.parse(requestBody) : {}
      } catch {
        res.statusCode = 400
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: { statusCode: 400, message: 'Invalid JSON body' } }))
        return
      }

      const upstreamResponse = await fetch(websiteContactApiUrl, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const responseText = await upstreamResponse.text()

      res.statusCode = upstreamResponse.status
      res.setHeader(
        'Content-Type',
        upstreamResponse.headers.get('content-type') || 'application/json',
      )
      res.end(responseText)
    } catch (error) {
      console.error('Website contact relay error:', error)
      res.statusCode = 502
      res.setHeader('Content-Type', 'application/json')
      res.end(
        JSON.stringify({
          error: {
            statusCode: 502,
            message: 'Unable to connect to the website contact service',
          },
        }),
      )
    }
  }
}

function websiteContactRelayPlugin() {
  return {
    name: 'website-contact-relay',
    configureServer(server) {
      server.middlewares.use(createWebsiteContactRelay())
    },
    configurePreviewServer(server) {
      server.middlewares.use(createWebsiteContactRelay())
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), websiteContactRelayPlugin()],
})
