"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
email: z.string().email('Enter a valid email address.'),
});

type NewsletterFormValues = z.infer<typeof schema>;

export function NewsletterForm() {
const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterFormValues>({ resolver: zodResolver(schema) });

const onSubmit = async (values: NewsletterFormValues) => {
setStatus('submitting');
const response = await fetch('/api/newsletter', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify(values),
});

if (response.ok) {
setStatus('success');
reset();
return;
}

setStatus('error');
};

return (
<form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
<div>
<label className="text-xs uppercase tracking-[0.24em] text-white/60">Email</label>
<input
{...register('email')}
className="mt-2 w-full rounded-[1.2rem] border border-purple-300/40 bg-purple-900/40 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-violet-300/55"
placeholder="name@company.com"
/>
{errors.email ? <p className="mt-2 text-xs text-red-200">{errors.email.message}</p> : null}
</div>
<button type="submit" disabled={status === 'submitting'} className="group inline-flex items-center justify-center rounded-full border border-purple-300/40 bg-gradient-to-r from-purple-700 via-purple-500 to-violet-400 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:opacity-60">
<span className="relative">{status === 'submitting' ? 'Sending...' : 'Join newsletter'}</span>
</button>
{status === 'success' ? <p className="text-sm text-violet-200">You&apos;re on the list. Expect occasional premium updates.</p> : null}
{status === 'error' ? <p className="text-sm text-red-200">We couldn&apos;t send that just now. Try again in a moment.</p> : null}
</form>
);
}
