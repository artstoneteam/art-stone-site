import type { Metadata } from 'next'
import { StonePage } from '@/components/stone-page'

export const metadata: Metadata = { title: 'Marble' }

export default function MarblePage() {
  return (
    <StonePage
      title="Marble."
      descriptions={[
        'Natural stone will always look luxurious. It is impossible to ignore the natural pattern — countertops made of natural stone will always differ from each other since it is impossible to find two identical slabs in nature.',
        'The main characteristics of such work surfaces are stability, durability, and resistance to wear and mechanical damage.',
        'Marble can be shaped into almost any complicated form, making it suitable for kitchens with artistic elements and curved edges rather than simple straight lines.',
      ]}
      varieties={['Tundra Grey', 'Invisible White', 'Verde Tinos']}
      heroImage="/images/gallery/marble-white.jpg"
    />
  )
}
