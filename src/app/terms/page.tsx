import type { Metadata } from 'next';
import { StandardPage } from '@/components/content-page';
import { GlassCard } from '@/components/ui';

export const metadata: Metadata = { title: 'Terms' };

export default function TermsPage() {
  return (
    <StandardPage eyebrow="Terms" title="Terms of service" description="A practical set of terms for booking, contact requests, and site usage." image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80">
      <GlassCard className="p-6">
        <p className="text-sm leading-7 text-white/70">All booking requests are subject to availability, final confirmation, and agreed usage terms. Content on this site is provided for discovery and planning purposes and does not constitute a binding contract until confirmed in writing.</p>
      </GlassCard>
    </StandardPage>
  );
}
