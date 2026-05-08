import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services",
};

const services = [
  {
    title: "Bathrooms",
    href: "/bathrooms",
    description:
      "Looking to amplify the functionality and aesthetic appeal of your bathroom? Consider our bathroom benchtop services.",
    detail:
      "Our bathroom benchtops provide functional platforms that enhance your daily grooming space while boosting style. From vanity tops to shower shelves, we craft surfaces that combine durability with elegance, transforming your bathroom into a personal sanctuary.",
  },
  {
    title: "Kitchen Benchtops",
    href: "/kitchen-benchtops",
    description:
      "Kitchen benchtops extend beyond mere functionality; they stand as the centerpiece, adding a touch of elegance to any kitchen.",
    detail:
      "We combine practicality with aesthetic appeal, delivering benchtops that serve as the heart of your kitchen. Whether you prefer the timeless beauty of natural stone or the consistency of engineered materials, we have the expertise to bring your vision to life.",
  },
  {
    title: "Fireplaces",
    href: "/fireplaces",
    description:
      "Stone fireplaces serve as an elegant centerpiece in any home, lending a classic, rustic appeal.",
    detail:
      "Our restoration and revamp services breathe new life into existing fireplaces or create stunning new installations. We work with a range of natural and engineered stones to craft fireplaces that become the focal point of any room.",
  },
];

const processingServices = [
  {
    title: "Cutting",
    description:
      "Precision cutting of stone slabs to exact specifications using state-of-the-art CNC machinery and diamond-tipped tools.",
  },
  {
    title: "Drilling",
    description:
      "Expert drilling for tap holes, power outlets, and custom cutouts with clean, chip-free edges every time.",
  },
  {
    title: "Polishing",
    description:
      "Professional polishing to restore or enhance the natural lustre of your stone surfaces, from matte honed to mirror-gloss finishes.",
  },
  {
    title: "Repair",
    description:
      "Skilled repair of chips, cracks, stains, and surface damage using colour-matched fillers and professional-grade sealants.",
  },
];

export default function OurServicesPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-20 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Our services.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            From bespoke kitchen benchtops to luxurious bathroom surfaces and
            stunning fireplaces, Art Stone delivers expert craftsmanship across
            every project.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-8 transition-all duration-300 hover:border-[#c8a96e]/50 hover:bg-zinc-900"
            >
              <h2 className="font-serif text-2xl font-semibold text-[#c8a96e]">
                {service.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                {service.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                {service.detail}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#c8a96e] transition-transform duration-200 group-hover:translate-x-1">
                Learn more
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Stone Processing */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Stone Processing
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Our workshop is equipped with the latest stone processing technology,
            allowing us to deliver precision results across every stage of
            fabrication.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processingServices.map((item) => (
              <div key={item.title} className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#c8a96e]/10">
                  <div className="h-2 w-2 rounded-full bg-[#c8a96e]" />
                </div>
                <h3 className="font-serif text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
