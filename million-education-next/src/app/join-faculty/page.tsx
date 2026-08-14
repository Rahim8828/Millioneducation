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
  title: 'Join as Faculty — 11th, 12th, NEET & JEE Mentors in Mumbai',
  description: 'Join Million Education as a specialist faculty mentor in Mumbai. Teach Class 11th, 12th Science, NEET & JEE aspirants 1-on-1 at home or online.',
};

export default function JoinFacultyPage() {
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
