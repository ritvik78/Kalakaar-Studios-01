import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  const result = schema.safeParse(await request.json());
  if (!result.success) {
    return NextResponse.json({ message: 'Invalid email' }, { status: 400 });
  }

  return NextResponse.json({ ok: true });
}
