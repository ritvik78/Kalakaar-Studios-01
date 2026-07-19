"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { talents } from '@/lib/data';
import { GlassCard } from './ui';

const featured = talents.slice(0, 6);

export function FeaturedTalentsCarousel() {
const [index, setIndex] = useState(0);

useEffect(() => {
const timer = window.setInterval(() => setIndex((current) => (current + 1) % featured.length), 4500);
return () => window.clearInterval(timer);
}, []);

const current = featured[index];

return (
<div className="grid gap-4 lg:grid-cols-[1fr_0.65fr]">
<GlassCard className="relative overflow-hidden p-0">
<div className="relative h-[30rem]">
<Image src={current.image} alt={current.name} fill className="object-cover object-center" />
<div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,250,255,0.05),rgba(250,250,255,0.86))]" />
<div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
<div className="inline-flex items-center gap-2 rounded-full border border-purple-300 bg-purple-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-purple-700 backdrop-blur-md">
<Star className="h-3.5 w-3.5 fill-current" />
Active selection
</div>
<h3 className="mt-4 font-display text-4xl font-black text-[#1a1a2e]">{current.name}</h3>
<p className="mt-2 text-sm text-gray-500">{current.role} · {current.city}</p>
<div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
{current.highlights.map((item) => (
<span key={item} className="rounded-full border border-purple-300 bg-purple-100 px-3 py-1">{item}</span>
))}
</div>
</div>
</div>
</GlassCard>

<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
{featured.map((talent, talentIndex) => (
<button
key={talent.slug}
type="button"
onClick={() => setIndex(talentIndex)}
className="text-left"
>
<GlassCard className={`flex items-center gap-4 p-4 transition ${talentIndex === index ? 'border-purple-300/[0.35] bg-white/[0.16] shadow-glow' : 'bg-white/10'}`}>
<Image src={talent.image} alt={talent.name} width={180} height={180} className="h-24 w-24 rounded-[1.2rem] object-cover" />
<div className="min-w-0">
<p className="font-display text-2xl font-black text-white">{talent.name}</p>
<p className="mt-1 text-sm text-white/65">{talent.role}</p>
<p className="mt-2 text-xs uppercase tracking-[0.22em] text-violet-200">From {talent.priceFrom.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</p>
</div>
</GlassCard>
</button>
))}
</div>

<div className="flex items-center justify-between rounded-full border border-purple-300 bg-violet-50 px-5 py-3 text-sm text-gray-600 font-medium lg:col-span-2">
<button type="button" onClick={() => setIndex((current) => (current - 1 + featured.length) % featured.length)} className="inline-flex items-center gap-2 rounded-full px-3 py-1 hover:bg-purple-100">
<ChevronLeft className="h-4 w-4" /> Prev
</button>
<Link href={`/talents/${current.slug}`} className="font-semibold text-purple-600 hover:text-purple-700">Open profile</Link>
<button type="button" onClick={() => setIndex((current) => (current + 1) % featured.length)} className="inline-flex items-center gap-2 rounded-full px-3 py-1 hover:bg-purple-100">
Next <ChevronRight className="h-4 w-4" />
</button>
</div>
</div>
);
}
