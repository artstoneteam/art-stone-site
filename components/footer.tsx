import Link from 'next/link'

const links = [
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQ', href: '/faqs' },
]

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0a0a0a] px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <Link href="/" className="inline-block">
            <img src="/images/logo.png" alt="Art Stone" className="h-10 w-auto" />
          </Link>
          <p className="mt-4 text-white/40 text-sm leading-relaxed">
            Premium stone solutions for kitchens, bathrooms, fireplaces, and
            custom residential projects in Auckland and beyond.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">
            Quick Links
          </h4>
          <div className="space-y-2">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-white/50 hover:text-white text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[#c8a96e] text-xs uppercase tracking-widest mb-4">
            Contact
          </h4>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-white/40">Sales Inquiries</p>
              <a href="tel:+64224107269" className="text-white/70 hover:text-white">
                +64 22 410 72 69
              </a>
            </div>
            <div>
              <p className="text-white/40">Technical Inquiries</p>
              <a href="tel:+64226016069" className="text-white/70 hover:text-white">
                +64 22 601 60 69
              </a>
            </div>
            <div>
              <p className="text-white/40">Email</p>
              <a
                href="mailto:sales@art-stone.co.nz"
                className="text-white/70 hover:text-white"
              >
                sales@art-stone.co.nz
              </a>
            </div>
            <div>
              <p className="text-white/40">Address</p>
              <p className="text-white/70">
                96 Hillside Road, Wairau Valley, Auckland
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-white/5 text-center text-white/30 text-xs">
        &copy; 2023 Art Stone Team Ltd.
      </div>
    </footer>
  )
}
