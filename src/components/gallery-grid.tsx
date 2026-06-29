"use client";

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import { GalleryItem } from '@/lib/data';
import { GlassCard } from './ui';

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <>
      <div className="columns-1 gap-4 space-y-4 md:columns-2 xl:columns-3">
        {items.map((item) => (
          <button key={item.title} type="button" onClick={() => setSelected(item)} className="block w-full break-inside-avoid text-left">
            <GlassCard className="overflow-hidden p-0">
              <div className="relative aspect-[4/5]">
                <Image src={item.image} alt={item.title} fill className="object-cover object-center transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-[#1a1a1a]">
                  <p className="text-xs uppercase tracking-[0.26em] text-red-600 font-medium">{item.category}</p>
                  <h3 className="mt-2 font-display text-2xl font-black">{item.title}</h3>
                  <p className="mt-2 text-sm text-gray-700">{item.caption}</p>
                </div>
              </div>
            </GlassCard>
          </button>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[90] flex items-center justify-center bg-white/80 p-4 backdrop-blur-xl" onClick={() => setSelected(null)}>
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-yellow-300 bg-white shadow-[0_25px_100px_rgba(0,0,0,0.1)]" onClick={(event) => event.stopPropagation()}>
            <button type="button" onClick={() => setSelected(null)} className="absolute right-4 top-4 z-10 rounded-full border border-yellow-300 bg-yellow-100 p-2 text-[#1a1a1a] backdrop-blur-md">
              <X className="h-5 w-5" />
            </button>
            <div className="relative aspect-[16/9]">
              <Image src={selected.image} alt={selected.title} fill className="object-cover object-center" />
            </div>
            <div className="p-6 text-[#1a1a1a]">
              <p className="text-xs uppercase tracking-[0.28em] text-red-600 font-medium">{selected.category}</p>
              <h3 className="mt-3 font-display text-3xl font-black">{selected.title}</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-700">{selected.caption}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
