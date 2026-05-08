import { Hero } from '@/components/home/hero'
import { Intro } from '@/components/home/intro'
import { StoneTypes } from '@/components/home/stone-types'
import { ServicesGrid } from '@/components/home/services-grid'
import { WhyChoose } from '@/components/home/why-choose'
import { ContactSection } from '@/components/home/contact-section'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <StoneTypes />
      <ServicesGrid />
      <WhyChoose />
      <ContactSection />
    </>
  )
}
