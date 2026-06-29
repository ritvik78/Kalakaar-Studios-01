import type { Metadata } from 'next';
import Link from 'next/link';
import { articles } from '@/lib/data';
import { GlassCard, PageShell } from '@/components/ui';

export const metadata: Metadata = { title: 'Blog' };

export default function BlogPage() {
  return (
    <section className="py-16">
      <PageShell>
        <h1 className="font-display text-4xl font-black uppercase text-white sm:text-5xl lg:text-7xl">Blog hub</h1>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {articles.map((article) => (
            <GlassCard key={article.slug} className="p-6">
              <Link href={`/blog/${article.slug}`}>
                <p className="text-xs uppercase tracking-[0.24em] text-yellow-200">{article.category}</p>
                <h2 className="mt-3 font-display text-3xl font-black text-white">{article.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/68">{article.excerpt}</p>
              </Link>
            </GlassCard>
          ))}
        </div>
      </PageShell>
    </section>
  );
}
