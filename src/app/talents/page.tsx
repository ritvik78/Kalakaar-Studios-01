import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { talents } from '@/lib/data';
import { GlassCard, PageShell } from '@/components/ui';

export const metadata: Metadata = { title: 'Talents' };

export default function TalentsPage() {
  return (
    <section className="py-16">
      <PageShell>
        <div className="max-w-3xl">
          <p className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-200 backdrop-blur-md">Talent roster</p>
          <h1 className="font-display text-4xl font-black uppercase text-white sm:text-5xl lg:text-7xl">Real faces, real bios, real booking paths.</h1>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {talents.map((talent) => (
            <GlassCard key={talent.slug} className="overflow-hidden p-0">
              <Link href={`/talents/${talent.slug}`} className="block">
                <div className="relative aspect-[4/5]">
                  <Image src={talent.image} alt={talent.name} fill className="object-cover object-center" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="font-display text-2xl font-black text-white">{talent.name}</p>
                    <p className="mt-1 text-sm text-white/68">{talent.role} · {talent.city}</p>
                  </div>
                </div>
              </Link>
            </GlassCard>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
