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
  title: 'Become a Tutor — Earn ₹20K–50K/Month',
  description: 'Join My Tutor as a home tutor. Earn ₹20,000–₹50,000 per month teaching students near you. Quick onboarding, verified students, zero membership fee.',
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
