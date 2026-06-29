import type { Metadata } from 'next';
import { Montserrat, Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';
import { SiteHeader } from '@/components/site-header';
import { SiteFooter } from '@/components/site-footer';
import { GlobalEffects } from '@/components/global-effects';
import { Preloader } from '@/components/preloader';

const display = Montserrat({ subsets: ['latin'], variable: '--font-display' });
const body = Inter({ subsets: ['latin'], variable: '--font-body' });
const accent = Bebas_Neue({ subsets: ['latin'], variable: '--font-accent', weight: '400' });

export const metadata: Metadata = {
  metadataBase: new URL('https://kalakaarstudios.local'),
  title: {
    default: 'Kalakaar Studios',
    template: '%s | Kalakaar Studios',
  },
  description: 'Premium talent management and booking with a glossy Diet Coke-inspired visual system.',
  applicationName: 'Kalakaar Studios',
  generator: 'Next.js',
  openGraph: {
    title: 'Kalakaar Studios',
    description: 'Premium talent management and booking with a glossy Diet Coke-inspired visual system.',
    type: 'website',
    url: '/',
    images: [{ url: '/og-image.svg', width: 1200, height: 630, alt: 'Kalakaar Studios' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kalakaar Studios',
    description: 'Premium talent management and booking with a glossy Diet Coke-inspired visual system.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${accent.variable}`}>
      <body className="font-body">
        <Preloader />
        <GlobalEffects />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
