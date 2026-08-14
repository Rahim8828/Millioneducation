import Link from 'next/link';
import { GraduationCap, Share2, Globe, MessageCircle, Mail } from 'lucide-react';
import styles from './Footer.module.css';

const subjectLinks = [
  'Physics Specialist', 'Chemistry Specialist', 'Mathematics Specialist', 'Biology Specialist',
  'PCM Combo Course', 'PCB Combo Course',
];
const classLinks = [
  'Class 11 Science', 'Class 12 Science', 'NEET UG Mentorship',
  'JEE Main Prep', 'JEE Advanced Prep', 'CBSE Board Prep',
];
const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Join as Faculty', href: '/join-faculty' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'About Us', href: '/about' },
];


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <GraduationCap size={28} color="#f97316" />
              <span>Million<span>Education</span></span>
            </Link>
            <p>
              Million Education is a premium mentorship platform for Class 11th, 12th, NEET & JEE aspirants across India. Expert faculty, personalized 1-on-1 guidance, guaranteed rank improvement.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Website" className={styles.socialBtn}><Globe size={16} /></a>
              <a href="#" aria-label="WhatsApp" className={styles.socialBtn}><MessageCircle size={16} /></a>
              <a href="#" aria-label="Mail" className={styles.socialBtn}><Mail size={16} /></a>
              <a href="#" aria-label="Share" className={styles.socialBtn}><Share2 size={16} /></a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Subjects</h4>
            <ul>
              {subjectLinks.map((s) => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Courses</h4>
            <ul>
              {classLinks.map((c) => (
                <li key={c}><a href="#">{c}</a></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Company</h4>
            <ul>
              {companyLinks.map((c) => (
                <li key={c.label}><Link href={c.href}>{c.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <hr className={styles.divider} />

        <div className={styles.bottom}>
          <p>© 2026 Million Education. All rights reserved. Specialized 1-on-1 Mentorship.</p>
          <div className={styles.bottomLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


