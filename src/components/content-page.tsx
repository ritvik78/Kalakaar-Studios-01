import Image from 'next/image';
import { GlassCard, PageSection, PageShell, SectionHeading, TagPill } from './ui';

export function ContentHero({ eyebrow, title, description, image }: { eyebrow: string; title: string; description: string; image?: string }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-gray-300 bg-[linear-gradient(135deg,#FFFEF9,#FFF9E6_52%,#FFFEF4)] py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(226,35,26,0.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,213,0,0.08),transparent_30%)]" />
      <PageShell className="relative grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
        <div>
          <TagPill>{eyebrow}</TagPill>
          <h1 className="mt-6 font-display text-4xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#1a1a1a] sm:text-5xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">{description}</p>
        </div>
        {image ? (
          <GlassCard className="overflow-hidden p-0">
            <div className="relative aspect-[4/5]">
              <Image src={image} alt={title} fill className="object-cover object-center" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/40 via-transparent to-transparent" />
            </div>
          </GlassCard>
        ) : null}
      </PageShell>
    </section>
  );
}

export function StandardPage({ eyebrow, title, description, children, image }: { eyebrow: string; title: string; description: string; children: React.ReactNode; image?: string }) {
  return (
    <div>
      <ContentHero eyebrow={eyebrow} title={title} description={description} image={image} />
      <PageSection className="bg-white">
        <PageShell>
          {children}
        </PageShell>
      </PageSection>
    </div>
  );
}

export function CopyBlock({ title, text }: { title: string; text: string }) {
  return (
    <GlassCard className="p-6">
      <h3 className="font-display text-2xl font-black text-[#1a1a1a]">{title}</h3>
      <p className="mt-3 text-sm leading-7 text-gray-600">{text}</p>
    </GlassCard>
  );
}
