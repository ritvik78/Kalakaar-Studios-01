import Link from 'next/link';
import { categories, partners } from '@/lib/data';

const footerLinks = [
['About', '/about'],
['Why Choose Us', '/why-choose-us'],
['Pricing', '/pricing'],
['FAQ', '/faq'],
['Privacy', '/privacy'],
['Terms', '/terms'],
] as const;

export function SiteFooter() {
return (
<footer className="border-t border-purple-200 bg-white">
<div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
<div className="max-w-xl">
<p className="font-display text-2xl font-black uppercase tracking-[0.22em] text-[#1a1a2e]">Kalakaar Network</p>
<p className="mt-4 text-sm leading-7 text-gray-500">
Premium talent management and booking with a refined violet-tinged visual system, fast response loops, and a roster designed for launches, live events, and content-led campaigns.
</p>
<div className="mt-6 flex flex-wrap gap-2">
{partners.slice(0, 6).map((partner) => (
<span key={partner.name} className="rounded-full border border-purple-300 bg-purple-100 px-3 py-1 text-xs uppercase tracking-[0.24em] text-purple-800">
{partner.name}
</span>
))}
</div>
</div>

<div>
<h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">Explore</h3>
<div className="mt-4 grid gap-3 text-sm text-gray-500">
{footerLinks.map(([label, href]) => (
<Link key={href} href={href} className="transition hover:text-[#1a1a2e] font-medium">
{label}
</Link>
))}
</div>
</div>

<div>
<h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-purple-600">Categories</h3>
<div className="mt-4 grid gap-3 text-sm text-gray-500">
{categories.slice(0, 8).map((category) => (
<Link key={category.slug} href={`/categories/${category.slug}`} className="transition hover:text-[#1a1a2e] font-medium">
{category.name}
</Link>
))}
</div>
</div>
</div>

<div className="border-t border-purple-200 py-4 text-center text-xs uppercase tracking-[0.3em] text-gray-500">
© 2026 Kalakaar Studios. Built for premium talent booking.
</div>
</footer>
);
}
