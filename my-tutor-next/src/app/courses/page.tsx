import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Courses from '@/components/Courses';
import FAQ from '@/components/FAQ';
import { BookOpen, GraduationCap, Stethoscope, Cpu, CheckCircle2, ShieldCheck, UserCheck, Calendar, Zap, MessageCircle } from 'lucide-react';
import styles from './courses.module.css';

export const metadata: Metadata = {
  title: 'Courses — 11th, 12th, NEET & JEE 1-on-1 Mentorship',
  description: 'Explore specialized 1-on-1 home & online tuition courses for Class 11th Science, 12th Science, NEET UG, and JEE Main & Advanced.',
};

export default function CoursesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Header Banner */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.badge}>
            <GraduationCap size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            Specialized Academic Programs
          </div>
          <h1>11th, 12th, NEET & JEE Mentorship</h1>
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
              <div className={styles.iconBox}><BookOpen size={24} color="#f97316" /></div>
              <h3>NCERT & PYQ Mastery</h3>
              <p>Special focus on NCERT line-by-line coverage and 15+ years of Previous Year Questions for NEET and JEE.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}><Calendar size={24} color="#f97316" /></div>
              <h3>Weekly Assessment Tests</h3>
              <p>Regular chapter-wise and cumulative mock tests designed on the latest NTA / Board examination patterns.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}><MessageCircle size={24} color="#f97316" /></div>
              <h3>Unlimited Doubt Support</h3>
              <p>Direct access to your dedicated faculty mentor for instant doubt resolution during and after class hours.</p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.iconBox}><UserCheck size={24} color="#f97316" /></div>
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
