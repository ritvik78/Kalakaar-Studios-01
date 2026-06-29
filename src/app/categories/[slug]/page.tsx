import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getCategory, talents } from '@/lib/data';
import { GlassCard, PageShell } from '@/components/ui';

export function generateStaticParams() {
  return talents.map((talent) => ({ slug: talent.categorySlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  return { title: category?.name ?? 'Category' };
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const categoryTalents = talents.filter((talent) => talent.categorySlug === category.slug);

  return (
    <section className="py-16">
      <PageShell>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200 backdrop-blur-md">Category</p>
            <h1 className="font-display text-4xl font-black uppercase text-white sm:text-5xl lg:text-7xl">{category.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">{category.description}</p>
          </div>
          <GlassCard className="overflow-hidden p-0">
            <div className="relative aspect-[16/9]">
              <Image src={categoryTalents[0]?.image ?? talents[0].image} alt={category.name} fill className="object-cover object-center" />
            </div>
          </GlassCard>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryTalents.map((talent) => (
            <GlassCard key={talent.slug} className="p-5">
              <Link href={`/talents/${talent.slug}`}>
                <p className="font-display text-2xl font-black text-white">{talent.name}</p>
                <p className="mt-1 text-sm text-white/65">{talent.role} · {talent.city}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-yellow-200">From {talent.priceFrom.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })}</p>
              </Link>
            </GlassCard>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
