import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "451.wtf - Building a Safer, More Private Internet",
  description:
    "451.wtf creates privacy-first software and open-source alternatives that respect user autonomy. We build lightweight, transparent tools forged through collective necessity for digital freedom.",
  keywords: [
    "privacy",
    "open source",
    "digital freedom",
    "anti-surveillance",
    "GPL-3.0",
    "community-driven",
    "censorship-resistant",
    "internet safety",
    "privacy-first software",
    "digital autonomy",
  ],
  authors: [{ name: "451.wtf Team" }],
  creator: "451.wtf Team",
  publisher: "451.wtf",
  generator: "Next.js",
  applicationName: "451.wtf",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://451.wtf"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "451.wtf - Building a Safer, More Private Internet",
    description:
      "451.wtf creates privacy-first software and open-source alternatives that respect user autonomy. We build lightweight, transparent tools forged through collective necessity for digital freedom.",
    url: "https://451.wtf",
    siteName: "451.wtf",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicons/light.png",
        width: 512,
        height: 512,
        alt: "451.wtf Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "451.wtf - Building a Safer, More Private Internet",
    description:
      "451.wtf creates privacy-first software and open-source alternatives that respect user autonomy. We build lightweight, transparent tools forged through collective necessity for digital freedom.",
    images: ["/favicons/light.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicons/light.png",
    shortcut: "/favicons/light.png",
    apple: "/favicons/light.png",
  },
  manifest: "/manifest.json",
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
        <Toaster />
      </body>
    </html>
  )
}
