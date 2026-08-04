'use client';

import { useEffect, useRef } from 'react';
import styles from './Categories.module.css';

const categories = [
  { icon: '🧒', name: 'Class I – V', sub: 'Primary Tutor' },
  { icon: '📚', name: 'Class VI – VIII', sub: 'Middle School' },
  { icon: '📝', name: 'Class IX – X', sub: 'Board Exam Prep' },
  { icon: '🔬', name: 'Class XI – XII', sub: 'Senior Secondary' },
  { icon: '🎓', name: 'Graduation+', sub: 'College Level' },
  { icon: '🗣️', name: 'Spoken English', sub: 'Communication' },
  { icon: '🏠', name: 'Home Tutoring', sub: 'At Your Doorstep' },
  { icon: '🌐', name: 'Online Classes', sub: 'Live & Recorded' },
  { icon: '📋', name: 'CBSE / ICSE', sub: 'Board Specialist' },
  { icon: '🌍', name: 'IELTS / TOEFL', sub: 'English Proficiency' },
  { icon: '🏛️', name: 'State Board', sub: 'All State Boards' },
  { icon: '🏆', name: 'Every Board', sub: 'IB / Cambridge' },
];

export default function Categories() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll<HTMLElement>('[data-card]');
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    cards.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className={`${styles.section} sectionPadding`} id="categories">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="badge">All Levels Covered</div>
        </div>
        <h2 className="sectionTitle">From ABCs to Entrance Exams — We&apos;ve Got It All</h2>
        <p className="sectionSub">
          Whether your child needs foundation-level support or competitive exam preparation,
          our tutors cover every stage.
        </p>
        <div className={styles.grid} ref={cardsRef}>
          {categories.map((c) => (
            <div key={c.name} className={`${styles.card} animateEl`} data-card>
              <span className={styles.icon}>{c.icon}</span>
              <div className={styles.name}>{c.name}</div>
              <div className={styles.sub}>{c.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
