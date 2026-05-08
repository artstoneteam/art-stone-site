import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Budget & Time',
    description:
      'We work within your budget and time frame. Our team handles projects of any scale, from a simple benchtop replacement to a complete kitchen redesign.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Free Quotes',
    description:
      'FREE quotes available, even if you live outside of Auckland. No hidden fees or obligations — just honest, upfront estimates.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Fair Pricing',
    description:
      'What you see in the quote is what you pay for. The cost will not be changed at the end of the project. No surprises, no hidden charges.',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: 'Respectful Service',
    description:
      'We treat your property with the utmost respect and minimize dust despite the nature of stonework. Your home stays clean.',
  },
]

export function WhyChoose() {
  return (
    <section className="py-24 px-4 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        {/* Image banner */}
        <div className="relative h-64 md:h-80 mb-16 overflow-hidden">
          <Image
            src="/images/services/why-choose.jpg"
            alt="Art Stone craftsmanship"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="font-serif text-3xl md:text-4xl text-center">
              Why Choose <span className="text-[#c8a96e]">Art Stone</span>
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 border border-white/10 hover:border-[#c8a96e]/30 transition-colors"
            >
              <div className="text-[#c8a96e] mb-4">{feature.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-3">
                {feature.title}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-block px-8 py-4 border border-[#c8a96e] text-[#c8a96e] hover:bg-[#c8a96e] hover:text-black transition-colors tracking-wide text-sm"
          >
            See what makes us unique
          </Link>
        </div>
      </div>
    </section>
  )
}
