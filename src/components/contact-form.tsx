"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactReasons } from '@/lib/data';

const contactSchema = z.object({
  name: z.string().min(2, 'Enter your name.'),
  email: z.string().email('Enter a valid email.'),
  company: z.string().min(2, 'Enter your company.'),
  reason: z.string().min(1, 'Select a reason.'),
  message: z.string().min(20, 'Add a little more detail.'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('submitting');
    const response = await fetch('/api/contact', {
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
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" error={errors.name?.message}><input {...register('name')} className="input-style" /></Field>
        <Field label="Email" error={errors.email?.message}><input {...register('email')} className="input-style" /></Field>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Company" error={errors.company?.message}><input {...register('company')} className="input-style" /></Field>
        <Field label="Reason" error={errors.reason?.message}>
          <select {...register('reason')} className="input-style">
            <option value="">Select a reason</option>
            {contactReasons.map((reason) => <option key={reason} value={reason}>{reason}</option>)}
          </select>
        </Field>
      </div>
      <Field label="Message" error={errors.message?.message}>
        <textarea {...register('message')} rows={6} className="input-style resize-none" placeholder="Tell us about the event, campaign, or roster you need." />
      </Field>
      <button type="submit" disabled={status === 'submitting'} className="rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.01] disabled:opacity-60">
        {status === 'submitting' ? 'Sending...' : 'Send inquiry'}
      </button>
      {status === 'success' ? <p className="text-sm text-yellow-200">Inquiry received. We’ll reply with next steps soon.</p> : null}
      {status === 'error' ? <p className="text-sm text-red-200">The request failed. Please try again.</p> : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-2">
      <span className="text-xs uppercase tracking-[0.24em] text-white/60">{label}</span>
      {children}
      {error ? <span className="text-xs text-red-200">{error}</span> : null}
    </label>
  );
}
