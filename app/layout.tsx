import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CodeWave Solutions | Digital Innovation & Technology',
  description: 'We build modern digital solutions, automation tools, and software systems designed for business growth and operational efficiency.',
  keywords: ['web development', 'software solutions', 'automation', 'data analytics', 'tech consulting'],
  authors: [{ name: 'CodeWave Solutions' }],
  creator: 'CodeWave Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codewave-solutions.com',
    title: 'CodeWave Solutions',
    description: 'Digital Innovation. Smart Technology. Real Solutions.',
    siteName: 'CodeWave Solutions',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeWave Solutions',
    description: 'Digital Innovation. Smart Technology. Real Solutions.',
    creator: '@codewave',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}