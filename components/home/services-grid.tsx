import Image from 'next/image'
import Link from 'next/link'

const services = [
  {
    title: 'Kitchen Benchtops',
    href: '/kitchen-benchtops',
    image: '/images/hero/kitchen-benchtops.jpg',
  },
  {
    title: 'Bathrooms',
    href: '/bathrooms',
    image: '/images/services/bathroom.jpg',
  },
  {
    title: 'Fireplaces',
    href: '/fireplaces',
    image: '/images/services/fireplace.jpg',
  },
  {
    title: 'Stone Processing',
    subtitle: 'Cutting | Drilling | Polishing | Repair',
    href: '/our-services',
    image: '/images/services/stone-processing.jpg',
  },
]

export function ServicesGrid() {
  return (
    <section className="py-24 px-4 bg-[#111]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative h-72 overflow-hidden"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-2">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-white/60 text-sm mb-3">
                    {service.subtitle}
                  </p>
                )}
                <span className="text-[#c8a96e] text-sm tracking-widest uppercase">
                  View →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
