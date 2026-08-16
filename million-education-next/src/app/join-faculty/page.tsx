import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import TutorHero from '@/components/sections/TutorHero';
import StatsBar from '@/components/ui/StatsBar';
import TutorFeatures from '@/components/ui/TutorFeatures';
import HowItWorks from '@/components/ui/HowItWorks';
import Testimonials from '@/components/ui/Testimonials';
import FAQ from '@/components/ui/FAQ';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: 'Join as Faculty — 11th, 12th, NEET & JEE Mentors in Mumbai',
  description: 'Join Million Education as a specialist faculty mentor in Mumbai. Teach Class 11th, 12th Science, NEET & JEE aspirants 1-on-1 at home or online.',
};

export default function JoinFacultyPage() {
  return (
    <main>
      <Navbar tutorPage={true} />
      <TutorHero />
      <StatsBar dark={true} />
      <TutorFeatures />
      <HowItWorks variant="tutor" />
      <Testimonials variant="tutor" />
      <FAQ variant="tutor" />
      <Footer />
    </main>
  );
}
