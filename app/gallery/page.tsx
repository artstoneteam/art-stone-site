"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "All" | "Marble" | "Granite" | "Engineered Stone";

interface GalleryItem {
  title: string;
  material: Category;
  year: number;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    title: "White Marble Benchtop",
    material: "Marble",
    year: 2020,
    image: "/images/gallery/marble-white.jpg",
  },
  {
    title: "Natural Marble Benchtop",
    material: "Marble",
    year: 2020,
    image: "/images/gallery/marble-natural.jpg",
  },
  {
    title: "Whitestone Marble with Waterfall Legs",
    material: "Marble",
    year: 2020,
    image: "/images/gallery/marble-waterfall.jpg",
  },
  {
    title: "Green Marble Benchtop",
    material: "Marble",
    year: 2020,
    image: "/images/gallery/marble-green.jpg",
  },
  {
    title: "Grey Engineering Stone Benchtop",
    material: "Engineered Stone",
    year: 2020,
    image: "/images/gallery/eng-grey.jpg",
  },
  {
    title: "Engineering Stone Kitchen",
    material: "Engineered Stone",
    year: 2020,
    image: "/images/gallery/eng-kitchen.jpg",
  },
  {
    title: "Dark Engineering Stone Benchtop",
    material: "Engineered Stone",
    year: 2020,
    image: "/images/gallery/eng-dark.jpg",
  },
  {
    title: "Grey Granite with Waterfall Leg",
    material: "Granite",
    year: 2020,
    image: "/images/gallery/granite-grey-waterfall.jpg",
  },
  {
    title: "Natural Granite Mixed Colours",
    material: "Granite",
    year: 2020,
    image: "/images/gallery/granite-natural-mixed.jpg",
  },
  {
    title: "Black and White Granite with Waterfall Legs",
    material: "Granite",
    year: 2020,
    image: "/images/gallery/granite-bw-waterfall.jpg",
  },
  {
    title: "Full Natural Granite Kitchen",
    material: "Granite",
    year: 2020,
    image: "/images/gallery/granite-full-natural.jpg",
  },
];

const categories: Category[] = ["All", "Marble", "Granite", "Engineered Stone"];

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.material === activeFilter);

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Our Portfolio.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            A selection of our recent projects showcasing craftsmanship across a
            range of stone materials and applications.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                activeFilter === category
                  ? "bg-[#c8a96e] text-black"
                  : "border border-zinc-700 text-zinc-400 hover:border-zinc-500 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-6xl grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-[#c8a96e]/30"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  {item.material}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg font-semibold leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-500">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
        {filteredItems.length === 0 && (
          <div className="mx-auto max-w-6xl py-12 text-center text-zinc-500">
            No projects found for this category.
          </div>
        )}
      </section>
    </div>
  );
}
