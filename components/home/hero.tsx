import Image from 'next/image'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/hero/hero-kitchen.jpg"
        alt="Art Stone kitchen with stone benchtops"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-[#0f0f0f]/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-[#c8a96e] tracking-[0.3em] uppercase text-sm mb-6 font-light">
          Professional Stonemasons
        </p>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-light mb-6 tracking-[0.2em]" style={{ fontFamily: 'var(--font-montserrat)' }}>
          ART STONE
          <span className="block text-[#c8a96e]">TEAM LTD.</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/70 mb-4 tracking-[0.15em] font-light">
          Kitchens &nbsp;|&nbsp; Bathrooms &nbsp;|&nbsp; Fireplaces
        </p>
        <p className="text-white/50 mb-10 max-w-xl mx-auto">
          High-end stone solutions for kitchen benchtops, fireplaces, and custom
          residential projects in Auckland and beyond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="px-8 py-4 bg-[#c8a96e] text-black font-semibold tracking-wide hover:bg-[#b8994e] transition-colors"
          >
            Get Free Quote
          </Link>
          <Link
            href="/our-services"
            className="px-8 py-4 border border-white/30 text-white font-semibold tracking-wide hover:border-[#c8a96e] hover:text-[#c8a96e] transition-colors"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white/40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}
