'use client';

import { useState } from 'react';
import { Sparkles, BookOpen } from 'lucide-react';
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
              1-on-1 Home Tuitions & Online Coaching
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
                  <div
                    key={t}
                    className={`${styles.tagStatic} ${activeSubject === t ? styles.active : ''}`}
                  >
                    {t}
                  </div>
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
        </div>
      </div>
      
      <BookDemoModal isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />
    </section>
  );
}

