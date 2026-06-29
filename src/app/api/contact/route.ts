import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  reason: z.string().min(1),
  message: z.string().min(20),
});

export async function POST(request: Request) {
  const result = schema.safeParse(await request.json());
  if (!result.success) {
    return NextResponse.json({ message: 'Invalid submission' }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
