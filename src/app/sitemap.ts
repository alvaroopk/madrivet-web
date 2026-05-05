import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://madrivet-web.vercel.app', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://madrivet-web.vercel.app/nosotros', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://madrivet-web.vercel.app/servicios', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://madrivet-web.vercel.app/planes-de-salud', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://madrivet-web.vercel.app/clinicas', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://madrivet-web.vercel.app/contacto', lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
  ]
}
