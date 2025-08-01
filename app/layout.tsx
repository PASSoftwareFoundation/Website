import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: '451.WTF - Exposing Online Predators & Scammers',
  description: 'We investigate and gather comprehensive information about online predators, scammers, and cyberbullies. Our evidence packages are then provided to law enforcement for proper legal action.',
  keywords: ['internet safety', 'online predators', 'scammers', 'cyberbullying', 'digital investigation', 'law enforcement', 'evidence gathering', 'community safety'],
  authors: [{ name: '451.WTF' }],
  creator: '451.WTF',
  publisher: '451.WTF',
  generator: 'Next.js',
  applicationName: '451.WTF',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://451.wtf'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '451.WTF - Exposing Online Predators & Scammers',
    description: 'We investigate and gather comprehensive information about online predators, scammers, and cyberbullies. Our evidence packages are then provided to law enforcement for proper legal action.',
    url: 'https://451.wtf',
    siteName: '451.WTF',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/favicons/dark.png',
        width: 512,
        height: 512,
        alt: '451.WTF Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '451.WTF - Exposing Online Predators & Scammers',
    description: 'We investigate and gather comprehensive information about online predators, scammers, and cyberbullies. Our evidence packages are then provided to law enforcement for proper legal action.',
    images: ['/favicons/dark.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicons/dark.png',
    shortcut: '/favicons/dark.png',
    apple: '/favicons/dark.png',
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  )
}
