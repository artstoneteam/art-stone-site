import type { Metadata } from 'next'
import { StonePage } from '@/components/stone-page'

export const metadata: Metadata = { title: 'Granite' }

export default function GranitePage() {
  return (
    <StonePage
      title="Granite."
      subtitle="Natural Granite Benchtops"
      descriptions={[
        'Granite is renowned for its beauty and strength which makes it incredibly versatile. Whether you need a kitchen benchtop, splashback, bathroom vanity or tile, granite adds style, value and luxurious sophistication to any home.',
        'With a rich variation of stone textures and colors similar to natural marble, granite is one of the most durable stone materials available. It provides long-lasting service with just reasonable care and maintenance.',
      ]}
      note="Natural granite is a heavier material compared to artificial and engineered stone, so the strength of cabinets must be considered."
      applications={['Kitchen Benchtops', 'Splashbacks', 'Bathroom Vanities', 'Floor Tiles']}
      heroImage="/images/gallery/granite-full-natural.jpg"
    />
  )
}
