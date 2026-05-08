import Image from 'next/image'
import Link from 'next/link'

interface StonePageProps {
  title: string
  subtitle?: string
  descriptions: string[]
  note?: string
  features?: { title: string; text: string }[]
  varieties?: string[]
  applications?: string[]
  finishes?: { name: string; detail: string }[]
  heroImage?: string
}

export function StonePage({
  title,
  subtitle,
  descriptions,
  note,
  features,
  varieties,
  applications,
  finishes,
  heroImage,
}: StonePageProps) {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {heroImage ? (
          <>
            <Image src={heroImage} alt={title} fill className="object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </>
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1c1810]" />
          </>
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0f0f0f]" />
        <div className="relative mx-auto max-w-5xl px-6 pb-20 pt-32 sm:px-8 lg:px-12">
          <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-lg text-[#c8a96e] sm:text-xl">{subtitle}</p>
          )}
          <div className="mt-8 max-w-2xl space-y-5">
            {descriptions.map((p, i) => (
              <p key={i} className="text-base leading-relaxed text-white/60 sm:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Note */}
      {note && (
        <section className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-12">
          <div className="border border-[#c8a96e]/30 bg-[#1a1a1a] p-6">
            <p className="text-sm leading-relaxed text-white/50">
              <span className="mr-2 font-semibold text-[#c8a96e]">Note:</span>
              {note}
            </p>
          </div>
        </section>
      )}

      {/* Applications */}
      {applications && applications.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Applications</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {applications.map((app) => (
              <div
                key={app}
                className="group border border-white/10 bg-[#1a1a1a] p-6 transition-colors hover:border-[#c8a96e]/50"
              >
                <h3 className="font-serif text-lg transition-colors group-hover:text-[#c8a96e]">
                  {app}
                </h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      {features && features.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">Key Benefits</h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="space-y-2">
                <h3 className="text-lg font-medium text-[#c8a96e]">{f.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{f.text}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Finishes */}
      {finishes && finishes.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Available Finishes
          </h2>
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {finishes.map((f) => (
              <div key={f.name} className="border border-white/10 bg-[#1a1a1a] p-6">
                <h3 className="font-serif text-xl">{f.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">{f.detail}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Varieties */}
      {varieties && varieties.length > 0 && (
        <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8 lg:px-12">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Featured Varieties
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {varieties.map((v) => (
              <div
                key={v}
                className="group border border-white/10 bg-[#1a1a1a] p-6 transition-colors hover:border-[#c8a96e]/50"
              >
                <h3 className="font-serif text-lg transition-colors group-hover:text-[#c8a96e]">
                  {v}
                </h3>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="bg-gradient-to-br from-[#1a1a1a] to-[#1c1810] p-10 text-center sm:p-14">
          <h2 className="font-serif text-3xl tracking-tight sm:text-4xl">
            Get a Free Quote
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-white/50">
            Interested in {title.replace('.', '')} for your next project? Contact us
            for a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-[#c8a96e] px-8 py-3 text-sm font-medium tracking-wide text-black transition-colors hover:bg-[#b8994e]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
