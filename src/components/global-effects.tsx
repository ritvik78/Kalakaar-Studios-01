"use client";

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function GlobalEffects() {
const pathname = usePathname();
const [progress, setProgress] = useState(0);
const [showCursor, setShowCursor] = useState(false);
const [cursor, setCursor] = useState({ x: 0, y: 0 });

useEffect(() => {
const media = window.matchMedia('(pointer: fine)');
const updateMode = () => setShowCursor(media.matches);
updateMode();
media.addEventListener('change', updateMode);

const handleMove = (event: PointerEvent) => setCursor({ x: event.clientX, y: event.clientY });
const handleScroll = () => {
const max = document.documentElement.scrollHeight - window.innerHeight;
setProgress(max > 0 ? window.scrollY / max : 0);
};

window.addEventListener('pointermove', handleMove);
window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll();

return () => {
media.removeEventListener('change', updateMode);
window.removeEventListener('pointermove', handleMove);
window.removeEventListener('scroll', handleScroll);
};
}, []);

return (
<>
<div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-white/10">
<div className="h-full bg-gradient-to-r from-purple-400 via-violet-300 to-purple-400 transition-[width] duration-150" style={{ width: `${progress * 100}%` }} />
</div>

<AnimatePresence mode="wait">
<motion.div
key={pathname}
className="pointer-events-none fixed inset-0 z-[55] bg-gradient-to-br from-purple-700 via-violet-300 to-purple-400 opacity-0 mix-blend-screen"
initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0.42 }}
animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 0 }}
exit={{ opacity: 0 }}
transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
/>
</AnimatePresence>

{showCursor ? (
<motion.div
className="pointer-events-none fixed z-[70] hidden h-6 w-6 rounded-full border border-purple-400/70 bg-purple-400/10 shadow-[0_0_30px_rgba(147,51,234,0.45)] lg:block"
animate={{ x: cursor.x - 12, y: cursor.y - 12 }}
transition={{ type: 'spring', stiffness: 140, damping: 18, mass: 0.1 }}
/>
) : null}
</>
);
}
