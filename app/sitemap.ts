import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://nextappfactory.com'

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/apps-list`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${base}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://stocklens.nextappfactory.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://stocklens.nextappfactory.com/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://stocklens.nextappfactory.com/support', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://flipscout.nextappfactory.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://flipscout.nextappfactory.com/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://flipscout.nextappfactory.com/support', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://tomescout.nextappfactory.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://tomescout.nextappfactory.com/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://tomescout.nextappfactory.com/support', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: 'https://doyum.ai', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://doyum.ai/privacy', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://doyum.ai/terms', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://doyum.ai/support', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
  ]
}
