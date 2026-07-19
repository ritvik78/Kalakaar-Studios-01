"use client";

import { useEffect, useState } from 'react';
import gsap from 'gsap';

export function Preloader() {
const [done, setDone] = useState(false);
const tweenRef = { current: gsap.context(() => {}) };

useEffect(() => {
const ctx = gsap.context(() => {
const target = document.querySelector('[data-preloader-can]');
if (target) {
gsap.fromTo(
target,
{ y: 18, rotate: -8, scale: 0.88, opacity: 0.35 },
{ y: 0, rotate: 0, scale: 1, opacity: 1, duration: 0.8, ease: 'power3.out' }
);
}
});

const timer = window.setTimeout(() => setDone(true), 1200);

return () => {
window.clearTimeout(timer);
ctx.revert();
};
}, []);

if (done) return null;

return (
<div className="pointer-events-none fixed inset-0 z-[80] flex items-center justify-center bg-white">
<div className="relative flex flex-col items-center gap-4">
<div
data-preloader-can
className="relative flex h-40 w-24 items-center justify-center rounded-[1.6rem] border border-purple-300 bg-gradient-to-b from-purple-100 via-purple-200 to-purple-300 shadow-[0_24px_80px_rgba(0,0,0,0.1)]"
>
<div className="absolute inset-x-0 top-5 h-10 bg-gradient-to-r from-transparent via-white/85 to-transparent opacity-70 blur-[1px]" />
<div className="absolute inset-x-4 bottom-6 h-16 rounded-b-[1.2rem] bg-gradient-to-b from-violet-700 to-violet-900" />
<div className="absolute left-5 top-8 h-16 w-2 rounded-full bg-purple-200/80 blur-[1px]" />
<div className="absolute bottom-4 left-1/2 h-4 w-12 -translate-x-1/2 rounded-full bg-black/20" />
</div>
<p className="text-center text-xs uppercase tracking-[0.4em] text-gray-500">Pouring the roster</p>
</div>
</div>
);
}
