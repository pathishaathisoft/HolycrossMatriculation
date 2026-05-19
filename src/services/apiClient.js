const defaultJsonHeaders = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

async function parseResponse(response) {
  const responseText = await response.text()
  const contentType = response.headers.get('content-type') || ''

  if (!responseText) {
    return {
      data: {},
      rawText: '',
      contentType,
    }
  }

  try {
    return {
      data: JSON.parse(responseText),
      rawText: responseText,
      contentType,
    }
  } catch {
    return {
      data: {
        message: responseText,
      },
      rawText: responseText,
      contentType,
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

  const { data, rawText, contentType } = await parseResponse(response)

  return {
    ok: response.ok,
    status: response.status,
    data,
    rawText,
    contentType,
  }
}
