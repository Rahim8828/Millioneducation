'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Sparkles, Star, CheckCircle2, BookOpen, GraduationCap } from 'lucide-react';
import styles from './Hero.module.css';

const subjectTags = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'PCM Combo', 'PCB Combo'];
const classTags = ['Class 11 Science', 'Class 12 Science', 'NEET Mentorship', 'JEE Main & Advanced'];

export default function Hero() {
  const [activeSubject, setActiveSubject] = useState('Physics');
  const [activeClass, setActiveClass] = useState('Class 11 Science');

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          {/* Text Side */}
          <div className={styles.text}>
            <div className="badge">
              <Sparkles size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
              Specialized 1-on-1 Mentorship & Tuitions
            </div>
            <h1>
              Personalized Mentorship for<br />
              <em>11th, 12th, NEET & JEE</em><br />
              From Basics to Rank
            </h1>
            <p className={styles.sub}>
              Master Physics, Chemistry, Mathematics & Biology with dedicated top faculty.
              Home Tuitions & Online 1-on-1 Classes tailored for Board Excellence & Competitive Entrance Ranks.
            </p>

            <div className={styles.tagGroup}>
              <div className={styles.tagLabel}>Subjects</div>
              <div className={styles.tags}>
                {subjectTags.map((t) => (
                  <button
                    key={t}
                    className={`${styles.tag} ${activeSubject === t ? styles.active : ''}`}
                    onClick={() => setActiveSubject(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <div className={styles.tagGroup}>
              <div className={styles.tagLabel}>Courses</div>
              <div className={styles.tags}>
                {classTags.map((t) => (
                  <button
                    key={t}
                    className={`${styles.tag} ${activeClass === t ? styles.active : ''}`}
                    onClick={() => setActiveClass(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            <Link href="#courses" className={styles.cta}>
              <BookOpen size={18} /> Book a Free Demo Class
            </Link>
          </div>

          {/* Visual Side */}
          <div className={styles.visual}>
            <div className={styles.imgGrid}>
              {[
                'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80',
                'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80',
                'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80',
                'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80',
              ].map((src, i) => (
                <div key={i} className={`${styles.imgCard} ${i % 2 === 1 ? styles.imgCardOffset : ''}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={src} alt="Personalized Tuition" loading="lazy" />
                </div>
              ))}
            </div>

            <div className={`${styles.floatCard} ${styles.floatCard1}`}>
              <div className={styles.fcIcon}>
                <Star size={20} color="#f97316" fill="#f97316" />
              </div>
              <div>
                <div className={styles.fcLabel}>Avg. Rating</div>
                <div className={styles.fcValue}>4.9 / 5.0</div>
              </div>
            </div>
            <div className={`${styles.floatCard} ${styles.floatCard2}`}>
              <div className={styles.fcIcon}>
                <CheckCircle2 size={20} color="#22c55e" />
              </div>
              <div>
                <div className={styles.fcLabel}>Top Faculty</div>
                <div className={styles.fcValue}>Verified Mentors</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

