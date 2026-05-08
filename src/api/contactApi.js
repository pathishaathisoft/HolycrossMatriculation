const CONTACT_API_URL =
  import.meta.env.VITE_CONTACT_API_URL ||
  'https://api-prod.aathisoft.com/webportal/public/website-contact'

export async function submitContactRequest(payload) {
  const response = await fetch(CONTACT_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  let data

  try {
    data = await response.json()
  } catch {
    data = null
  }

  if (!response.ok || data?.success === false) {
    throw new Error(data?.message || 'Unable to send message right now. Please try again.')
  }

  return data
}
