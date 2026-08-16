'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// WhatsApp SVG Icon Component
function WhatsAppIcon({ size = 18 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}
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
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
  ];

  const tutorLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/join-faculty#features', label: 'Features' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
  ];

  const links = tutorPage ? tutorLinks : studentLinks;

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} id="navbar">
      <div className={styles.navInner}>
        <Link href="/" className={styles.logo}>
          <Image 
            src="/logo.png" 
            alt="Million Education Logo" 
            width={180} 
            height={50}
            style={{ width: 'auto', height: 'auto' }}
          />
        </Link>

        <div className={styles.navLinks}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className={styles.navCta}>
          <a href="https://wa.me/919004826378" target="_blank" rel="noopener noreferrer" className={styles.whatsappBtn} aria-label="WhatsApp">
            <WhatsAppIcon size={18} />
            <span>WhatsApp</span>
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


