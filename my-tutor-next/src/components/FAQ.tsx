'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem { q: string; a: string; }

const studentFaqs: FAQItem[] = [
  { q: 'How does the process work?', a: 'Simply submit your requirement — subject, class, location and schedule. Our team will shortlist the best matching verified tutors and send you their profiles within 24 hours. You can then choose one and arrange a free demo class before confirming.' },
  { q: 'Is there a demo class available?', a: 'Yes! We provide a free demo class before you confirm your tutor. This gives you a chance to evaluate the tutor\'s teaching style, knowledge and compatibility with your child before committing.' },
  { q: 'What subjects and classes do you cover?', a: 'We cover all subjects from Class I to XII including Maths, Science, Physics, Chemistry, Biology, English, Hindi, Social Studies, and more. We also provide tutors for competitive exams like JEE, NEET, IELTS, TOEFL, and college-level subjects.' },
  { q: 'How much is the tuition fee?', a: 'Tuition fees vary based on the class level, subject, tutor\'s qualifications, and location. We offer flexible pricing to suit every budget. Contact us for a customized fee structure.' },
  { q: 'How do you verify your tutors?', a: 'Every tutor undergoes a strict background verification process including identity verification, educational qualification checks, and a personal interview by our team. Only tutors who pass all checks are allowed on our platform.' },
  { q: 'How much does My Tutor charge?', a: 'Registration is completely free for students. You only pay the tutor\'s fee after a successful demo class and confirmation. There are no hidden charges.' },
];

const tutorFaqs: FAQItem[] = [
  { q: 'How do I find home tuition jobs near me?', a: 'Simply register on My Tutor by filling out the form above. Once verified, you\'ll start receiving student enquiries matching your subject, class and location preferences directly on WhatsApp and through the platform.' },
  { q: 'How much can I earn as a home tuition teacher?', a: 'Earnings depend on the subjects you teach, class level, your qualifications and the number of students. On average, tutors on My Tutor earn between ₹20,000 to ₹50,000 per month. Many experienced tutors earn even more.' },
  { q: 'Is there any registration fee to join My Tutor?', a: 'No, registration on My Tutor is completely free. We have zero membership fees. You can register, get verified and start receiving student leads at absolutely no cost.' },
  { q: 'Can I work as a part-time tuition teacher while doing a regular job?', a: 'Absolutely! Many tutors on our platform teach part-time alongside their regular jobs. You set your own schedule and availability — teach in the mornings, evenings or on weekends, whatever suits you.' },
  { q: 'Is there high demand for home tuition teachers?', a: 'Yes, the demand for qualified home tutors across India is extremely high. Thousands of parents actively look for home tutors every month. With My Tutor, you get direct access to this large student base.' },
  { q: 'Do I need teaching experience to apply for tuition?', a: 'No prior teaching experience is required to join My Tutor. If you have the subject knowledge and a passion for teaching, we welcome you. Our platform supports both experienced and first-time tutors.' },
  { q: 'How does My Tutor verify tuition teachers?', a: 'We verify tutors through identity verification (Aadhaar/PAN), educational qualification checks, and a brief personal interview. This process typically takes 24–48 hours.' },
  { q: 'Can I teach subjects only or one-on-one?', a: 'You can teach in various formats — one-on-one home tuition, group tuition, or online classes. You can also use various strategies to keep students engaged and motivated while achieving their goals.' },
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
        <p className="sectionSub">Everything you need to know about {variant === 'tutor' ? 'joining My Tutor as a tutor' : 'finding a tutor through My Tutor'}.</p>
        <div className={styles.list}>
          {faqs.map((f, i) => (
            <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {f.q}
                <span className={styles.icon}>{openIndex === i ? '−' : '+'}</span>
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
