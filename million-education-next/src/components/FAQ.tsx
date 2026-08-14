'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';

interface FAQItem { q: string; a: string; }

const studentFaqs: FAQItem[] = [
  { q: 'How does 1-on-1 mentorship for 11th, 12th, NEET & JEE work?', a: 'You submit your target course (Class 11/12 Science, NEET or JEE). We match you with an expert subject specialist (IITians/Medical faculty). You get a FREE live demo session before finalizing your schedule.' },
  { q: 'Are home tuition and online options available for NEET/JEE in Mumbai?', a: 'Yes! We offer 1-on-1 Home Tuitions across Mumbai (Andheri, Bandra, Powai, Thane, Navi Mumbai, South Mumbai, etc.) as well as Live Online 1-on-1 interactive classes.' },
  { q: 'What is included in the complete PCM/PCB course?', a: 'It includes complete Physics, Chemistry, Maths/Biology coverage, weekly tests, NCERT mastery, PYQs, doubt solving support, digital PDF notes, performance tracking, and parent review meetings.' },
  { q: 'Can I opt for single-subject or chapter-wise tuition?', a: 'Yes, if you only need help in a single subject (e.g. Physics for JEE or Biology for NEET) or specific chapters, we offer customized single-subject and chapter-wise modules.' },
  { q: 'Is there a free demo class available?', a: 'Yes, every student gets a FREE Academic Counselling Session and 1-on-1 Demo Class before enrollment to evaluate faculty compatibility.' },
  { q: 'What are the payment options?', a: 'We offer flexible payment options including full payment as well as 2, 3, or 4 installment plans via UPI, Bank Transfer, or Cash.' },
];

const tutorFaqs: FAQItem[] = [
  { q: 'What qualifications do I need to teach 11th, 12th, NEET or JEE?', a: 'We require strong subject knowledge in Physics, Chemistry, Maths or Biology. B.Tech/M.Tech, M.Sc, B.Ed, or competitive exam crackers (IIT/NEET qualifiers) are preferred.' },
  { q: 'Can I teach both Home Tuitions and Online Classes?', a: 'Yes, you can choose your preferred teaching mode — Home Tuition, Live 1-on-1 Online, or both — based on your convenience.' },
  { q: 'How do I receive student leads for NEET/JEE coaching?', a: 'Once verified by our academic team, you will receive direct 1-on-1 student mentorship requirements matching your expertise and location.' },
  { q: 'Is registration free for faculty members?', a: 'Yes, registration on Million Education is 100% free with zero membership fees.' },
];

export default function FAQ({ variant = 'student' }: { variant?: 'student' | 'tutor' }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = variant === 'tutor' ? tutorFaqs : studentFaqs;

  return (
    <section className={`${styles.section} sectionPadding`} id="faq">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="badge">Got Questions?</div>
        </div>
        <h2 className="sectionTitle">Frequently Asked Questions</h2>
        <p className="sectionSub">Everything you need to know about {variant === 'tutor' ? 'joining Million Education as a faculty mentor' : 'our 11th, 12th, NEET & JEE 1-on-1 programs'}.</p>
        <div className={styles.list}>
          {faqs.map((f, i) => (
            <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {f.q}
                <span className={styles.icon}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {openIndex === i && (
                <div className={styles.answer}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

