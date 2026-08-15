'use client';

import { useEffect, useRef } from 'react';
import { 
  Atom, 
  FlaskConical, 
  Calculator, 
  Dna, 
  GraduationCap, 
  Stethoscope, 
  Cpu, 
  Home, 
  Laptop, 
  Target, 
  BookOpenCheck, 
  Award 
} from 'lucide-react';
import styles from './Categories.module.css';

const categories = [
  { icon: Atom, name: 'Physics Coaching Program', sub: '11th, 12th, JEE & NEET' },
  { icon: FlaskConical, name: 'Chemistry Specialization', sub: 'Organic, Inorganic & Physical' },
  { icon: Calculator, name: 'Mathematics Coaching', sub: 'Calculus, Algebra & Coordinate' },
  { icon: Dna, name: 'Biology NCERT Mastery', sub: 'Botany & Zoology for NEET' },
  { icon: GraduationCap, name: 'Class 11 Science (PCM/PCB)', sub: 'Strong Foundation Building' },
  { icon: BookOpenCheck, name: 'Class 12 Board Prep', sub: '100% NCERT + CBSE Focus' },
  { icon: Stethoscope, name: 'NEET UG One-to-One', sub: 'PYQs & Mock Test Strategy' },
  { icon: Cpu, name: 'JEE Main & Advanced', sub: 'Advanced Problem Solving' },
  { icon: Home, name: 'Home Tuition Mode', sub: 'Personalized Doorstep Learning' },
  { icon: Laptop, name: 'Online Live Classes', sub: 'Interactive 1-on-1 Sessions' },
  { icon: Target, name: 'Chapter-wise Courses', sub: 'Targeted Weak Area Improvement' },
  { icon: Award, name: 'Full Syllabus Revision', sub: 'Test Series & Doubt Clearing' },
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
          <div className="badge">Focused Specializations</div>
        </div>
        <h2 className="sectionTitle">Exclusively Focused on 11th, 12th, NEET & JEE</h2>
        <p className="sectionSub">
          Personal coaching program tailored specifically for Science stream excellence and top entrance exam ranks.
        </p>
        <div className={styles.grid} ref={cardsRef}>
          {categories.map((c) => {
            const IconComponent = c.icon;
            return (
              <div key={c.name} className={`${styles.card} animateEl`} data-card>
                <span className={styles.icon}>
                  <IconComponent size={28} color="#2563EB" />
                </span>
                <div className={styles.name}>{c.name}</div>
                <div className={styles.sub}>{c.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

