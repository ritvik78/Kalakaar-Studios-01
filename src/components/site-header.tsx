"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navItems = [
['Home', '/'],
['About', '/about'],
['Categories', '/categories'],
['Talents', '/talents'],
['Gallery', '/gallery'],
['Blog', '/blog'],
['Booking', '/booking'],
['Contact', '/contact'],
] as const;

export function SiteHeader() {
const [open, setOpen] = useState(false);
const pathname = usePathname();

const active = useMemo(() => {
return navItems.find(([, href]) => href !== '/' && pathname.startsWith(href))?.[1] ?? (pathname === '/' ? '/' : '');
}, [pathname]);

return (
<header className="sticky top-0 z-50 border-b border-purple-200 bg-white/95 backdrop-blur-2xl">
<div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
<Link href="/" className="group flex items-center gap-3">
<span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-300 bg-purple-100 shadow-glass backdrop-blur-md">
<Sparkles className="h-5 w-5 text-purple-600 transition duration-300 group-hover:rotate-12" />
</span>
<span className="flex flex-col">
<span className="font-display text-lg font-black tracking-[0.22em] text-[#1a1a2e] uppercase">Kalakaar Network</span>
<span className="text-xs uppercase tracking-[0.32em] text-gray-500">Talent & booking</span>
</span>
</Link>

<nav className="hidden items-center gap-1 lg:flex">
{navItems.map(([label, href]) => (
<Link
key={href}
href={href}
className={cn(
'rounded-full px-4 py-2 text-sm font-medium text-gray-500 transition hover:bg-purple-100 hover:text-[#1a1a2e]',
active === href && 'bg-violet-200 text-[#1a1a2e] ring-1 ring-purple-300',
)}
>
{label}
</Link>
))}
</nav>

<div className="hidden items-center gap-3 lg:flex">
<Link href="/booking" className="rounded-full border border-purple-300 bg-purple-500 px-4 py-2 text-sm font-semibold text-white shadow-glow transition hover:scale-[1.02]">
Book talent
</Link>
</div>

<button
type="button"
onClick={() => setOpen((current) => !current)}
className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-purple-200 bg-white text-[#1a1a2e] backdrop-blur-md transition hover:bg-purple-100 lg:hidden"
aria-label="Toggle navigation"
>
{open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
</button>
</div>

{open ? (
<div className="border-t border-purple-200 bg-white px-4 py-4 backdrop-blur-2xl lg:hidden">
<div className="mx-auto grid w-full max-w-7xl gap-2 sm:grid-cols-2">
{navItems.map(([label, href]) => (
<Link
key={href}
href={href}
onClick={() => setOpen(false)}
className={cn('rounded-2xl border border-purple-200 bg-white px-4 py-3 text-sm font-medium text-gray-600', active === href && 'border-purple-300 bg-purple-100 text-[#1a1a2e]')}
>
{label}
</Link>
))}
<Link href="/booking" onClick={() => setOpen(false)} className="rounded-2xl bg-gradient-to-r from-purple-700 to-violet-400 px-4 py-3 text-center text-sm font-semibold text-white">
Book talent
</Link>
</div>
</div>
) : null}
</header>
);
}
