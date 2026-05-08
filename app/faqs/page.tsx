"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "How much will my project cost?",
    answer:
      "We provide a FREE on-site estimate for every project. The final cost depends on several factors including the material chosen, thickness of the stone, shape complexity, and overall size of the project. Contact us and we'll be happy to visit your site and provide a detailed, no-obligation quote.",
  },
  {
    question: "Where can I see stone samples?",
    answer:
      "We can bring stone samples directly to your location so you can see how they look in your space and lighting conditions. Alternatively, you are welcome to visit our partner showrooms to browse a wider range of materials in person.",
  },
  {
    question: "Marble, granite, or quartz? Which is more durable?",
    answer:
      "The most suitable material depends on your intended use. Each stone type has its own strengths. Granite is extremely hard and heat-resistant. Marble offers unmatched natural beauty. Quartz provides excellent consistency and low maintenance. All three provide long-lasting service with proper care and maintenance.",
  },
  {
    question: "How do you repair benchtops?",
    answer:
      "Our repair process involves thorough surface preparation, application of specialized filling compounds, precise pattern and colour matching to blend seamlessly with the existing stone, and finally professional sealing to protect the repair and surrounding area.",
  },
  {
    question: "Can you make a cut-out for my new hob?",
    answer:
      "Yes, we offer precise cut-outs for hobs, sinks, tap holes, and other fixtures. Our CNC machinery and experienced craftspeople ensure clean, accurate cuts that fit your appliances perfectly.",
  },
  {
    question: "Can you repair engineered stone?",
    answer:
      "Yes, we specialise in repairing engineered stone surfaces. We can address chips, cracks, stains, screw holes, and other damage, restoring your engineered stone benchtop to its original appearance.",
  },
  {
    question: "Damage at the edge — can it be repaired?",
    answer:
      "Absolutely. Our team has the skills for virtually any repair, including edge and corner damage. We carefully rebuild and reshape damaged edges to match the original profile, resulting in a repair that is seamless and durable.",
  },
  {
    question: "How long do repairs take?",
    answer:
      "Repair duration varies depending on the extent of the damage and the type of repair required. Most repairs can be completed in a single visit. The final seal typically takes approximately 2 hours to dry, after which the surface is ready for normal use.",
  },
  {
    question: "Why should I get a repair?",
    answer:
      "Repairing damaged stone surfaces restores aesthetic appeal and ease of use. Beyond appearance, repairs are important for hygiene — bacteria can accumulate in cracks and chips, creating an unsanitary surface. A smooth, sealed surface is easier to clean and safer for food preparation.",
  },
  {
    question: "Will the chip/crack be invisible after repair?",
    answer:
      "For damage under 5mm, the repair is almost always invisible to the naked eye. For larger repairs, while the result may not be perfectly invisible, the repaired area will look significantly better than the damage and will be structurally sound and hygienic.",
  },
];

function FAQItem({ faq, index }: { faq: FAQ; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-800">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-[#c8a96e]"
      >
        <span className="flex items-center gap-4 pr-4">
          <span className="text-sm text-zinc-600 font-mono">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-serif text-lg font-medium">{faq.question}</span>
        </span>
        <svg
          className={`h-5 w-5 shrink-0 text-[#c8a96e] transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="pl-10 text-sm leading-relaxed text-zinc-400">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-zinc-400">
            Everything you need to know about our stone fabrication, repair, and
            installation services.
          </p>
        </div>
      </section>

      {/* FAQ List */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
