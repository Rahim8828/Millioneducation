import { Zap, Gift, UserCheck, Calendar, ShieldCheck, CreditCard } from 'lucide-react';
import styles from './TutorFeatures.module.css';

const features = [
  { icon: Zap, title: 'Quick Onboarding', desc: 'Our tutor onboarding process with simple steps gets you through the process quickly, hassle-free and efficient.' },
  { icon: Gift, title: 'Zero Member Fee', desc: 'We believe in connecting tutors and students seamlessly, making joining straightforward without any financial barriers.' },
  { icon: UserCheck, title: 'Verified Students', desc: 'Students who have been thoroughly verified by our team. We ensure providing safe and reliable student connections.' },
  { icon: Calendar, title: 'Guaranteed Classes', desc: 'Experience a consistent and uninterrupted flow of teaching opportunities, keeping you a stable income stream.' },
  { icon: ShieldCheck, title: 'Easy Verification', desc: 'Experience a simple and straightforward verification process, making your journey to teaching excellence seamless.' },
  { icon: CreditCard, title: 'Easy Payment', desc: 'Get paid on time, every time. Our secure payment system ensures you receive your earnings without any hassle.' },
];

export default function TutorFeatures() {
  return (
    <section className={`${styles.section} sectionPadding`} id="features">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="badge">Why My Tutor?</div>
        </div>
        <h2 className="sectionTitle">Everything You Need to Succeed as a Specialist Mentor</h2>
        <p className="sectionSub">We make your tutoring journey smooth, profitable and rewarding from day one.</p>
        <div className={styles.grid}>
          {features.map((f) => {
            const IconComponent = f.icon;
            return (
              <div key={f.title} className={styles.card}>
                <div className={styles.icon}>
                  <IconComponent size={24} color="#f97316" />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

