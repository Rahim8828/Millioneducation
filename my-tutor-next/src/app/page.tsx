import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import Categories from '@/components/Categories';
import WhyChooseUs from '@/components/WhyChooseUs';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import MediaLogos from '@/components/MediaLogos';
import CityLinks from '@/components/CityLinks';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar dark={true} />
      <Categories />
      <WhyChooseUs />
      <HowItWorks variant="student" />
      <Testimonials variant="student" />
      <FAQ variant="student" />
      <MediaLogos />
      <CityLinks />
      <Footer />
    </main>
  );
}
