import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { caseStudies, getCaseStudy } from '@/lib/data';
import { GlassCard, PageShell } from '@/components/ui';

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  return { title: caseStudy?.title ?? 'Case Study' };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return (
    <section className="py-16">
      <PageShell>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <GlassCard className="overflow-hidden p-0">
            <div className="relative aspect-[4/5]">
              <Image src={caseStudy.image} alt={caseStudy.title} fill className="object-cover object-center" />
            </div>
          </GlassCard>
          <div className="grid gap-4">
            <h1 className="font-display text-4xl font-black uppercase text-white sm:text-5xl">{caseStudy.title}</h1>
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-yellow-200">Challenge</p>
              <p className="mt-3 text-sm leading-7 text-white/70">{caseStudy.challenge}</p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-yellow-200">Summary</p>
              <p className="mt-3 text-sm leading-7 text-white/70">{caseStudy.summary}</p>
            </GlassCard>
            <GlassCard className="p-6">
              <p className="text-xs uppercase tracking-[0.24em] text-yellow-200">Outcome</p>
              <p className="mt-3 text-sm leading-7 text-white/70">{caseStudy.outcome}</p>
            </GlassCard>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
