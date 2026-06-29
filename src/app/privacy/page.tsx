import type { Metadata } from 'next';
import { StandardPage } from '@/components/content-page';
import { GlassCard } from '@/components/ui';

export const metadata: Metadata = { title: 'Privacy' };

export default function PrivacyPage() {
  return (
    <StandardPage eyebrow="Privacy" title="Privacy policy" description="A concise policy page for bookings, inquiries, and newsletter signups." image="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?auto=format&fit=crop&w=1200&q=80">
      <GlassCard className="p-6">
        <p className="text-sm leading-7 text-white/70">We collect only the details needed to process inquiries, validate booking requests, and communicate about your submission. Data is used to respond to your request, maintain service quality, and support internal reporting.</p>
      </GlassCard>
    </StandardPage>
  );
}
