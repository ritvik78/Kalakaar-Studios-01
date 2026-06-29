import Link from 'next/link';
import { cn } from '@/lib/utils';

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function PageShell({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}>{children}</div>;
}

export function PageSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return <section className={cn('relative py-16 sm:py-20 lg:py-24', className)}>{children}</section>;
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: SectionProps) {
  return (
    <div className={cn('max-w-3xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-yellow-300 bg-yellow-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-yellow-800 backdrop-blur-md">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-black tracking-tight text-[#1a1a1a] sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">{description}</p> : null}
    </div>
  );
}

export function GlassCard({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-[1.75rem] border border-yellow-200 bg-yellow-50 p-6 shadow-md backdrop-blur-xl transition duration-300 will-change-transform hover:-translate-y-1 hover:border-yellow-400 hover:bg-yellow-100 hover:shadow-lg',
        className,
      )}
    >
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-300 to-transparent opacity-60" />
      <span className="pointer-events-none absolute left-4 top-4 h-24 w-24 rounded-full bg-yellow-200 blur-2xl transition duration-500 group-hover:scale-125 opacity-40" />
      {children}
    </div>
  );
}

export function GlossButton({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full border border-red-400 bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 px-5 py-3 text-sm font-semibold text-white shadow-glow transition duration-300 hover:scale-[1.02] active:scale-[0.98]',
        className,
      )}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-70 transition duration-700 group-hover:translate-x-full" />
      <span className="relative flex items-center gap-2">{children}</span>
    </Link>
  );
}

export function SecondaryButton({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-full border border-yellow-200 bg-yellow-50 px-5 py-3 text-sm font-semibold text-[#1a1a1a] backdrop-blur-md transition duration-300 hover:border-yellow-400 hover:bg-yellow-100',
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function TagPill({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex rounded-full border border-yellow-300 bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800 backdrop-blur-md">{children}</span>;
}

export function StatNumber({ value }: { value: string }) {
  return <span className="font-accent text-5xl leading-none text-yellow-300 sm:text-6xl">{value}</span>;
}
