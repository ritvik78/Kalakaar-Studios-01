import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { articles, getArticle } from '@/lib/data';
import { GlassCard, PageShell } from '@/components/ui';

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return { title: article?.title ?? 'Article', description: article?.excerpt };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  return (
    <section className="py-16">
      <PageShell>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <GlassCard className="overflow-hidden p-0">
            <div className="relative aspect-[4/5]">
              <Image src={article.image} alt={article.title} fill className="object-cover object-center" />
            </div>
          </GlassCard>
          <div>
            <p className="text-xs uppercase tracking-[0.24em] text-yellow-200">{article.category} · {article.readTime}</p>
            <h1 className="mt-4 font-display text-4xl font-black uppercase text-white sm:text-5xl">{article.title}</h1>
            <p className="mt-4 text-sm leading-7 text-white/68">{article.excerpt}</p>
            <div className="mt-8 grid gap-4">
              {article.content.map((paragraph) => (
                <GlassCard key={paragraph} className="p-6">
                  <p className="text-sm leading-7 text-white/72">{paragraph}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </PageShell>
    </section>
  );
}
