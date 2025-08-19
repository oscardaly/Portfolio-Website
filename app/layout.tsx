import "./globals.css";

import { site } from "@/config";

import { Footer } from "@/components/footer";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s - ${site.title}`,
  },
  metadataBase: new URL(site.url),
  description: site.description,
  authors: [
    {
      name: site.name,
      url: site.url,
    },
  ],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_UK",
    url: site.url,
    title: site.name,
    description: site.description,
    siteName: site.name,
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
