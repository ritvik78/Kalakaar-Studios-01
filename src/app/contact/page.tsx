import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact-form';
import { StandardPage } from '@/components/content-page';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <StandardPage eyebrow="Contact" title="Start with a brief, a date, or a shortlist request." description="Send the details and we’ll return with a focused response path." image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80">
      <ContactForm />
    </StandardPage>
  );
}
