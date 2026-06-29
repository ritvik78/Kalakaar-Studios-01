import type { Metadata } from 'next';
import Link from 'next/link';
import { caseStudies } from '@/lib/data';
import { GlassCard, PageShell } from '@/components/ui';

export const metadata: Metadata = { title: 'Case Studies' };

export default function CaseStudiesPage() {
  return (
    <section className="py-16">
      <PageShell>
        <h1 className="font-display text-4xl font-black uppercase text-white sm:text-5xl lg:text-7xl">Case studies</h1>
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <GlassCard key={study.slug} className="p-6">
              <Link href={`/case-studies/${study.slug}`}>
                <p className="text-xs uppercase tracking-[0.24em] text-yellow-200">{study.metric}</p>
                <h2 className="mt-3 font-display text-3xl font-black text-white">{study.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/68">{study.summary}</p>
              </Link>
            </GlassCard>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
