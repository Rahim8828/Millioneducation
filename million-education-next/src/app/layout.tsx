import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import './globals.css';
import StickyContact from '@/components/layout/StickyContact';

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
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        {children}
        <StickyContact />
      </body>
    </html>
  );
}

