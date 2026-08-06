import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Categories from '@/components/Categories';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CityLinks from '@/components/CityLinks';
import Footer from '@/components/Footer';
import Courses from '@/components/Courses';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar dark={true} />
      <Categories />
      <WhyChooseUs />
      <Courses />
      <HowItWorks variant="student" />
      <Testimonials variant="student" />
      <FAQ variant="student" />
      <CityLinks />
      <Footer />
    </main>
  );
}

