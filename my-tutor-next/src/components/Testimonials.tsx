import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

interface Testimonial {
  stars: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const studentTestis: Testimonial[] = [
  { stars: 5, text: '"My son needed intense 1-on-1 Physics & Maths coaching for JEE Main. The mentor provided by My Tutor in Andheri was an IITian who transformed his problem-solving speed completely!"', name: 'Priya Sharma', role: 'Parent, Andheri West, Mumbai', avatar: 'P' },
  { stars: 5, text: '"I took the NEET Premium Mentorship for Class 12 Biology & Chemistry. The regular PYQ practice and mock test reviews were instrumental in securing my NEET rank."', name: 'Rahul Gupta', role: 'NEET Aspirant, Bandra, Mumbai', avatar: 'R' },
  { stars: 5, text: '"Finding a dedicated Home Tutor for Class 11 PCM in Powai was seamless. The free demo class convinced us immediately, and the weekly progress reports keep us updated."', name: 'Anita Verma', role: 'Parent, Powai, Mumbai', avatar: 'A' },
  { stars: 5, text: '"The 1-on-1 Chemistry doubt sessions helped me convert my weakest subject into my highest scoring one in CBSE Class 12 Board exams!"', name: 'Sneha Patel', role: 'Class 12 Student, Thane, Mumbai', avatar: 'S' },
  { stars: 5, text: '"Extremely satisfied with the personalized study plan for JEE Advanced Mathematics. Top-notch faculty with deep concept clarity in South Mumbai."', name: 'Manish Kumar', role: 'Parent, South Mumbai', avatar: 'M' },
  { stars: 5, text: '"Got a dedicated 1-on-1 NEET Biology mentor in Navi Mumbai. The NCERT mastery approach and chapter-wise tests gave me huge confidence."', name: 'Kavya Reddy', role: 'NEET Aspirant, Navi Mumbai', avatar: 'K' },
];

const tutorTestis: Testimonial[] = [
  { stars: 5, text: '"Mentoring Class 11 & 12 JEE aspirants through My Tutor in Mumbai has been deeply rewarding. The platform connects me with serious, dedicated students."', name: 'Dr. Shalini J.', role: 'Senior Physics Mentor, Mumbai', avatar: 'S' },
  { stars: 5, text: '"As a NEET Biology specialist, My Tutor gave me direct access to 1-on-1 mentorship leads across Mumbai. Highly professional organization!"', name: 'Rahul Mehta', role: 'NEET Biology Faculty, Mumbai', avatar: 'R' },
  { stars: 5, text: '"Teaching 1-on-1 Mathematics for Class 12 Boards and JEE Main in Mumbai has given me a flexible, fulfilling career with excellent income stability."', name: 'Ananya Singh', role: 'Maths Specialist, Mumbai', avatar: 'A' },
];

export default function Testimonials({ variant = 'student' }: { variant?: 'student' | 'tutor' }) {
  const testis = variant === 'tutor' ? tutorTestis : studentTestis;

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <span className={styles.orangeBadge}>{variant === 'tutor' ? 'Faculty Stories' : 'Student Success Stories'}</span>
        </div>
        <h2 className={`sectionTitle ${styles.title}`}>
          {variant === 'tutor' ? 'Transforming Education Through 1-on-1 Mentorship' : 'Proven Results in 11th, 12th, NEET & JEE'}
        </h2>
        <p className={`sectionSub ${styles.sub}`}>
          Real feedback from {variant === 'tutor' ? 'specialist faculty members' : 'students & parents who achieved top ranks'} with My Tutor.
        </p>
        <div className={styles.grid}>
          {testis.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" style={{ marginRight: 2, display: 'inline-block' }} />
                ))}
              </div>
              <p className={styles.text}>{t.text}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

