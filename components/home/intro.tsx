import Link from 'next/link'

const services = [
  'Kitchen and bathroom stone benchtops',
  'Stone splashbacks',
  'Fireplaces',
  'Stone floor & walls',
  'Benchtop replacements',
  'Stone restoration & repair',
  'Concrete repair',
  'Kitchen & bathroom renovation',
  'Stone cutting & drilling',
]

export function Intro() {
  return (
    <section className="py-24 px-4 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center">
          Introducing <span className="text-[#c8a96e]">Art Stone.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left - description */}
          <div>
            <p className="text-white/70 text-lg leading-relaxed mb-6">
              We are stone specialists offering natural granite, marble,
              engineered quartz, limestone, and any other natural or polymer
              materials with stone appearance.
            </p>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              From a simple benchtop replacement to a complete kitchen and
              bathroom renovation, our team delivers exceptional craftsmanship
              with premium materials sourced from around the world.
            </p>
            <Link
              href="/our-services"
              className="inline-block px-6 py-3 border border-[#c8a96e] text-[#c8a96e] hover:bg-[#c8a96e] hover:text-black transition-colors tracking-wide text-sm"
            >
              Learn more
            </Link>
          </div>

          {/* Right - services grid */}
          <div className="grid grid-cols-1 gap-3">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 p-3 bg-white/5 border border-white/5 hover:border-[#c8a96e]/30 transition-colors"
              >
                <span className="w-2 h-2 bg-[#c8a96e] shrink-0" />
                <span className="text-white/80 text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
