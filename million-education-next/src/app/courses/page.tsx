import type { Metadata } from 'next';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Courses from '@/components/courses/Courses';
import FAQ from '@/components/ui/FAQ';
import { breadcrumbSchema } from '@/lib/schema';
import { BookOpen, GraduationCap, Stethoscope, Cpu, CheckCircle2, ShieldCheck, UserCheck, Calendar, Zap, MessageCircle } from 'lucide-react';
import styles from './courses.module.css';

export const metadata: Metadata = {
  title: 'Courses — 11th, 12th, NEET & JEE 1-on-1 Personal Coaching Program',
  description: 'Explore specialized 1-on-1 home & online tuition courses for Class 11th Science, 12th Science, NEET UG, and JEE Main & Advanced.',
  keywords: [
    'online courses',
    'science tuition',
    '11th 12th courses',
    'NEET coaching courses',
    'JEE courses',
    'physics chemistry biology mathematics',
    'PCM PCB courses',
    'home tuition courses',
  ],
  openGraph: {
    type: 'website',
    title: 'Courses — 1-on-1 Coaching for 11th, 12th, NEET & JEE',
    description: 'Specialized courses for Class 11th, 12th, NEET & JEE exam preparation',
    url: 'https://www.millioneducation.in/courses',
    siteName: 'Million Education',
    images: [
      {
        url: 'https://www.millioneducation.in/logo.png',
        width: 1200,
        height: 630,
        alt: 'Million Education Courses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Specialized Courses - Million Education',
    description: 'Expert 1-on-1 coaching for Science subjects',
    images: ['https://www.millioneducation.in/logo.png'],
  },
  alternates: {
    canonical: 'https://www.millioneducation.in/courses',
  },
};

export default function CoursesPage() {
  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://www.millioneducation.in' },
    { name: 'Courses', url: 'https://www.millioneducation.in/courses' },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />
      <Navbar />
      
      {/* Header Banner */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.badge}>
            <GraduationCap size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            Specialized Academic Programs
          </div>
          <h1>11th, 12th, NEET & JEE Personal Coaching Program</h1>
          <p className={styles.heroSub}>
            Comprehensive 1-on-1 Home Tuitions & Online Coaching in Physics, Chemistry, Mathematics & Biology tailored for Board success & Top entrance ranks.
          </p>
        </div>
      </section>

      {/* Main Courses Component */}
      <Courses />

      {/* Detailed Features Section */}
      <section className={`${styles.detailSection} sectionPadding`}>
        <div className="container">
          <h2 className="sectionTitle">Why Our 1-on-1 Course Structure Works</h2>
          <p className="sectionSub">Every course is structured to provide individual attention, eliminating student doubts and building strong fundamentals.</p>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.iconBox}><BookOpen size={24} color="#2563EB" /></div>
              <h3>NCERT & PYQ Mastery</h3>
              <p>Special focus on NCERT line-by-line coverage and 15+ years of Previous Year Questions for NEET and JEE.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}><Calendar size={24} color="#2563EB" /></div>
              <h3>Weekly Assessment Tests</h3>
              <p>Regular chapter-wise and cumulative mock tests designed on the latest NTA / Board examination patterns.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}><MessageCircle size={24} color="#2563EB" /></div>
              <h3>Unlimited Doubt Support</h3>
              <p>Direct access to your dedicated faculty mentor for instant doubt resolution during and after class hours.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}><UserCheck size={24} color="#2563EB" /></div>
              <h3>Monthly Parent Meetings</h3>
              <p>Transparent monthly progress reporting and feedback sessions to ensure steady academic growth.</p>
            </div>
          </div>
        </div>
      </section>

      <FAQ variant="student" />
      <Footer />
    </main>
  );
}
