import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTalent, talents } from '@/lib/data';
import { GlassCard, PageShell } from '@/components/ui';

export function generateStaticParams() {
  return talents.map((talent) => ({ slug: talent.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const talent = getTalent(slug);
  return { title: talent?.name ?? 'Talent Profile', description: talent?.bio };
}

export default async function TalentProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const talent = getTalent(slug);
  if (!talent) notFound();

  return (
    <section className="py-16">
      <PageShell>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <GlassCard className="overflow-hidden p-0">
            <div className="relative aspect-[4/5]">
              <Image src={talent.image} alt={talent.name} fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="text-xs uppercase tracking-[0.28em] text-yellow-200">{talent.role}</p>
                <h1 className="mt-2 font-display text-4xl font-black text-white">{talent.name}</h1>
                <p className="mt-1 text-sm text-white/68">{talent.city}</p>
              </div>
            </div>
          </GlassCard>

          <div className="grid gap-4">
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-yellow-200">Bio</p>
              <p className="mt-3 text-sm leading-7 text-white/70">{talent.bio}</p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-yellow-200">Highlights</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {talent.highlights.map((highlight) => <span key={highlight} className="rounded-full border border-white/[0.12] bg-white/[0.08] px-3 py-1 text-xs text-white/75">{highlight}</span>)}
              </div>
            </GlassCard>
            <GlassCard className="p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <Detail label="Languages" value={talent.languages.join(', ')} />
                <Detail label="Rating" value={String(talent.rating)} />
                <Detail label="Price from" value={talent.priceFrom.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })} />
                <Detail label="Available for" value={talent.availableFor.join(' · ')} />
              </div>
            </GlassCard>
            <Link href="/booking" className="rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 px-5 py-3 text-center text-sm font-semibold text-white">Book this talent</Link>
          </div>
        </div>
      </PageShell>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.24em] text-white/50">{label}</p>
      <p className="mt-2 text-sm text-white/80">{value}</p>
    </div>
  );
}
