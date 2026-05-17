const defaultJsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

async function parseResponse(response) {
  const responseText = await response.text()

  if (!responseText) {
    return {}
  }

  try {
    return JSON.parse(responseText)
  } catch {
    return {
      message: responseText,
    }
  }
}

export async function postJson(url, payload, options = {}) {
  const { headers, ...restOptions } = options

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      ...defaultJsonHeaders,
      ...headers,
    },
    body: JSON.stringify(payload),
    ...restOptions,
  })

  const data = await parseResponse(response)

  return {
    ok: response.ok,
    status: response.status,
    data,
  }
}
