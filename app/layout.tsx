import "./globals.css"

import { site } from "@/config"

import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Nav } from "@/components/nav"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: site.name,
    template: `%s - ${site.name}`,
  },
  metadataBase: new URL(site.url),
  description: site.description,
  keywords: [
    "Next.js v15",
    "Next.js 15 template",
    "Tailwind CSS v4",
    "Tailwind v4 template",
  ],
  authors: [
    {
      name: site.name,
      url: site.url,
    },
    {
      name: "cbm",
      url: "https://cbm.sh",
    },
  ],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
    images: [
      {
        url: site.ogImage,
        width: 1200,
        height: 630,
        alt: site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [site.ogImage],
    creator: site.handles.twitter,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout