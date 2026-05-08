import type { Metadata } from 'next'
import { StonePage } from '@/components/stone-page'

export const metadata: Metadata = { title: 'Engineered Stone' }

export default function EngineeredStonePage() {
  return (
    <StonePage
      title="Engineered Stone."
      descriptions={[
        'Engineered stone is an incredibly convenient and practical surfacing material that offers beautiful aesthetics, low maintenance requirements while still delivering strong robust properties.',
        'Also called artificial stone, it is composed of natural quartz providing superior strength and resilience attributes against high impacts, stains and scratches.',
        'With a diverse color palette from elegant white marbles to luxe black plains, engineered stone is ideal for both contemporary and traditional kitchen designs.',
      ]}
      features={[
        { title: 'Beautiful Aesthetics', text: 'Wide color range to match any existing or new kitchen design perfectly.' },
        { title: 'Low Maintenance', text: 'Minimal upkeep required — simply wipe clean for lasting beauty.' },
        { title: 'Impact Resistant', text: 'Superior resilience against high impacts, ideal for busy households.' },
        { title: 'Scratch & Stain Proof', text: 'Engineered for resistance against everyday scratches and stains.' },
      ]}
      heroImage="/images/gallery/eng-grey.jpg"
    />
  )
}
