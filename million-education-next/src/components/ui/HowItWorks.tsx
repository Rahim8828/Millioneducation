import { 
  FileText, 
  Search, 
  CreditCard, 
  GraduationCap, 
  UserPlus, 
  ShieldCheck, 
  Bell, 
  TrendingUp 
} from 'lucide-react';
import styles from './HowItWorks.module.css';

interface Step { num: number; icon: any; title: string; desc: string; }

const studentSteps: Step[] = [
  { num: 1, icon: FileText, title: 'Submit Course Requirement', desc: 'Specify Class (11th/12th), Subject combination (PCM/PCB) or Entrance Exam (NEET/JEE).' },
  { num: 2, icon: Search, title: 'Free Counselling & Demo Class', desc: 'Get matched with top subject experts and evaluate their teaching style in a free live demo.' },
  { num: 3, icon: CreditCard, title: 'Customize & Enroll', desc: 'Finalize your personalized study schedule and choose flexible installment payment options.' },
  { num: 4, icon: GraduationCap, title: '1-on-1 Personal Coaching & Success', desc: 'Enjoy weekly tests, PYQ practice, doubt clearing, and continuous performance tracking.' },
];

const tutorSteps: Step[] = [
  { num: 1, icon: UserPlus, title: 'Register as Faculty', desc: 'Submit your qualifications and subject expertise in Physics, Chemistry, Maths or Biology.' },
  { num: 2, icon: ShieldCheck, title: 'Academic Verification', desc: 'Our team verifies your academic credentials and teaching capability for 11th/12th & Entrance levels.' },
  { num: 3, icon: Bell, title: 'Receive Coaching Leads', desc: 'Get matched with serious students looking for 1-on-1 Home or Online coaching.' },
  { num: 4, icon: TrendingUp, title: 'Start Mentoring & Earning', desc: 'Deliver impactful 1-on-1 sessions and earn competitive rewards matching your expertise.' },
];

export default function HowItWorks({ variant = 'student' }: { variant?: 'student' | 'tutor' }) {
  const steps = variant === 'tutor' ? tutorSteps : studentSteps;
  const title = variant === 'tutor' ? 'Join as a Specialist Mentor' : 'Simple 4-Step Learning Journey';
  const sub = variant === 'tutor'
    ? 'Connect with top students aiming for Board excellence and NEET/JEE success.'
    : 'Getting dedicated 1-on-1 personal coaching for 11th, 12th, NEET & JEE is quick and hassle-free.';

  return (
    <section className={`${styles.section} sectionPadding`} id="how-it-works">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="badge">{variant === 'tutor' ? 'Faculty Portal' : 'How It Works'}</div>
        </div>
        <h2 className="sectionTitle">{title}</h2>
        <p className="sectionSub">{sub}</p>
        <div className={styles.grid}>
          {steps.map((s) => {
            const IconComponent = s.icon;
            return (
              <div key={s.num} className={styles.card}>
                <div className={styles.icon}>
                  <IconComponent size={24} color="#2563EB" />
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

