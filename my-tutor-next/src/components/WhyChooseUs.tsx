import { UserCheck, Target, ShieldCheck, Globe, RefreshCw, Lock } from 'lucide-react';
import styles from './WhyChooseUs.module.css';

const reasons = [
  { icon: UserCheck, title: 'Expert Faculty', desc: 'Subject specialists experienced in CBSE/State Boards, NEET, and JEE coaching.' },
  { icon: Target, title: 'Focused Mentorship', desc: 'Customized learning strategy focused on concept building, PYQs, and rank improvement.' },
  { icon: ShieldCheck, title: 'Verified Tutors', desc: 'All tutors undergo rigorous academic & background checks before mentoring students.' },
  { icon: Globe, title: 'Home & Live Online', desc: 'Choose 1-on-1 home tuition at your residence or interactive live online sessions.' },
  { icon: RefreshCw, title: 'Tutor Replacement', desc: 'Seamless faculty replacement at no extra cost if you feel the compatibility isn\'t perfect.' },
  { icon: Lock, title: 'Progress Tracking', desc: 'Regular mock test analysis, weekly assignments, and monthly parent feedback sessions.' },
];

export default function WhyChooseUs() {
  return (
    <section className={`${styles.section} sectionPadding`}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="badge">Why Million Education?</div>
        </div>
        <h2 className="sectionTitle">Trusted Partner for 11th, 12th, NEET & JEE Success</h2>
        <p className="sectionSub">Empowering science stream students with dedicated 1-on-1 personal mentorship.</p>
        <div className={styles.grid}>
          {reasons.map((r) => {
            const IconComponent = r.icon;
            return (
              <div key={r.title} className={styles.card}>
                <div className={styles.icon}>
                  <IconComponent size={24} color="#f97316" />
                </div>
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

