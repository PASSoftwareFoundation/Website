import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "451.WTF - Building a Safer, More Private Internet",
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
  authors: [{ name: "451.WTF Collective" }],
  creator: "451.WTF",
  publisher: "451.WTF",
  generator: "Next.js",
  applicationName: "451.WTF",
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
    title: "451.WTF - Building a Safer, More Private Internet",
    description:
      "451.wtf creates privacy-first software and open-source alternatives that respect user autonomy. We build lightweight, transparent tools forged through collective necessity for digital freedom.",
    url: "https://451.wtf",
    siteName: "451.WTF",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/favicons/dark.png",
        width: 512,
        height: 512,
        alt: "451.WTF Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "451.WTF - Building a Safer, More Private Internet",
    description:
      "451.wtf creates privacy-first software and open-source alternatives that respect user autonomy. We build lightweight, transparent tools forged through collective necessity for digital freedom.",
    images: ["/favicons/dark.png"],
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
    icon: "/favicons/dark.png",
    shortcut: "/favicons/dark.png",
    apple: "/favicons/dark.png",
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
