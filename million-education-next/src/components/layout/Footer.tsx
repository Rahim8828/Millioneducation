import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, Share2, Globe, MessageCircle, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const subjectLinks = [
  { label: 'Physics Specialist', href: '/courses/physics' },
  { label: 'Chemistry Specialist', href: '/courses/chemistry' },
  { label: 'Mathematics Specialist', href: '/courses/mathematics' },
  { label: 'Biology Specialist', href: '/courses/biology' },
  { label: 'PCM Combo Course', href: '/courses/pcm' },
  { label: 'PCB Combo Course', href: '/courses/pcb' },
];
const classLinks = [
  { label: 'Class 11 Science', href: '/courses' },
  { label: 'Class 12 Science', href: '/courses' },
  { label: 'NEET UG Coaching', href: '/courses' },
  { label: 'JEE Main Prep', href: '/courses' },
  { label: 'JEE Advanced Prep', href: '/courses' },
  { label: 'CBSE Board Prep', href: '/courses' },
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
            <Link href="/" className={styles.logo}>
              <Image 
                src="/Footer Logo.png" 
                alt="Million Education Footer Logo" 
                width={180} 
                height={50}
                style={{ width: 'auto', height: 'auto' }}
              />
            </Link>
            <p>
              Million Education is a premium coaching platform for Class 11th, 12th, NEET & JEE aspirants across India. Expert faculty, personalized 1-on-1 guidance, guaranteed rank improvement.
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <Phone size={16} />
                <div>
                  <a href="tel:+919004826378">+91 9004826378</a>
                  <a href="tel:+919152152155">+91 9152152155</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <MapPin size={16} />
                <p>Pearl Majestic, Aqsa Masjid Rd, Shastri Nagar, Jogeshwari West, Mumbai, Maharashtra 400102</p>
              </div>
            </div>
            <div className={styles.socialLinks}>
              <a href="/" aria-label="Website" className={styles.socialBtn}><Globe size={16} /></a>
              <a href="https://wa.me/919004826378" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className={styles.socialBtn}><MessageCircle size={16} /></a>
              <a href="mailto:support@millioneducation.com" aria-label="Mail" className={styles.socialBtn}><Mail size={16} /></a>
              <a href="https://wa.me/919004826378?text=I%20want%20to%20share%20Million%20Education" target="_blank" rel="noopener noreferrer" aria-label="Share" className={styles.socialBtn}><Share2 size={16} /></a>
            </div>
          </div>

          <div className={styles.col}>
            <h4>Subjects</h4>
            <ul>
              {subjectLinks.map((s) => (
                <li key={s.label}><Link href={s.href}>{s.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h4>Courses</h4>
            <ul>
              {classLinks.map((c) => (
                <li key={c.label}><Link href={c.href}>{c.label}</Link></li>
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
          <p>© 2026 Million Education. All rights reserved. 1-on-1 Home Tuitions & Online Coaching.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
            <Link href="/refund-policy">Refund Policy</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


