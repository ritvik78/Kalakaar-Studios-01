import Link from 'next/link';

export default function NotFound() {
return (
<div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-20 text-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,51,234,0.4),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.25),transparent_22%),linear-gradient(180deg,#1a1a2e,#16162a)]" />
<div className="absolute inset-0 bg-fizz opacity-40 animate-drift" />
<div className="relative z-10 max-w-2xl">
<p className="text-xs uppercase tracking-[0.32em] text-violet-300">404</p>
<h1 className="mt-4 font-display text-5xl font-black uppercase text-white sm:text-7xl">This page faded out.</h1>
<p className="mt-5 text-sm leading-7 text-white/70">The page you requested doesn&apos;t exist, but the rest of the roster is still very much here.</p>
<Link href="/" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-purple-700 via-purple-500 to-violet-400 px-5 py-3 text-sm font-semibold text-white">
Return home
</Link>
</div>
</div>
);
}
