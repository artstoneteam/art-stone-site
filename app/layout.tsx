import type { Metadata } from 'next'
import { Inter, Playfair_Display, Josefin_Sans, Montserrat, Raleway } from 'next/font/google'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

const josefin = Josefin_Sans({
  variable: '--font-josefin',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  display: 'swap',
})

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  display: 'swap',
})

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Art Stone Team Ltd — Premium Stone Solutions Auckland',
    template: '%s | Art Stone Team Ltd',
  },
  description:
    'High-end stone solutions for kitchen benchtops, bathrooms, fireplaces, and custom residential projects in Auckland. Expert stonemasons working with marble, granite, porcelain, engineered stone, and quartzite.',
  keywords: [
    'stone benchtops Auckland',
    'kitchen benchtops',
    'marble benchtops',
    'granite benchtops',
    'stone fireplaces',
    'bathroom stone',
    'stonemasons Auckland',
    'Art Stone',
  ],
  openGraph: {
    title: 'Art Stone Team Ltd — Premium Stone Solutions Auckland',
    description:
      'Expert stonemasons specialising in kitchen benchtops, bathrooms, fireplaces, and custom stone projects.',
    url: 'https://www.art-stone.co.nz',
    siteName: 'Art Stone Team Ltd',
    locale: 'en_NZ',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${josefin.variable} ${montserrat.variable} ${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#0f0f0f] text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
