import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kitchen Benchtops",
};

const materials = [
  { name: "Marble", href: "/marble" },
  { name: "Granite", href: "/granite" },
  { name: "Porcelain", href: "/porcelain" },
  { name: "Engineered Stone", href: "/engineered-stone" },
  { name: "Quartzite", href: "/quartzite" },
];

export default function KitchenBenchtopsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Kitchen Benchtops
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            We provide high-quality kitchen benchtop services using natural and
            engineered stone materials, delivering exceptional results for homes
            across New Zealand.
          </p>
        </div>
      </section>

      {/* Seamless Craftsmanship */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Seamless Craftsmanship in Benchtops
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-300">
              Our meticulous joint work ensures that every benchtop appears as if
              it&apos;s hewn from one massive, unbroken piece of stone. Each seam
              is carefully aligned, colour-matched, and polished to create a
              surface of uninterrupted beauty.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              We achieve exceptional quality through careful material sourcing,
              selecting only the finest slabs from trusted suppliers. Every piece
              is inspected for consistency in colour, veining, and structural
              integrity before it enters our workshop.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-12 flex items-center justify-center min-h-[300px]">
            <span className="text-zinc-600 text-sm">Image placeholder</span>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Serving All of New Zealand
              </h2>
              <p className="mt-6 leading-relaxed text-zinc-300">
                Our services extend beyond Auckland. No matter where you are in
                New Zealand, we offer a FREE quote regardless of location. We
                are committed to delivering exceptional quality of workmanship at
                affordable rates.
              </p>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Whether you&apos;re renovating a suburban home in Wellington or
                building a new kitchen in Queenstown, our team is ready to
                deliver the same precision and quality we&apos;re known for in
                Auckland.
              </p>
            </div>
            <div className="rounded-2xl border border-[#c8a96e]/20 bg-[#c8a96e]/5 p-8">
              <h3 className="font-serif text-xl font-semibold text-[#c8a96e]">
                Free Quote
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Contact us for a no-obligation, FREE quote on your kitchen
                benchtop project. We pride ourselves on fair, transparent pricing
                with no hidden fees.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-block rounded-full bg-[#c8a96e] px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-[#b89a5e]"
              >
                Get Your Free Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Material Options */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Material Options
          </h2>
          <p className="mt-4 text-zinc-400">
            Choose from a wide selection of premium stone materials, each with
            its own unique character and benefits.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {materials.map((material) => (
              <Link
                key={material.name}
                href={material.href}
                className="group rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center transition-all duration-300 hover:border-[#c8a96e]/50 hover:bg-zinc-900"
              >
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800" />
                <h3 className="font-serif text-lg font-semibold transition-colors group-hover:text-[#c8a96e]">
                  {material.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
