'use client'

import { useState } from 'react'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  return (
    <section className="py-24 px-4 bg-[#111]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
          Contact <span className="text-[#c8a96e]">us.</span>
        </h2>
        <p className="text-white/50 text-center mb-12 max-w-lg mx-auto">
          Free quote available, even outside Auckland. Easy to book stone
          projects with customizable details.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-[#c8a96e] text-sm uppercase tracking-widest mb-2">
                Phone
              </h3>
              <a
                href="tel:+64224107269"
                className="text-white/80 hover:text-white text-lg"
              >
                +64 22 410 7269
              </a>
            </div>
            <div>
              <h3 className="text-[#c8a96e] text-sm uppercase tracking-widest mb-2">
                Email
              </h3>
              <a
                href="mailto:sales@art-stone.co.nz"
                className="text-white/80 hover:text-white text-lg"
              >
                sales@art-stone.co.nz
              </a>
            </div>
            <div>
              <h3 className="text-[#c8a96e] text-sm uppercase tracking-widest mb-2">
                Address
              </h3>
              <p className="text-white/80 text-lg">
                96 Hillside Road
                <br />
                Wairau Valley, Auckland
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-4 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#c8a96e] focus:outline-none transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-4 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#c8a96e] focus:outline-none transition-colors"
            />
            <textarea
              placeholder="Message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-4 bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-[#c8a96e] focus:outline-none transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full p-4 bg-[#c8a96e] text-black font-semibold tracking-wide hover:bg-[#b8994e] transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
