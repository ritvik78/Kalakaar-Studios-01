import type { Metadata } from 'next';
import { StandardPage, CopyBlock } from '@/components/content-page';

export const metadata: Metadata = { title: 'Why Choose Us' };

export default function WhyChooseUsPage() {
  return (
    <StandardPage
      eyebrow="Why choose us"
      title="Premium surface, disciplined process, real speed."
      description="The site blends a high-gloss visual identity with production-minded structure so teams can move quickly without losing certainty."
      image="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <CopyBlock title="Fast shortlists" text="Narrow, relevant options arrive quickly so stakeholders can decide with less back-and-forth." />
        <CopyBlock title="Real talent data" text="Profiles carry the details that matter: role, city, language fit, price from, and practical highlights." />
        <CopyBlock title="Mobile-first UX" text="Touch targets stay large, visual effects soften on mobile, and the booking flow remains easy to complete." />
        <CopyBlock title="SEO-ready" text="Pages include metadata and structured data patterns that support search visibility and content discoverability." />
      </div>
    </StandardPage>
  );
}
