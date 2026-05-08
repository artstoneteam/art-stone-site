import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bathrooms",
};

const repairServices = [
  "Heat damage restoration",
  "Scratch removal and resurfacing",
  "Uneven joint correction",
  "Stain removal from acid and bleach",
  "Stone and concrete floor repair",
  "Chip and crack filling",
];

export default function BathroomsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Bathrooms
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            We are proficient in crafting and repairing all aspects of your
            bathroom aesthetics, transforming ordinary spaces into luxurious
            retreats.
          </p>
        </div>
      </section>

      {/* Transform Section */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Luxury Bathroom Spaces
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-300">
              Our team transforms bathrooms into luxury spaces, whether your
              taste leans toward minimalist elegance or lavish opulence. From
              vanity tops to shower niches, every surface is crafted to the
              highest standard.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              We work with a variety of natural and engineered stones to create
              bathroom environments that are as durable as they are beautiful,
              standing up to daily use while maintaining their stunning
              appearance.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-12 flex items-center justify-center min-h-[300px]">
            <span className="text-zinc-600 text-sm">Image placeholder</span>
          </div>
        </div>
      </section>

      {/* Repair Services */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Expert Repairs
          </h2>
          <p className="mt-6 max-w-2xl leading-relaxed text-zinc-300">
            Our team handles heat damage, scratches, uneven joints, and stains
            from acid or bleach with expert precision. Our repairs are often
            invisible to the naked eye, restoring your surfaces to their
            original beauty.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {repairServices.map((service) => (
              <div
                key={service}
                className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c8a96e]/10">
                  <svg
                    className="h-4 w-4 text-[#c8a96e]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="text-sm text-zinc-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floor Repair */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Stone &amp; Concrete Floor Repair
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-300">
              Stone and concrete floor repair offers an affordable alternative to
              full replacement. Our skilled technicians can restore cracked,
              chipped, or stained floors to like-new condition at a fraction of
              the cost.
            </p>
          </div>
          <div className="rounded-2xl border border-[#c8a96e]/20 bg-[#c8a96e]/5 p-8">
            <h3 className="font-serif text-xl font-semibold text-[#c8a96e]">
              Sustainability Focus
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">
              We believe in repairs over replacements wherever possible. By
              restoring existing surfaces rather than discarding them, we reduce
              waste and the environmental impact of quarrying and manufacturing
              new materials. It&apos;s better for your wallet and the planet.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-[#c8a96e] px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-[#b89a5e]"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
