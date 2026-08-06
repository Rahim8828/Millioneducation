import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StatsBar from '@/components/StatsBar';
import WhyChooseUs from '@/components/WhyChooseUs';
import { Target, Award, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import styles from './about.module.css';

export const metadata: Metadata = {
  title: 'About Us — Dedicated 1-on-1 Mentorship for 11th, 12th, NEET & JEE',
  description: 'Learn about My Tutor, India\'s trusted 1-on-1 mentorship platform specializing in Class 11 Science, 12th Science, NEET UG, and JEE Main & Advanced.',
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Hero Banner */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.badge}>
            <Award size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            About My Tutor
          </div>
          <h1>Transforming Science Education Through 1-on-1 Mentorship</h1>
          <p className={styles.heroSub}>
            We bridge the gap between classroom teaching and individual student needs, empowering 11th, 12th, NEET & JEE aspirants with dedicated personal faculty.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className={`${styles.missionSection} sectionPadding`}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.iconBox}><Target size={28} color="#f97316" /></div>
              <h2>Our Mission</h2>
              <p>
                To provide every 11th and 12th Science student across India with top-tier, verified subject specialists who deliver personalized 1-on-1 guidance from basic concept clarity to competitive rank mastery.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconBox}><Users size={28} color="#f97316" /></div>
              <h2>Our Faculty Standards</h2>
              <p>
                Every faculty mentor on My Tutor undergoes a rigorous multi-stage academic verification process. We onboard experienced IITians, Medical Professionals, and Subject Experts with proven track records.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsBar dark={true} />

      <WhyChooseUs />

      <Footer />
    </main>
  );
}
