"use client";

import { useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Check, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { talents } from '@/lib/data';
import { formatCurrency } from '@/lib/utils';

const bookingSchema = z.object({
  eventName: z.string().min(2, 'Enter the event name.'),
  eventType: z.string().min(2, 'Select an event type.'),
  talentNeed: z.string().min(2, 'Describe the talent need.'),
  budget: z.string().min(1, 'Set a budget.'),
  city: z.string().min(2, 'Enter the city.'),
  date: z.string().min(1, 'Choose a date.'),
  time: z.string().min(1, 'Choose a time.'),
  company: z.string().min(2, 'Enter your company.'),
  name: z.string().min(2, 'Enter your name.'),
  email: z.string().email('Enter a valid email.'),
  phone: z.string().min(8, 'Enter a phone number.'),
  notes: z.string().optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

const steps = [
  { title: 'Event Details', fields: ['eventName', 'eventType', 'city', 'date', 'time'] as const },
  { title: 'Talent Requirements', fields: ['talentNeed', 'budget'] as const },
  { title: 'Logistics', fields: ['company', 'notes'] as const },
  { title: 'Contact Info', fields: ['name', 'email', 'phone'] as const },
  { title: 'Review & Submit', fields: [] as const },
];

export function BookingWizard() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const { register, handleSubmit, trigger, watch, formState: { errors } } = useForm<BookingValues>({ resolver: zodResolver(bookingSchema), defaultValues: { budget: '15000' } });

  const progress = useMemo(() => ((step + 1) / steps.length) * 100, [step]);
  const values = watch();

  const next = async () => {
    const fields = steps[step].fields as readonly (keyof BookingValues)[];
    const valid = fields.length ? await trigger(fields) : true;
    if (!valid) return;
    setStep((current) => Math.min(current + 1, steps.length - 1));
  };

  const back = () => setStep((current) => Math.max(current - 1, 0));

  const submit = async (formValues: BookingValues) => {
    setStatus('submitting');
    const response = await fetch('/api/bookings', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formValues),
    });

    if (response.ok) {
      setSubmitted(true);
      setStatus('idle');
      return;
    }

    setStatus('error');
  };

  if (submitted) {
    return (
      <div className="rounded-[2rem] border border-yellow-300/30 bg-white/10 p-8 text-center text-white shadow-glass backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-yellow-400 text-white shadow-glow">
          <Check className="h-8 w-8" />
        </div>
        <h3 className="mt-6 font-display text-3xl font-black">Booking request received</h3>
        <p className="mt-3 text-sm leading-7 text-white/70">We’ve got your details and will follow up with a shortlist and next steps shortly.</p>
      </div>
    );
  }

  return (
    <form className="space-y-6 rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-glass backdrop-blur-xl sm:p-8" onSubmit={handleSubmit(submit)}>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-white/60">
          <span>{steps[step].title}</span>
          <span>{step + 1}/{steps.length}</span>
        </div>
        <div className="h-2 rounded-full bg-white/10">
          <div className="h-full rounded-full bg-gradient-to-r from-red-500 via-yellow-300 to-red-500 transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {step === 0 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Event name" error={errors.eventName?.message}><input {...register('eventName')} className="input-style" placeholder="Coke Can Launch Night" /></Field>
          <Field label="Event type" error={errors.eventType?.message}><input {...register('eventType')} className="input-style" placeholder="Launch / Awards / Summit" /></Field>
          <Field label="City" error={errors.city?.message}><input {...register('city')} className="input-style" placeholder="Mumbai" /></Field>
          <Field label="Date" error={errors.date?.message}><input type="date" {...register('date')} className="input-style" /></Field>
          <Field label="Time" error={errors.time?.message}><input type="time" {...register('time')} className="input-style" /></Field>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Talent need" error={errors.talentNeed?.message}><input {...register('talentNeed')} className="input-style" placeholder="Host + DJ + 2 creators" /></Field>
          <Field label="Budget" error={errors.budget?.message}>
            <select {...register('budget')} className="input-style">
              {[7500, 15000, 25000, 50000].map((amount) => <option key={amount} value={String(amount)}>{formatCurrency(amount)}</option>)}
            </select>
          </Field>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-4">
          <Field label="Company" error={errors.company?.message}><input {...register('company')} className="input-style" placeholder="Aster Retail" /></Field>
          <Field label="Notes" error={errors.notes?.message}><textarea {...register('notes')} className="input-style resize-none" rows={6} placeholder="Usage terms, travel, technical notes, and any must-haves." /></Field>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <Field label="Name" error={errors.name?.message}><input {...register('name')} className="input-style" placeholder="Maya Deshpande" /></Field>
          <Field label="Email" error={errors.email?.message}><input {...register('email')} className="input-style" placeholder="maya@aster.com" /></Field>
          <Field label="Phone" error={errors.phone?.message}><input {...register('phone')} className="input-style" placeholder="+91 98765 43210" /></Field>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="grid gap-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-5 text-sm text-white/75">
          <Summary label="Event" value={values.eventName || 'Not set'} />
          <Summary label="Need" value={values.talentNeed || 'Not set'} />
          <Summary label="Budget" value={values.budget ? formatCurrency(Number(values.budget)) : 'Not set'} />
          <Summary label="Contact" value={values.name || 'Not set'} />
        </div>
      ) : null}

      {status === 'error' ? <p className="text-sm text-red-200">Submission failed. Please retry.</p> : null}

      <div className="flex items-center justify-between gap-3 pt-2">
        <button type="button" onClick={back} disabled={step === 0} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-3 text-sm font-semibold text-white disabled:opacity-40">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        {step < steps.length - 1 ? (
          <button type="button" onClick={next} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 px-5 py-3 text-sm font-semibold text-white">
            Next <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button type="submit" disabled={status === 'submitting'} className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 px-5 py-3 text-sm font-semibold text-white disabled:opacity-60">
            <Sparkles className="h-4 w-4" /> {status === 'submitting' ? 'Submitting...' : 'Submit request'}
          </button>
        )}
      </div>
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

function Summary({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
      <span className="text-xs uppercase tracking-[0.24em] text-white/50">{label}</span>
      <span className="text-right text-white">{value}</span>
    </div>
  );
}
