import type { Metadata } from 'next'
import { StonePage } from '@/components/stone-page'

export const metadata: Metadata = { title: 'Porcelain' }

export default function PorcelainPage() {
  return (
    <StonePage
      title="Porcelain."
      descriptions={[
        'Porcelain is renowned for its stain-resistant properties and ability to recreate natural stone effects while still being incredibly strong, versatile and stylish.',
        'Available in a glossy finish similar to marble or a more textured matte surface, porcelain offers a color range from cool whites and greys to darker tones such as black velvet or monochrome.',
        'Select porcelain when choosing quality benchtops — discover why it should be your preferred choice for contemporary benchtops, splashbacks and tiles.',
      ]}
      features={[
        { title: 'Superior Strength', text: 'Incredibly strong and durable, built to last for years of heavy use.' },
        { title: 'Stain Resistant', text: 'Naturally resistant to stains, keeping your surfaces looking pristine.' },
        { title: 'Low Maintenance', text: 'Quick and simple to clean — no special products or sealing required.' },
        { title: 'Versatile Design', text: 'Wide range of colors and finishes to suit any kitchen or bathroom style.' },
      ]}
      heroImage="/images/services/services-hero1.jpg"
    />
  )
}
