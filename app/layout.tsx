import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OJD - Portfolio',
  description: 'This is a website to store and show my side projects and experience.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@exampledev/new.css@1.1.2/new.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
