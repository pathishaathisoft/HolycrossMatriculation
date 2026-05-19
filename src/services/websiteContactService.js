import { postJson } from './apiClient.js'

const configuredWebsiteContactApiUrl = import.meta.env.VITE_WEBSITE_CONTACT_API_URL?.trim()

const isLocalHost = () =>
  ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname)

const WEBSITE_CONTACT_API_URL =
  configuredWebsiteContactApiUrl ||
  (isLocalHost()
    ? '/api/website-contact'
    : 'https://api-prod.aathisoft.com/webportal/public/website-contact')

function isHtmlDocumentResponse(response) {
  return (
    response.contentType.includes('text/html') ||
    /^\s*<!doctype html/i.test(response.rawText || '')
  )
}

export async function submitWebsiteContact(payload) {
  const response = await postJson(WEBSITE_CONTACT_API_URL, {
    ...payload,
    pageUrl: window.location.href,
    source: 'aathisoft-website',
  })

  if (isHtmlDocumentResponse(response)) {
    throw new Error(
      'The contact API returned HTML instead of JSON. Configure VITE_WEBSITE_CONTACT_API_URL for production or deploy the Firebase /api/website-contact function rewrite.',
    )
  }

  if (!response.ok || response.data?.success === false) {
    throw new Error(response.data?.message || 'Unable to submit your request right now.')
  }

  return response.data
}
