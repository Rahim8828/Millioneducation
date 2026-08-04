'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

const subjectTags = ['Maths', 'Science', 'English', 'Hindi', 'Physics', 'Chemistry'];
const classTags = ['Class I – V', 'Class VI – VIII', 'Class IX – X', 'Class XI – XII'];

export default function Hero() {
  const [activeSubject, setActiveSubject] = useState('Maths');
  const [activeClass, setActiveClass] = useState('Class IX – X');

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          {/* Text Side */}
          <div className={styles.text}>
            <div className="badge">🇮🇳 Trusted by 10,000+ Families Across India</div>
            <h1>
              Finding the right<br />
              <em>home-tutor</em><br />
              made easy
            </h1>
            <p className={styles.sub}>
              Master any subject with top tutors from various cities. Your Teaching
              Transcends Geographical Limits, Nurturing Young Minds with Insights from
              Across India.
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
              <div className={styles.tagLabel}>Classes</div>
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

            <Link href="/for-tutors" className={styles.cta}>
              📚 Book a Free Demo Class
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
                  <img src={src} alt="Tutor teaching" loading="lazy" />
                </div>
              ))}
            </div>

            <div className={`${styles.floatCard} ${styles.floatCard1}`}>
              <div className={styles.fcIcon}>⭐</div>
              <div>
                <div className={styles.fcLabel}>Avg. Rating</div>
                <div className={styles.fcValue}>4.9 / 5.0</div>
              </div>
            </div>
            <div className={`${styles.floatCard} ${styles.floatCard2}`}>
              <div className={styles.fcIcon}>✅</div>
              <div>
                <div className={styles.fcLabel}>Verified Tutors</div>
                <div className={styles.fcValue}>26,000+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
