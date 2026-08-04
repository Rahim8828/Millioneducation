'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
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
    { href: '#categories', label: 'Find Tutor' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
  ];

  const tutorLinks = [
    { href: '#benefits', label: 'Benefits' },
    { href: '#features', label: 'Features' },
    { href: '#testimonials', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
  ];

  const links = tutorPage ? tutorLinks : studentLinks;

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          🎓 My<span>Tutor</span>
        </Link>

        <div className={styles.navLinks}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </a>
          ))}
        </div>

        <div className={styles.navCta}>
          <a href="tel:+919876543210" className={styles.phone}>📞 +91 98765 43210</a>
          {tutorPage ? (
            <Link href="/" className={styles.ctaBtn}>Find a Tutor</Link>
          ) : (
            <Link href="/for-tutors" className={styles.ctaBtn}>Become a Tutor</Link>
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

      {menuOpen && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="tel:+919876543210" className={styles.mobileLink}>📞 +91 98765 43210</a>
          {tutorPage ? (
            <Link href="/" className={styles.ctaBtn} onClick={() => setMenuOpen(false)}>Find a Tutor</Link>
          ) : (
            <Link href="/for-tutors" className={styles.ctaBtn} onClick={() => setMenuOpen(false)}>Become a Tutor</Link>
          )}
        </div>
      )}
    </nav>
  );
}
