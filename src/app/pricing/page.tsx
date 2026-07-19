import type { Metadata } from 'next';
import { pricingPlans } from '@/lib/data';
import { StandardPage } from '@/components/content-page';
import { GlassCard } from '@/components/ui';

export const metadata: Metadata = { title: 'Pricing' };

export default function PricingPage() {
return (
<StandardPage eyebrow="Pricing" title="Flexible tiers for different production shapes." description="Use these as a starting point for planning. Real projects are scoped around usage, travel, and talent mix." image="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80">
<div className="grid gap-4 lg:grid-cols-3">
{pricingPlans.map((plan) => (
<GlassCard key={plan.name} className="p-6">
<p className="text-xs uppercase tracking-[0.24em] text-violet-600">{plan.name}</p>
<h2 className="mt-3 font-display text-4xl font-black text-[#1a1a2e]">{plan.price}</h2>
<p className="mt-3 text-sm leading-7 text-gray-600">{plan.description}</p>
<ul className="mt-5 grid gap-2 text-sm text-gray-600">
{plan.features.map((feature) => <li key={feature}>• {feature}</li>)}
</ul>
</GlassCard>
))}
</div>
</StandardPage>
);
}
