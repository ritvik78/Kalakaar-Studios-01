import type { Metadata } from 'next';
import { faqItems } from '@/lib/data';
import { StandardPage } from '@/components/content-page';
import { GlassCard } from '@/components/ui';

export const metadata: Metadata = { title: 'FAQ' };

export default function FaqPage() {
return (
<StandardPage eyebrow="FAQ" title="Common questions, answered directly." description="Everything from shortlists to international booking support, in a form that reduces friction for new clients." image="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80">
<div className="grid gap-4">
{faqItems.map((item) => (
<GlassCard key={item.question} className="p-6">
<h2 className="font-display text-2xl font-black text-[#1a1a2e]">{item.question}</h2>
<p className="mt-3 text-sm leading-7 text-gray-600">{item.answer}</p>
</GlassCard>
))}
</div>
</StandardPage>
);
}
