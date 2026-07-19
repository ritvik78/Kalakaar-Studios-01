import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { categories, galleryItems, partners, processSteps, stats, talents, testimonials, articles } from '@/lib/data';
import { GlassCard, GlossButton, PageSection, SecondaryButton, SectionHeading, StatNumber, TagPill } from './ui';
import { FeaturedTalentsCarousel } from './featured-talents-carousel';
import { TestimonialsCarousel } from './testimonials-carousel';
import { GalleryGrid } from './gallery-grid';
import { NewsletterForm } from './newsletter-form';

export function HomeHero() {
const heroImage = talents[3]?.image ?? talents[0]?.image;

return (
<section className="relative isolate overflow-hidden border-b border-purple-200 bg-white">
<div className="absolute inset-0">
{heroImage ? (
<Image src={heroImage} alt="Premium talent setup" fill priority className="object-cover object-center opacity-15 mix-blend-multiply" />
) : null}
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,51,234,0.15),transparent_36%),linear-gradient(120deg,rgba(250,250,255,0.96),rgba(245,243,255,0.84)_45%,rgba(168,85,247,0.06))]" />
<div className="absolute inset-0 bg-pinstripe opacity-5" />
<div className="absolute inset-0 bg-fizz opacity-10" />
</div>

<div className="absolute inset-0 hidden lg:block">
<div className="absolute left-16 top-24 h-14 w-14 rounded-full border border-violet-400 bg-violet-200 blur-[0.5px] animate-floatUp opacity-40" />
<div className="absolute left-1/3 top-10 h-9 w-9 rounded-full border border-purple-300 bg-purple-100 animate-floatUp [animation-delay:1s] opacity-50" />
<div className="absolute right-24 top-36 h-12 w-12 rounded-full border border-violet-400 bg-violet-200 animate-floatUp [animation-delay:2s] opacity-40" />
</div>

<div className="relative mx-auto grid min-h-[92vh] w-full max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-24">
<div className="max-w-4xl">
<TagPill>talent management portal</TagPill>
<h1 className="mt-6 font-display text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#1a1a2e] sm:text-6xl lg:text-8xl">
Talent booking for launches that need to feel sharp.
</h1>
<p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
Building meaningful connections through our network to spread happiness, inspire creativity, and create lasting experiences..
</p>
<div className="mt-8 flex flex-wrap gap-4">
<GlossButton href="/booking">Start booking <ArrowRight className="h-4 w-4" /></GlossButton>
<SecondaryButton href="/talents">Explore talent</SecondaryButton>
</div>
<div className="mt-10 grid gap-4 sm:grid-cols-3">
{stats.slice(0, 3).map((stat) => (
<GlassCard key={stat.label} className="p-5">
<p className="text-xs uppercase tracking-[0.28em] text-gray-500">{stat.label}</p>
<div className="mt-3 flex items-end justify-between gap-4">
<StatNumber value={stat.value} />
<span className="max-w-[9rem] text-xs leading-5 text-gray-500">{stat.detail}</span>
</div>
</GlassCard>
))}
</div>
</div>

<GlassCard className="relative overflow-hidden p-4 lg:p-5">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,85,247,0.15),transparent_30%),linear-gradient(135deg,rgba(168,85,247,0.08),rgba(168,85,247,0.02))]" />
<div className="relative overflow-hidden rounded-[1.25rem] border border-purple-300 bg-purple-100">
<Image src={talents[6].image} alt="Featured talent portrait" width={1200} height={1400} className="h-[32rem] w-full object-cover object-center opacity-85" />
<div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
<div className="absolute inset-x-4 bottom-4 rounded-[1.2rem] border border-purple-300 bg-white/90 p-4 backdrop-blur-xl shadow-md">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs uppercase tracking-[0.28em] text-purple-600">Featured talent</p>
<h2 className="mt-2 font-display text-3xl font-black text-[#1a1a2e]">{talents[6].name}</h2>
<p className="mt-1 text-sm text-gray-500">{talents[6].role} · {talents[6].city}</p>
</div>
<div className="rounded-2xl border border-purple-300 bg-purple-100 px-3 py-2 text-right shadow-sm">
<p className="font-accent text-3xl text-purple-600">{talents[6].rating}</p>
<p className="text-[10px] uppercase tracking-[0.26em] text-purple-600">Rating</p>
</div>
</div>
<div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600">
{talents[6].highlights.map((item) => (
<span key={item} className="rounded-full border border-purple-300 bg-purple-100 px-3 py-1 text-gray-600">{item}</span>
))}
</div>
</div>
</div>
</GlassCard>
</div>
</section>
);
}

export function StatsSection() {
return (
<PageSection className="bg-[linear-gradient(180deg,#FAFAFF,#F5F3FF_50%,#FAFAFF)]">
<div className="mx-auto grid w-full max-w-7xl gap-4 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
{stats.map((stat) => (
<GlassCard key={stat.label} className="p-6">
<p className="text-xs uppercase tracking-[0.28em] text-gray-500">{stat.label}</p>
<div className="mt-4 flex items-end justify-between gap-4">
<StatNumber value={stat.value} />
<div className="h-14 w-14 rounded-full border border-purple-300 bg-[radial-gradient(circle,rgba(168,85,247,0.3),transparent_65%)] shadow-[0_0_35px_rgba(147,51,234,0.12)]" />
</div>
<p className="mt-3 text-sm leading-6 text-gray-500">{stat.detail}</p>
</GlassCard>
))}
</div>
</PageSection>
);
}

export function CategoriesSection() {
return (
<PageSection className="bg-white">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<SectionHeading
eyebrow="Talent categories"
title="A roster engineered for premium breadth."
description="Browse the 21 category clusters that power campaigns, launches, summits, and content programs without forcing you to start from zero every time."
/>
<div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
{categories.map((category, index) => (
<Link key={category.slug} href={`/categories/${category.slug}`} className="group">
<GlassCard className="flex h-full min-h-44 flex-col justify-between p-5 transition duration-300 group-hover:-translate-y-2">
<div>
<div className="flex items-center justify-between">
<p className="text-xs uppercase tracking-[0.28em] text-purple-600">0{index + 1}</p>
<span className="rounded-full border border-purple-300 bg-purple-100 px-2 py-1 text-[10px] uppercase tracking-[0.24em] text-purple-800">Curated</span>
</div>
<h3 className="mt-4 font-display text-2xl font-black text-[#1a1a2e]">{category.name}</h3>
<p className="mt-3 text-sm leading-6 text-gray-500">{category.description}</p>
</div>
<div className="mt-6 flex items-center justify-between text-sm text-gray-600 font-medium">
<span>{category.featuredTalentIds.length} featured profiles</span>
<ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
</div>
</GlassCard>
</Link>
))}
</div>
</div>
</PageSection>
);
}

export function FeaturedTalentsSection() {
return (
<PageSection className="bg-[linear-gradient(180deg,#FAFAFF,#F5F3FF_60%,#FAFAFF)]">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<SectionHeading
eyebrow="Featured talent"
title="A carousel of faces that feel ready to brief."
description="Fast-moving rosters need confidence and clarity. This featured set keeps the decision path tight while preserving a premium sense of depth."
/>
<div className="mt-10">
<FeaturedTalentsCarousel />
</div>
</div>
</PageSection>
);
}

export function GallerySection() {
return (
<PageSection className="bg-white">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<SectionHeading
eyebrow="Gallery"
title="Editorial imagery with a refined, reflective finish."
description="A masonry-style gallery with a lightbox for opening key moments without breaking the flow."
/>
<div className="mt-10">
<GalleryGrid items={galleryItems} />
</div>
</div>
</PageSection>
);
}

export function TestimonialsSection() {
return (
<PageSection className="bg-[linear-gradient(180deg,#FAFAFF,#F5F3FF_55%,#FAFAFF)]">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<SectionHeading
eyebrow="Testimonials"
title="Proof that feels as polished as the product."
description="Clients care about speed, reliability, and how the booking process makes them feel. These voices are selected to signal all three."
/>
<div className="mt-10">
<TestimonialsCarousel testimonials={testimonials} />
</div>
</div>
</PageSection>
);
}

export function PartnersSection() {
return (
<PageSection className="border-y border-purple-200 bg-[linear-gradient(135deg,#f5f3ff,#ede9fe_40%,#ddd6fe_70%,#c4b5fd)] text-[#1a1a2e]">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="overflow-hidden rounded-[2rem] border border-purple-300 bg-white/70 backdrop-blur-xl shadow-md">
<div className="animate-[scroll_28s_linear_infinite] whitespace-nowrap py-6 text-sm font-semibold uppercase tracking-[0.32em] text-[#1a1a2e] [animation-play-state:running]">
{[...partners, ...partners, ...partners].map((partner, index) => (
<span key={`${partner.name}-${index}`} className="mx-8 inline-flex items-center gap-2">
<Sparkles className="h-4 w-4 text-violet-600" />
{partner.name}
</span>
))}
</div>
</div>
</div>
</PageSection>
);
}

export function ProcessSection() {
return (
<PageSection className="bg-white">
<div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<SectionHeading
eyebrow="Process"
title="A booking process that stays clean from brief to showtime."
description="Every step is designed to reduce noise, preserve context, and keep the client moving forward with confidence."
/>
<div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
{processSteps.map((step, index) => (
<GlassCard key={step.title} className="relative p-6">
<div className="flex items-center justify-between">
<span className="font-accent text-4xl text-purple-600">0{index + 1}</span>
<CheckCircle2 className="h-5 w-5 text-purple-600" />
</div>
<h3 className="mt-6 font-display text-2xl font-black text-[#1a1a2e]">{step.title}</h3>
<p className="mt-3 text-sm leading-6 text-gray-500">{step.detail}</p>
<div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-purple-400 via-violet-300 to-transparent opacity-70" />
</GlassCard>
))}
</div>
</div>
</PageSection>
);
}

export function BlogNewsletterSection() {
return (
<PageSection className="bg-[linear-gradient(180deg,#FAFAFF,#F5F3FF_55%,#FAFAFF)]">
<div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
<GlassCard className="p-8">
<SectionHeading
eyebrow="Blog hub"
title="A signal-rich editorial layer for clients who want context."
description="The blog hub surfaces strategy, operations, and design lessons that sit behind the booking experience."
/>
<div className="mt-8 grid gap-4">
{articles.slice(0, 3).map((article) => (
<Link key={article.slug} href={`/blog/${article.slug}`} className="group rounded-[1.4rem] border border-purple-200 bg-violet-50 p-4 transition hover:bg-violet-100">
<div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.24em] text-purple-600 font-medium">
<span>{article.category}</span>
<span>•</span>
<span>{article.readTime}</span>
</div>
<h3 className="mt-3 font-display text-2xl font-black text-[#1a1a2e]">{article.title}</h3>
<p className="mt-2 text-sm leading-6 text-gray-500">{article.excerpt}</p>
</Link>
))}
</div>
</GlassCard>

<GlassCard className="p-8">
<SectionHeading
eyebrow="Newsletter"
title="Stay close to roster updates and premium booking insight."
description="Low-friction updates for people who want examples, availability shifts, and useful perspective without inbox clutter."
/>
<div className="mt-8">
<NewsletterForm />
</div>
</GlassCard>
</div>
</PageSection>
);
}
