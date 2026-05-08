import Image from 'next/image'
import Link from 'next/link'

const stones = [
  {
    name: 'Granite',
    href: '/granite',
    image: '/images/gallery/granite-full-natural.jpg',
    description: 'Renowned for beauty and incredible strength',
  },
  {
    name: 'Marble',
    href: '/marble',
    image: '/images/gallery/marble-white.jpg',
    description: 'Timeless luxury with natural patterns',
  },
  {
    name: 'Porcelain',
    href: '/porcelain',
    image: '/images/services/services-hero1.jpg',
    description: 'Stain-resistant with natural stone effects',
  },
  {
    name: 'Engineered Stone',
    href: '/engineered-stone',
    image: '/images/gallery/eng-grey.jpg',
    description: 'Beautiful aesthetics with low maintenance',
  },
  {
    name: 'Quartzite',
    href: '/quartzite',
    image: '/images/gallery/granite-grey-waterfall.jpg',
    description: 'Striking shimmer with exceptional durability',
  },
]

export function StoneTypes() {
  return (
    <section className="py-24 px-4 bg-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
          We work with the finest stone
        </h2>
        <p className="text-white/50 text-center mb-16">
          from around the world.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {stones.map((stone) => (
            <Link
              key={stone.name}
              href={stone.href}
              className="group relative aspect-[3/4] overflow-hidden border border-white/10 hover:border-[#c8a96e]/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <Image
                src={stone.image}
                alt={stone.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="relative z-10 h-full flex flex-col justify-end p-5">
                <h3 className="font-serif text-xl font-bold mb-1">
                  {stone.name}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed mb-3">
                  {stone.description}
                </p>
                <span className="text-[#c8a96e] text-xs tracking-widest uppercase group-hover:tracking-[0.2em] transition-all">
                  Explore →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
