import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import TutorHero from '@/components/TutorHero';
import StatsBar from '@/components/StatsBar';
import TutorFeatures from '@/components/TutorFeatures';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Become a Tutor — Earn ₹20K–50K/Month | Million Education',
  description: 'Join Million Education as a home tutor. Earn ₹20,000–₹50,000 per month teaching 11th, 12th, NEET & JEE students. Quick onboarding, verified students, zero membership fee.',
  keywords: [
    'become a tutor',
    'home tutor jobs Mumbai',
    'earn money teaching',
    '11th 12th tuition jobs',
    'NEET JEE tutor vacancy',
    'part time teaching jobs',
    'physics chemistry tutor',
  ],
  openGraph: {
    title: 'Become a Tutor — Earn ₹20K–50K/Month | Million Education',
    description: 'Join as a faculty mentor and earn ₹20,000–₹50,000 per month teaching Science students.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Million Education',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Tutor — Earn ₹20K–50K/Month',
    description: 'Join Million Education as a home tutor and earn ₹20,000–₹50,000 per month.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ForTutors() {
  return (
    <main>
      <Navbar tutorPage={true} />
      <TutorHero />
      <StatsBar dark={false} />
      <TutorFeatures />
      <HowItWorks variant="tutor" />
      <Testimonials variant="tutor" />
      <FAQ variant="tutor" />
      <Footer />
    </main>
  );
}
