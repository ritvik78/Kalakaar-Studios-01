import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  eventName: z.string().min(2),
  eventType: z.string().min(2),
  talentNeed: z.string().min(2),
  budget: z.string().min(1),
  city: z.string().min(2),
  date: z.string().min(1),
  time: z.string().min(1),
  company: z.string().min(2),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  notes: z.string().optional(),
});

export async function POST(request: Request) {
  const result = schema.safeParse(await request.json());
  if (!result.success) {
    return NextResponse.json({ message: 'Invalid booking' }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
