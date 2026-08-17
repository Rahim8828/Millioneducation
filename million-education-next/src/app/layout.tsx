import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import StickyContact from '@/components/layout/StickyContact';
import ScrollToTop from '@/components/layout/ScrollToTop';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-main',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Million Education Mumbai',
    default: 'Million Education — 1-on-1 Personal Coaching Program for 11th, 12th, NEET & JEE in Mumbai',
  },
  description:
    'Million Education connects Science stream students in Mumbai with verified 1-on-1 home tutors and live online mentors for Class 11, 12, NEET UG, and JEE Main & Advanced.',
  keywords: [
    'home tutor Mumbai',
    '11th PCM tutor',
    '12th PCB tutor',
    'NEET mentor Mumbai',
    'JEE Advanced tutor',
    'private tutor Mumbai',
    'online tuition Mumbai',
    'NEET coaching Mumbai',
    'JEE coaching Mumbai',
    'physics tutor Mumbai',
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any', type: 'image/x-icon' },
      { url: '/favicon.svg', sizes: 'any', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest',
      },
    ],
  },
  // Open Graph Tags
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.millioneducation.in',
    siteName: 'Million Education',
    title: 'Million Education — 1-on-1 Personal Coaching Program for 11th, 12th, NEET & JEE in Mumbai',
    description:
      'Million Education connects Science stream students in Mumbai with verified 1-on-1 home tutors and live online mentors for Class 11, 12, NEET UG, and JEE Main & Advanced.',
    images: [
      {
        url: 'https://www.millioneducation.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'Million Education - Online Tuition Platform',
        type: 'image/png',
      },
    ],
  },
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Million Education — 1-on-1 Personal Coaching Program for 11th, 12th, NEET & JEE in Mumbai',
    description:
      'Million Education connects Science stream students in Mumbai with verified 1-on-1 home tutors and live online mentors for Class 11, 12, NEET UG, and JEE Main & Advanced.',
    images: ['https://www.millioneducation.in/logo.png'],
    creator: '@MillionEducation',
  },
  // Additional Meta Tags
  metadataBase: new URL('https://www.millioneducation.in'),
  alternates: {
    canonical: 'https://www.millioneducation.in',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  category: 'Education',
  authors: [
    {
      name: 'Million Education',
      url: 'https://www.millioneducation.in',
    },
  ],
  creator: 'Million Education',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Favicon - SVG */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        
        {/* Favicon - ICO Fallback */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        
        {/* Favicon - PNG Fallback */}
        <link rel="icon" href="/favicon-96x96.png" sizes="96x96" type="image/png" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        
        {/* Web App Manifest for PWA */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Color for Mobile Browsers */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body>
        <ScrollToTop />
        {children}
        <StickyContact />
      </body>
    </html>
  );
}

