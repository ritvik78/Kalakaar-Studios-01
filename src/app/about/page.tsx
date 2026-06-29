import type { Metadata } from 'next';
import { StandardPage, CopyBlock } from '@/components/content-page';
import { stats } from '@/lib/data';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <StandardPage
      eyebrow="About"
      title="Built to feel like a premium production partner."
      description="We combine roster curation, booking discipline, and a polished visual system so that every talent request feels clear and controlled from the first interaction."
      image={stats[0] ? 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80' : undefined}
    >
      <div className="grid gap-4 lg:grid-cols-3">
        <CopyBlock title="Curated roster" text="Every category is assembled for real use cases, not just for visual volume. That keeps the user focused and the booking process efficient." />
        <CopyBlock title="Premium motion" text="Animation is present, intentional, and GPU-friendly. It supports the brand rather than overwhelming the task flow." />
        <CopyBlock title="Operational clarity" text="Forms, responses, and page structure all reinforce the same priority: keep the client moving with confidence." />
      </div>
    </StandardPage>
  );
}
