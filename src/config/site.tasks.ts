export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Press room',
    route: '/updates',
    description: 'Latest press wire, filings, and media updates in one scannable feed.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/updates',
} as const
