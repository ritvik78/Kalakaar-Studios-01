import type { MetadataRoute } from 'next';
import { articles, caseStudies, categories, talents } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://kalakaarstudios.local';
  const staticRoutes = ['/', '/about', '/why-choose-us', '/categories', '/talents', '/gallery', '/testimonials', '/case-studies', '/blog', '/booking', '/contact', '/pricing', '/faq', '/privacy', '/terms'];

  const routes = [
    ...staticRoutes,
    ...categories.map((item) => `/categories/${item.slug}`),
    ...talents.map((item) => `/talents/${item.slug}`),
    ...caseStudies.map((item) => `/case-studies/${item.slug}`),
    ...articles.map((item) => `/blog/${item.slug}`),
  ];

  return routes.map((route) => ({ url: `${baseUrl}${route}`, lastModified: new Date() }));
}
