import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Reprivatize - Building a Safer, More Private Internet",
  description:
    "Reprivatize creates privacy-first software and open-source alternatives that respect user autonomy. We build lightweight, transparent tools forged through collective necessity for digital freedom.",
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
  authors: [{ name: "Reprivatize Team" }],
  creator: "Reprivatize Team",
  publisher: "Reprivatize",
  generator: "Next.js",
  applicationName: "Reprivatize",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://reprivatize.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Reprivatize - Building a Safer, More Private Internet",
    description:
      "Reprivatize creates privacy-first software and open-source alternatives that respect user autonomy. We build lightweight, transparent tools forged through collective necessity for digital freedom.",
    url: "https://reprivatize.me",
    siteName: "Reprivatize",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicons/light.png",
        width: 512,
        height: 512,
        alt: "Reprivatize Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reprivatize - Building a Safer, More Private Internet",
    description:
      "Reprivatize creates privacy-first software and open-source alternatives that respect user autonomy. We build lightweight, transparent tools forged through collective necessity for digital freedom.",
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
