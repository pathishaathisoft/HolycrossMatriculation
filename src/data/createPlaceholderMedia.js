function svgToDataUri(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}

function createBaseScene({
  title,
  subtitle,
  width = 1200,
  height = 720,
  background = ['#16386f', '#0b2148'],
  accent = '#d9b45b',
  glow = '#f2e2a3',
}) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${background[0]}" />
          <stop offset="100%" stop-color="${background[1]}" />
        </linearGradient>
        <radialGradient id="sun" cx="70%" cy="25%" r="55%">
          <stop offset="0%" stop-color="${glow}" stop-opacity="0.55" />
          <stop offset="100%" stop-color="${glow}" stop-opacity="0" />
        </radialGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#bg)" />
      <rect width="${width}" height="${height}" fill="url(#sun)" />
      <path d="M0 ${height * 0.68} C ${width * 0.18} ${height * 0.58}, ${width * 0.38} ${height * 0.8}, ${width * 0.55} ${height * 0.7} C ${width * 0.72} ${height * 0.6}, ${width * 0.86} ${height * 0.85}, ${width} ${height * 0.72} L ${width} ${height} L 0 ${height} Z" fill="rgba(255,255,255,0.08)" />
      <rect x="${width * 0.1}" y="${height * 0.28}" width="${width * 0.5}" height="${height * 0.32}" rx="18" fill="rgba(255,255,255,0.15)" />
      <rect x="${width * 0.58}" y="${height * 0.2}" width="${width * 0.22}" height="${height * 0.42}" rx="18" fill="rgba(255,255,255,0.12)" />
      <rect x="${width * 0.82}" y="${height * 0.3}" width="${width * 0.1}" height="${height * 0.3}" rx="18" fill="rgba(255,255,255,0.14)" />
      <rect x="${width * 0.14}" y="${height * 0.34}" width="${width * 0.42}" height="${height * 0.04}" rx="8" fill="${accent}" opacity="0.92" />
      <rect x="${width * 0.14}" y="${height * 0.42}" width="${width * 0.34}" height="${height * 0.028}" rx="6" fill="white" opacity="0.9" />
      <rect x="${width * 0.14}" y="${height * 0.48}" width="${width * 0.28}" height="${height * 0.024}" rx="6" fill="white" opacity="0.72" />
      <rect x="${width * 0.14}" y="${height * 0.56}" width="${width * 0.18}" height="${height * 0.022}" rx="6" fill="${glow}" opacity="0.9" />
      <circle cx="${width * 0.82}" cy="${height * 0.18}" r="${height * 0.055}" fill="rgba(255,255,255,0.9)" />
      <circle cx="${width * 0.82}" cy="${height * 0.18}" r="${height * 0.035}" fill="${accent}" />
      <text x="${width * 0.14}" y="${height * 0.19}" fill="white" font-size="${height * 0.06}" font-family="Georgia, serif" font-weight="700">${title}</text>
      <text x="${width * 0.14}" y="${height * 0.25}" fill="${glow}" font-size="${height * 0.026}" font-family="'Trebuchet MS', sans-serif" letter-spacing="3">${subtitle}</text>
    </svg>
  `

  return svgToDataUri(svg)
}

export function createSceneMedia(options) {
  return createBaseScene(options)
}

export function createPosterMedia({
  title,
  subtitle,
  width = 800,
  height = 1100,
  background = ['#f3df9c', '#b9781e'],
  accent = '#8a1d1d',
  glow = '#fff7d1',
}) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
      <defs>
        <linearGradient id="gold" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="${background[0]}" />
          <stop offset="100%" stop-color="${background[1]}" />
        </linearGradient>
        <radialGradient id="halo" cx="50%" cy="36%" r="60%">
          <stop offset="0%" stop-color="${glow}" stop-opacity="0.95" />
          <stop offset="100%" stop-color="${glow}" stop-opacity="0" />
        </radialGradient>
      </defs>

      <rect width="${width}" height="${height}" fill="url(#gold)" />
      <rect x="60" y="60" width="${width - 120}" height="${height - 120}" rx="28" fill="rgba(255,248,224,0.72)" stroke="rgba(138,29,29,0.3)" stroke-width="8" />
      <rect x="120" y="120" width="${width - 240}" height="76" rx="18" fill="${accent}" />
      <text x="${width / 2}" y="170" text-anchor="middle" fill="${glow}" font-size="34" font-family="Georgia, serif" font-weight="700">${title}</text>
      <circle cx="${width / 2}" cy="${height * 0.62}" r="${height * 0.16}" fill="url(#halo)" />
      <circle cx="${width / 2}" cy="${height * 0.62}" r="${height * 0.12}" fill="rgba(255,255,255,0.9)" stroke="${accent}" stroke-width="14" />
      <circle cx="${width / 2}" cy="${height * 0.62}" r="${height * 0.07}" fill="${background[1]}" opacity="0.8" />
      <text x="${width / 2}" y="${height * 0.35}" text-anchor="middle" fill="#652b11" font-size="28" font-family="'Trebuchet MS', sans-serif" letter-spacing="4">${subtitle}</text>
      <text x="${width / 2}" y="${height * 0.43}" text-anchor="middle" fill="#8a1d1d" font-size="62" font-family="Georgia, serif" font-weight="700">CELEBRATE</text>
      <text x="${width / 2}" y="${height * 0.83}" text-anchor="middle" fill="#652b11" font-size="26" font-family="'Trebuchet MS', sans-serif">Template Announcement Poster</text>
    </svg>
  `

  return svgToDataUri(svg)
}
