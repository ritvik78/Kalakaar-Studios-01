import type { Metadata } from 'next';
import { HomeHero, StatsSection, CategoriesSection, FeaturedTalentsSection, GallerySection, TestimonialsSection, ProcessSection, BlogNewsletterSection } from '@/components/home-sections';

export const metadata: Metadata = {
  title: 'Home',
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <StatsSection />
      <CategoriesSection />
      <FeaturedTalentsSection />
      <GallerySection />
      <TestimonialsSection />
      <ProcessSection />
      <BlogNewsletterSection />
    </>
  );
}
