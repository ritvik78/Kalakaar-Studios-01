import type { Metadata } from 'next';
import { BookingWizard } from '@/components/booking-wizard';
import { StandardPage } from '@/components/content-page';

export const metadata: Metadata = { title: 'Booking' };

export default function BookingPage() {
  return (
    <StandardPage eyebrow="Booking wizard" title="Six-step booking flow built for clarity." description="A validated request path with polished transitions, progress feedback, and a success state that feels finished." image="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80">
      <BookingWizard />
    </StandardPage>
  );
}
