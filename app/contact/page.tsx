"use client";

import { useState } from "react";

const contacts = [
  {
    name: "Tina",
    role: "Sales",
    phone: "+64 27 331 34 47",
    email: "tina@art-stone.co.nz",
  },
  {
    name: "Stefan",
    role: "Technical",
    phone: "+64 22 601 60 69",
    email: "stefan@art-stone.co.nz",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Hero */}
      <section className="px-6 pt-32 pb-12 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Contact us.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400">
            Get in touch for a free quote or to discuss your project. We&apos;re
            here to help.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 pb-16 md:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact) => (
            <div
              key={contact.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c8a96e]/10 font-serif text-sm font-bold text-[#c8a96e]">
                {contact.name[0]}
              </div>
              <h3 className="mt-4 font-serif text-lg font-semibold">
                {contact.name}
              </h3>
              <p className="text-sm text-[#c8a96e]">{contact.role}</p>
              <div className="mt-3 space-y-1">
                <a
                  href={`tel:${contact.phone.replace(/\s/g, "")}`}
                  className="block text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {contact.phone}
                </a>
                <a
                  href={`mailto:${contact.email}`}
                  className="block text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </div>
            </div>
          ))}

          {/* General Contact */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c8a96e]/10">
              <svg
                className="h-5 w-5 text-[#c8a96e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold">General</h3>
            <div className="mt-3 space-y-1">
              <a
                href="tel:+64224107269"
                className="block text-sm text-zinc-400 transition-colors hover:text-white"
              >
                +64 22 410 72 69
              </a>
              <a
                href="mailto:sales@art-stone.co.nz"
                className="block text-sm text-zinc-400 transition-colors hover:text-white"
              >
                sales@art-stone.co.nz
              </a>
            </div>
          </div>

          {/* Address */}
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c8a96e]/10">
              <svg
                className="h-5 w-5 text-[#c8a96e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 0115 0z"
                />
              </svg>
            </div>
            <h3 className="mt-4 font-serif text-lg font-semibold">Address</h3>
            <p className="mt-3 text-sm text-zinc-400">
              96 Hillside Road
              <br />
              Wairau Valley
              <br />
              Auckland
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="border-t border-zinc-800 px-6 py-24 md:px-12 lg:px-24">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Send Us a Message
          </h2>
          <p className="mt-4 text-zinc-400">
            Fill out the form below and we&apos;ll get back to you as soon as
            possible.
          </p>
          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-zinc-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#c8a96e] focus:ring-1 focus:ring-[#c8a96e]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-zinc-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#c8a96e] focus:ring-1 focus:ring-[#c8a96e]"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-zinc-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-2 w-full rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#c8a96e] focus:ring-1 focus:ring-[#c8a96e]"
                placeholder="Project enquiry"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-zinc-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="mt-2 w-full resize-none rounded-xl border border-zinc-800 bg-zinc-900/50 px-4 py-3 text-sm text-white placeholder-zinc-600 outline-none transition-colors focus:border-[#c8a96e] focus:ring-1 focus:ring-[#c8a96e]"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[#c8a96e] px-8 py-4 text-sm font-medium text-black transition-colors hover:bg-[#b89a5e] sm:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
