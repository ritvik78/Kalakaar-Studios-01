"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';
import { Testimonial } from '@/lib/data';
import { GlassCard } from './ui';

export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % testimonials.length), 4200);
    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[index];

  return (
    <GlassCard className="grid gap-6 p-6 lg:grid-cols-[0.7fr_1fr] lg:p-8">
      <div className="relative min-h-[18rem] overflow-hidden rounded-[1.4rem] border border-yellow-300">
        <Image src={current.image} alt={current.author} fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,254,249,0.1),rgba(255,254,249,0.88))]" />
        <div className="absolute inset-x-4 bottom-4 rounded-[1rem] border border-yellow-300 bg-white/90 p-4 backdrop-blur-xl shadow-sm">
          <p className="text-xs uppercase tracking-[0.24em] text-red-600 font-medium">{current.company}</p>
          <h3 className="mt-2 font-display text-3xl font-black text-[#1a1a1a]">{current.author}</h3>
          <p className="text-sm text-gray-600">{current.title}</p>
        </div>
      </div>

      <div className="flex flex-col justify-between gap-6">
        <div>
          <Quote className="h-10 w-10 text-red-600" />
          <p className="mt-5 text-xl leading-9 text-[#1a1a1a] sm:text-2xl">{current.quote}</p>
        </div>

        <div className="flex gap-2">
          {testimonials.map((item, itemIndex) => (
            <button
              key={item.author}
              type="button"
              aria-label={`Show testimonial ${itemIndex + 1}`}
              onClick={() => setIndex(itemIndex)}
              className={`h-2.5 rounded-full transition-all ${itemIndex === index ? 'w-10 bg-red-600' : 'w-2.5 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
