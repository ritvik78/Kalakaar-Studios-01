import type { Metadata } from 'next';
import { galleryItems } from '@/lib/data';
import { StandardPage } from '@/components/content-page';
import { GalleryGrid } from '@/components/gallery-grid';

export const metadata: Metadata = { title: 'Gallery' };

export default function GalleryPage() {
  return (
    <StandardPage eyebrow="Gallery" title="A visual archive with reflective depth." description="Open editorial moments, live setups, and campaign frames in a layout tuned for premium browsing." image={galleryItems[0]?.image}>
      <GalleryGrid items={galleryItems} />
    </StandardPage>
  );
}
