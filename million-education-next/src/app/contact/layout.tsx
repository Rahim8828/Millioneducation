import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Book Free Counselling for 11th, 12th, NEET & JEE',
  description: 'Contact Million Education for free academic counselling. Book demo classes for 1-on-1 Home Tuitions & Online Coaching for Class 11, 12, NEET & JEE in Mumbai.',
  keywords: [
    'contact million education',
    'book free demo class',
    'academic counselling Mumbai',
    '11th 12th tuition contact',
    'NEET JEE coaching enquiry',
    'home tutor contact Mumbai',
    'phone number million education',
  ],
  openGraph: {
    title: 'Contact Us — Million Education Mumbai',
    description: 'Book a FREE Academic Counselling Session or enquire about 1-on-1 Home Tuitions & Online Coaching.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Million Education',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us — Million Education',
    description: 'Book a FREE Academic Counselling Session for 11th, 12th, NEET & JEE.',
  },
};

export const viewport: Viewport = {
  themeColor: '#f97316',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}