'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'

const stoneTypes = [
  { name: 'Marble', href: '/marble' },
  { name: 'Granite', href: '/granite' },
  { name: 'Porcelain', href: '/porcelain' },
  { name: 'Engineered Stone', href: '/engineered-stone' },
  { name: 'Quartzite', href: '/quartzite' },
]

const aboutLinks = [
  { name: 'About', href: '/about' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [stoneOpen, setStoneOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0f0f0f]/95 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <img src="/images/logo.png" alt="Art Stone" className="h-[120px] w-auto mt-[100px]" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            href="/our-services"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Our Services
          </Link>

          {/* Stone Types Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setStoneOpen(true)}
            onMouseLeave={() => setStoneOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors">
              Stone Types
              <ChevronDown className="w-3 h-3" />
            </button>
            {stoneOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-[#1a1a1a] border border-white/10 py-2 min-w-[200px]">
                  {stoneTypes.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white/70 hover:text-[#c8a96e] hover:bg-white/5 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Gallery
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm text-white/70 hover:text-white transition-colors">
              About
              <ChevronDown className="w-3 h-3" />
            </button>
            {aboutOpen && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-[#1a1a1a] border border-white/10 py-2 min-w-[160px]">
                  {aboutLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white/70 hover:text-[#c8a96e] hover:bg-white/5 transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className="px-5 py-2 bg-[#c8a96e] text-black text-sm font-medium hover:bg-[#b8994e] transition-colors"
          >
            Get Quote
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0f0f0f] border-t border-white/5 px-6 py-6 space-y-4">
          <Link
            href="/our-services"
            className="block text-white/70 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Our Services
          </Link>
          <div>
            <p className="text-[#c8a96e] text-xs uppercase tracking-widest mb-2">
              Stone Types
            </p>
            {stoneTypes.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block pl-4 py-1 text-white/70 hover:text-white text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <Link
            href="/gallery"
            className="block text-white/70 hover:text-white"
            onClick={() => setMobileOpen(false)}
          >
            Gallery
          </Link>
          {aboutLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block text-white/70 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block w-full text-center py-3 bg-[#c8a96e] text-black font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  )
}
