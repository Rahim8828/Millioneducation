import Link from 'next/link';
import styles from './Footer.module.css';

const subjectLinks = [
  'Maths Tutor', 'Physics Tutor', 'Chemistry Tutor', 'Biology Tutor',
  'English Tutor', 'Hindi Tutor', 'Science Tutor', 'Economics Tutor',
];
const classLinks = [
  'Class I–V Tutor', 'Class VI–VIII Tutor', 'Class IX–X Tutor',
  'Class XI–XII Tutor', 'Graduation Tutor', 'CBSE Tutor', 'ICSE Tutor', 'IELTS / TOEFL',
];
const companyLinks = [
  { label: 'About Us', href: '#' },
  { label: 'Become a Tutor', href: '/for-tutors' },
  { label: 'How It Works', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Terms of Service', href: '#' },
  { label: 'Refund Policy', href: '#' },
  { label: 'Blog', href: '#' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.logo}>🎓 My<span>Tutor</span></Link>
            <p>
              My Tutor is a premium platform connecting students with qualified,
              background-verified home tutors across India. Expert guidance, trusted
              tutors, guaranteed results.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook" className={styles.socialBtn}>📘</a>
              <a href="#" aria-label="Instagram" className={styles.socialBtn}>📸</a>
              <a href="#" aria-label="Twitter" className={styles.socialBtn}>🐦</a>
              <a href="#" aria-label="YouTube" className={styles.socialBtn}>▶️</a>
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
            <h4>Classes</h4>
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
          <p>© 2024 My Tutor. All rights reserved. | Built with ❤️ in India</p>
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
