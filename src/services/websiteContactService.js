import { postJson } from './apiClient.js'

const isLocalHost = () =>
  ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname)

const WEBSITE_CONTACT_API_URL = isLocalHost()
  ? '/api/website-contact'
  : 'https://api-prod.aathisoft.com/webportal/public/website-contact'

export async function submitWebsiteContact(payload) {
  const response = await postJson(WEBSITE_CONTACT_API_URL, {
    ...payload,
    pageUrl: window.location.href,
    source: 'aathisoft-website',
  })

  if (!response.ok || response.data?.success === false) {
    throw new Error(response.data?.message || 'Unable to submit your request right now.')
  }

  return response.data
}
