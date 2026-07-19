import type { Metadata } from 'next';
import Link from 'next/link';
import { categories, talents } from '@/lib/data';
import { GlassCard, PageShell } from '@/components/ui';

export const metadata: Metadata = { title: 'Talent Categories' };

export default function CategoriesPage() {
return (
<section className="bg-[linear-gradient(180deg,#1a1a2e,#16162a_55%,#1a1a2e)] py-16">
<PageShell>
<div className="max-w-3xl">
<p className="mb-3 inline-flex rounded-full border border-purple-400/50 bg-purple-900/60 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-violet-200 backdrop-blur-md">Talent categories</p>
<h1 className="font-display text-4xl font-black uppercase text-white sm:text-5xl lg:text-7xl">All 21 category pages, built for quick navigation.</h1>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{categories.map((category) => {
const categoryTalents = talents.filter((talent) => talent.categorySlug === category.slug).slice(0, 3);
return (
<GlassCard key={category.slug} className="p-5 bg-violet-900/50 border-purple-500/40">
<Link href={`/categories/${category.slug}`} className="block">
<h2 className="font-display text-2xl font-black text-white">{category.name}</h2>
<p className="mt-2 text-sm leading-6 text-white/65">{category.description}</p>
<div className="mt-4 grid gap-2 text-sm text-violet-200">
{categoryTalents.map((talent) => <span key={talent.slug}>{talent.name}</span>)}
</div>
</Link>
</GlassCard>
);
})}
</div>
</PageShell>
</section>
);
}
