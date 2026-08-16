'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Sparkles, Star, CheckCircle2, BookOpen } from 'lucide-react';
import BookDemoModal from '../modals/BookDemoModal';
import styles from './Hero.module.css';

const subjectTags = ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'PCM Combo', 'PCB Combo'];
const classTags = ['Class 11 Science', 'Class 12 Science', 'NEET Coaching Program', 'JEE Main & Advanced'];

export default function Hero() {
  const [activeSubject, setActiveSubject] = useState('Physics');
  const [activeClass, setActiveClass] = useState('Class 11 Science');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <div className="container">
        <div className={styles.inner}>
          {/* Text Side */}
          <div className={styles.text}>
            <div className="badge">
              <Sparkles size={14} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
              Specialized 1-on-1 Personal Coaching Program & Tuitions
            </div>
            <h1>
              Personal Coaching Program for<br />
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
                {classTags.map((t) => {
                  let sectionId = null;
                  if (t === 'Class 11 Science' || t === 'Class 12 Science') {
                    sectionId = 'courses';
                  } else if (t === 'NEET Coaching Program') {
                    sectionId = 'neet-courses';
                  } else if (t === 'JEE Main & Advanced') {
                    sectionId = 'jee-courses';
                  }

                  return (
                    <button
                      key={t}
                      className={`${styles.tag} ${activeClass === t ? styles.active : ''}`}
                      onClick={() => {
                        setActiveClass(t);
                        // Scroll to respective course section
                        if (sectionId) {
                          const section = document.getElementById(sectionId);
                          if (section) {
                            setTimeout(() => {
                              section.scrollIntoView({ behavior: 'smooth' });
                            }, 100);
                          }
                        }
                      }}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            <button onClick={() => setIsDemoModalOpen(true)} className={styles.cta}>
              <BookOpen size={18} /> Book a Free Demo Class
            </button>
          </div>

          {/* Visual Side */}
          <div className={styles.visual}>
            <div className={styles.imgGrid}>
              {[
                { src: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&q=80', alt: 'Physics tutoring session' },
                { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&q=80', alt: 'Chemistry class' },
                { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&q=80', alt: 'Mathematics education' },
                { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&q=80', alt: 'Biology coaching program' },
              ].map((img, i) => (
                <div key={i} className={`${styles.imgCard} ${i % 2 === 1 ? styles.imgCardOffset : ''}`}>
                  <Image 
                    src={img.src}
                    alt={img.alt}
                    width={200}
                    height={150}
                    loading="lazy"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              ))}
            </div>

            <div className={`${styles.floatCard} ${styles.floatCard1}`}>
              <div className={styles.fcIcon}>
                <Star size={20} color="#2563EB" fill="#2563EB" />
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
      
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  );
}

