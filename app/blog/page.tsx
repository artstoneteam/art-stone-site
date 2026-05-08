import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

const posts = [
  {
    title: "Choosing the Right Stone for Your Kitchen",
    date: "15 March 2024",
    excerpt:
      "A comprehensive guide to selecting the perfect stone material for your kitchen benchtop, considering durability, maintenance, and aesthetic appeal.",
    gradient: "from-amber-800/60 to-stone-900/60",
  },
  {
    title: "Marble vs Granite: A Complete Guide",
    date: "28 February 2024",
    excerpt:
      "Understanding the key differences between marble and granite — from composition and durability to cost and maintenance requirements.",
    gradient: "from-zinc-600/60 to-zinc-900/60",
  },
  {
    title: "Stone Maintenance Tips",
    date: "10 January 2024",
    excerpt:
      "Essential tips for keeping your natural and engineered stone surfaces looking their best for years to come, from daily care to annual sealing.",
    gradient: "from-emerald-800/60 to-zinc-900/60",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Blog
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Insights, guides, and inspiration from the Art Stone team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-6 pb-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:border-[#c8a96e]/30"
            >
              <div
                className={`flex h-48 items-end bg-gradient-to-br ${post.gradient} p-6`}
              >
                <span className="rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  Article
                </span>
              </div>
              <div className="p-6">
                <p className="text-xs text-zinc-500">{post.date}</p>
                <h2 className="mt-2 font-serif text-xl font-semibold leading-snug transition-colors group-hover:text-[#c8a96e]">
                  {post.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#c8a96e]">
                  Read more
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
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
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
