const CONTACT_API_URL = 'https://api-prod.aathisoft.com/webportal/public/website-contact'

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST')
    return response.status(405).json({
      success: false,
      message: 'Method not allowed',
    })
  }

  try {
    const apiResponse = await fetch(CONTACT_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Origin: 'https://aathisoft.com',
        Referer: 'https://aathisoft.com/',
      },
      body: JSON.stringify(request.body),
    })

    let data = null

    try {
      data = await apiResponse.json()
    } catch {
      data = null
    }

    if (!apiResponse.ok || data?.success !== true) {
      return response.status(apiResponse.status || 500).json(
        data || {
          success: false,
          message: 'Unable to send message right now. Please try again.',
        },
      )
    }

    return response.status(200).json(data)
  } catch (error) {
    return response.status(500).json({
      success: false,
      message:
        error instanceof Error
          ? error.message
          : 'Unable to send message right now. Please try again.',
    })
  }
}
