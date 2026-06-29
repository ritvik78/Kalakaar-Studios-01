import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 py-20 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(226,35,26,0.25),transparent_30%),radial-gradient(circle_at_top_right,rgba(255,213,0,0.18),transparent_22%),linear-gradient(180deg,#111,#191919)]" />
      <div className="absolute inset-0 bg-fizz opacity-35 animate-drift" />
      <div className="relative z-10 max-w-2xl">
        <p className="text-xs uppercase tracking-[0.32em] text-yellow-200">404</p>
        <h1 className="mt-4 font-display text-5xl font-black uppercase text-white sm:text-7xl">This page fizzed away.</h1>
        <p className="mt-5 text-sm leading-7 text-white/68">The page you requested doesn’t exist, but the rest of the roster is still very much here.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 px-5 py-3 text-sm font-semibold text-white">
          Return home
        </Link>
      </div>
    </div>
  );
}
