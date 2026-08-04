import styles from './HowItWorks.module.css';

interface Step { num: number; icon: string; title: string; desc: string; }

const studentSteps: Step[] = [
  { num: 1, icon: '📋', title: 'Submit Requirement', desc: 'Tell us your subject, class, location and preferred schedule.' },
  { num: 2, icon: '🔍', title: 'Shortlist Tutors', desc: 'We shortlist the best-matched verified tutors and send you their profiles.' },
  { num: 3, icon: '💳', title: 'Happy Payment', desc: 'Confirm your tutor after a free demo class and proceed with easy payment.' },
  { num: 4, icon: '🎓', title: 'Infinite Tuition', desc: 'Enjoy uninterrupted learning with your dedicated tutor at your convenience.' },
];

const tutorSteps: Step[] = [
  { num: 1, icon: '📝', title: 'Register Online', desc: 'Fill the simple registration form with your details, qualifications and preferences.' },
  { num: 2, icon: '✅', title: 'Get Verified', desc: 'Our team will verify your identity and qualifications within 24–48 hours.' },
  { num: 3, icon: '🔔', title: 'Receive Student Leads', desc: 'Start receiving student enquiries matching your subject expertise and location.' },
  { num: 4, icon: '💰', title: 'Start Earning', desc: 'Begin teaching and earn ₹20K–₹50K per month right from home or anywhere.' },
];

export default function HowItWorks({ variant = 'student' }: { variant?: 'student' | 'tutor' }) {
  const steps = variant === 'tutor' ? tutorSteps : studentSteps;
  const title = variant === 'tutor' ? 'How to Get Started as a Tutor' : 'Simple, Fast & Effective';
  const sub = variant === 'tutor'
    ? 'Join thousands of tutors earning great income with My Tutor in just a few steps.'
    : 'Get a qualified home tutor in just a few easy steps. It\'s that simple!';

  return (
    <section className={`${styles.section} sectionPadding`} id="how-it-works">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="badge">{variant === 'tutor' ? 'Simple Steps' : 'Simple Process'}</div>
        </div>
        <h2 className="sectionTitle">{title}</h2>
        <p className="sectionSub">{sub}</p>
        <div className={styles.grid}>
          {steps.map((s) => (
            <div key={s.num} className={styles.card}>
              <div className={styles.num}>{s.num}</div>
              <div className={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
