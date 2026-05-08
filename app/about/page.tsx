import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

const reasons = [
  {
    title: "Budget & Time-Conscious",
    description:
      "We take on projects of any size, managing budgets and timelines with equal care whether it's a small repair or a full renovation.",
  },
  {
    title: "Full Responsibility",
    description:
      "We handle every stage of the process: measuring, manufacturing, and installation. One team, one point of contact, one standard of quality.",
  },
  {
    title: "FREE Quotes Nationwide",
    description:
      "We provide free, no-obligation quotes even if you're outside Auckland. No matter your location, we're happy to discuss your project.",
  },
  {
    title: "Fair & Transparent Pricing",
    description:
      "Our pricing is fair with no hidden fees. We respect your property, leaving every site clean and tidy after every visit.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            About us.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Expert stonemasons in Auckland, specialising in bathroom and kitchen
            benchtops, fireplaces, and custom residential projects.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-16 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Crafting Stone, Building Trust
            </h2>
            <p className="mt-6 leading-relaxed text-zinc-300">
              Art Stone is a team of dedicated stonemasons based in Auckland, New
              Zealand. We specialise in crafting and installing premium stone
              surfaces for bathrooms, kitchens, fireplaces, and bespoke
              residential projects.
            </p>
            <p className="mt-4 leading-relaxed text-zinc-400">
              We proudly serve designers, cabinet makers, and builders,
              providing the expert stone fabrication and installation services
              they need to bring their projects to life. Our collaborative
              approach ensures seamless integration with your wider project team.
            </p>
          </div>
          <div className="relative rounded-2xl overflow-hidden min-h-[300px]">
            <Image
              src="/images/about/showroom.jpg"
              alt="Art Stone showroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Art Stone */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Why Choose Art Stone
          </h2>
          <p className="mt-4 text-zinc-400">
            We combine traditional craftsmanship with modern precision to deliver
            results that exceed expectations.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#c8a96e]/10 font-serif text-lg font-bold text-[#c8a96e]">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-serif text-xl font-semibold">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Ready to Start Your Project?
          </h2>
          <p className="mt-4 text-zinc-400">
            Get in touch for a free, no-obligation quote.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-[#c8a96e] px-8 py-4 text-sm font-medium text-black transition-colors hover:bg-[#b89a5e]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
