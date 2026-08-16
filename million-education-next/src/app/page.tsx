import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import StatsBar from '@/components/ui/StatsBar';
import Categories from '@/components/ui/Categories';
import VisualBreak from '@/components/ui/VisualBreak';
import WhyChooseUs from '@/components/ui/WhyChooseUs';
import HowItWorks from '@/components/ui/HowItWorks';
import Testimonials from '@/components/ui/Testimonials';
import FAQ from '@/components/ui/FAQ';
import CityLinks from '@/components/ui/CityLinks';
import Footer from '@/components/layout/Footer';
import Courses from '@/components/courses/Courses';
import CourseNEET from '@/components/courses/CourseNEET';
import CourseJEE from '@/components/courses/CourseJEE';
import { organizationSchema } from '@/lib/schema';

export default function Home() {
  // JSON-LD Schema for Organization
  const schemaData = JSON.stringify(organizationSchema);

  return (
    <>
      {/* JSON-LD Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: schemaData }}
        suppressHydrationWarning
      />
      <main>
        <Navbar />
        <Hero />
        <StatsBar dark={true} />
        <Categories />
        <VisualBreak />
        <WhyChooseUs />
        <Courses />
        <CourseNEET />
        <CourseJEE />
        <HowItWorks variant="student" />
        <Testimonials variant="student" />
        <FAQ variant="student" />
        <CityLinks />
        <Footer />
      </main>
    </>
  );
}

