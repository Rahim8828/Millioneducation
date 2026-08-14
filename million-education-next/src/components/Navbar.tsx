'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GraduationCap, Phone, MessageCircle, Mail } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar({ tutorPage = false }: { tutorPage?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const studentLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/join-faculty', label: 'Join as Faculty' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/about', label: 'About Us' },
  ];

  const tutorLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/join-faculty#features', label: 'Features' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/about', label: 'About Us' },
  ];

  const links = tutorPage ? tutorLinks : studentLinks;

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          <span>Million <span>Education</span></span>
        </Link>

        <div className={styles.navLinks}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className={styles.navCta}>
          <a href="https://wa.me/919004826378" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
          <a href="mailto:support@millioneducation.com" className={styles.socialIcon} aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="tel:+919004826378" className={styles.phone} style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Phone size={14} color="#f97316" /> +91 9004826378
          </a>
          {tutorPage ? (
            <Link href="/courses" className={styles.ctaBtn}>Explore Courses</Link>
          ) : (
            <Link href="/join-faculty" className={styles.ctaBtn}>Join as Faculty</Link>
          )}
        </div>

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && <div className={`${styles.mobileBackdrop} ${menuOpen ? styles.open : ''}`} onClick={() => setMenuOpen(false)} />}

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <div className={styles.mobileSocial}>
            <a href="https://wa.me/919004826378" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialIcon} aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
            <a href="mailto:support@millioneducation.com" className={styles.mobileSocialIcon} aria-label="Email">
              <Mail size={20} />
            </a>
          </div>
          {tutorPage ? (
            <Link href="/" className={styles.ctaBtn} onClick={() => setMenuOpen(false)}>Find a Tutor</Link>
          ) : (
            <Link href="/for-tutors" className={styles.ctaBtn} onClick={() => setMenuOpen(false)}>Join as Faculty</Link>
          )}
        </div>
      )}
    </nav>
  );
}


