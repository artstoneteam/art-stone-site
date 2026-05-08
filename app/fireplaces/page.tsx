import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fireplaces",
};

const materials = [
  "Granite",
  "Marble",
  "Engineered Quartz",
  "Limestone",
];

export default function FireplacesPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Fireplaces
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Art Stone excels in the realm of stone-crafted fireplaces, creating
            bespoke designs that become the defining feature of any living space.
          </p>
        </div>
      </section>

      {/* Bespoke Designs */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Masterful Fireplace Craftsmanship
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-300">
              We create bespoke fireplace designs using granite, marble,
              engineered quartz, and limestone. Art Stone is one of only a
              handful of companies in New Zealand with this caliber of
              craftsmanship in stone fireplace fabrication.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              From modern minimalist surrounds to traditional intricate mantels,
              our fireplaces are designed to be focal points that exude luxury
              and warmth. Every installation is tailored to complement the
              architecture and interior design of your home.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-12 flex items-center justify-center min-h-[300px]">
            <span className="text-zinc-600 text-sm">Image placeholder</span>
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Premium Materials
          </h2>
          <p className="mt-4 text-zinc-400">
            We work with the finest natural and engineered stones to create
            fireplaces of enduring beauty.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {materials.map((material) => (
              <div
                key={material}
                className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 text-center"
              >
                <div className="mx-auto mb-4 h-20 w-20 rounded-full bg-gradient-to-br from-zinc-700 to-zinc-800" />
                <h3 className="font-serif text-lg font-semibold">
                  {material}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Styles */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
            <h3 className="font-serif text-2xl font-semibold text-[#c8a96e]">
              Modern Minimalist
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              Clean lines and understated elegance define our modern fireplace
              designs. Using large-format stone slabs with minimal joints, we
              create sleek surrounds that complement contemporary interiors.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8">
            <h3 className="font-serif text-2xl font-semibold text-[#c8a96e]">
              Traditional Intricate
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-zinc-400">
              For those who appreciate classical architecture, our traditional
              fireplace designs feature detailed carvings, ornate mantels, and
              timeless proportions that honour the heritage of stone masonry.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-5xl text-center">
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#c8a96e] px-8 py-4 text-sm font-medium text-black transition-colors hover:bg-[#b89a5e]"
          >
            Discuss Your Fireplace Project
          </Link>
        </div>
      </section>
    </div>
  );
}
