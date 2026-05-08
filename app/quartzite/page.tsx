import type { Metadata } from 'next'
import { StonePage } from '@/components/stone-page'

export const metadata: Metadata = { title: 'Quartzite' }

export default function QuartzitePage() {
  return (
    <StonePage
      title="Quartzite."
      descriptions={[
        'Quartzite is renowned for its striking quartz grains that shimmer in light, delivering a unique sparkle to kitchen or bathroom surfaces.',
        'Our quartzite collection offers exceptional qualities combining strength and durability with spectacular style, suitable for benchtops and splashbacks.',
      ]}
      finishes={[
        { name: 'Polished', detail: 'Marble-like smoothness in white, grey, and silver tones for a refined, elegant look.' },
        { name: 'Matte Textured', detail: 'Warm beiges, macadamia nut, and golden sandstone shades for a natural, tactile finish.' },
      ]}
      varieties={['Tundra Grey', 'Invisible White', 'Verde Tinos']}
      heroImage="/images/gallery/granite-grey-waterfall.jpg"
    />
  )
}
