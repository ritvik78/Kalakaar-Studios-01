import type { Metadata } from 'next';
import { StandardPage } from '@/components/content-page';
import { testimonials } from '@/lib/data';
import { TestimonialsCarousel } from '@/components/testimonials-carousel';

export const metadata: Metadata = { title: 'Testimonials' };

export default function TestimonialsPage() {
  return (
    <StandardPage eyebrow="Testimonials" title="What premium clients say when the process works." description="Selected comments from brand teams, producers, and event leads who needed speed, clarity, and polished execution." image={testimonials[0]?.image}>
      <TestimonialsCarousel testimonials={testimonials} />
    </StandardPage>
  );
}
