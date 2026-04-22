export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'n8ol4yatbt',
  name: process.env.NEXT_PUBLIC_SITE_NAME || '24x7newspress.com',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Global press release distribution & industry news',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Distribute announcements, follow industries, and read curated press coverage with a newsroom-trust layout built for media teams and public companies.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || '24x7newspress.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://24x7newspress.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
