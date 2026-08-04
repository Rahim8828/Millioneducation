import styles from './Testimonials.module.css';

interface Testimonial {
  stars: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const studentTestis: Testimonial[] = [
  { stars: 5, text: '"My daughter was struggling with Maths in Class X. After joining My Tutor, her grades improved from 52% to 89% in just 3 months. The tutor was amazing!"', name: 'Priya Sharma', role: 'Parent, Jaipur', avatar: 'P' },
  { stars: 5, text: '"I needed a Physics tutor for JEE preparation urgently. My Tutor connected me with an IIT graduate within 24 hours. Excellent service!"', name: 'Rahul Gupta', role: 'Student, Delhi', avatar: 'R' },
  { stars: 5, text: '"The platform is very user-friendly. We got a verified tutor for our son within 2 days. The free demo class helped us decide. Highly recommend My Tutor!"', name: 'Anita Verma', role: 'Parent, Mumbai', avatar: 'A' },
  { stars: 5, text: '"My Tutor helped me find an excellent English tutor for my IELTS preparation. I scored 8.0 bands. The tutor replacement feature gave me confidence from day one."', name: 'Sneha Patel', role: 'Student, Ahmedabad', avatar: 'S' },
  { stars: 5, text: '"Very professional and trustworthy service. The tutor they provided for my Class XII daughter was extremely knowledgeable and patient. Results improved significantly!"', name: 'Manish Kumar', role: 'Parent, Bangalore', avatar: 'M' },
  { stars: 5, text: '"Got a Chemistry tutor for NEET prep in Hyderabad within 48 hours. The tutor was well-prepared, experienced and the classes were very interactive and helpful!"', name: 'Kavya Reddy', role: 'Student, Hyderabad', avatar: 'K' },
];

const tutorTestis: Testimonial[] = [
  { stars: 5, text: '"It is an amazing platform. Good platform for tutors looking for students. I got students from Bikaner city too. Thankyou for giving me an opportunity. Thank you My Tutor."', name: 'Shalini J.', role: 'Maths Tutor, Jaipur', avatar: 'S' },
  { stars: 5, text: '"Joined My Tutor 6 months ago. Now I have 8 regular students and earn ₹35,000+ per month. The onboarding was super quick and the team is always helpful. Highly recommend!"', name: 'Rahul Mehta', role: 'Physics Tutor, Delhi', avatar: 'R' },
  { stars: 5, text: '"After completing my B.Ed I was struggling to find students. My Tutor changed everything. I now teach 10+ students and have a stable monthly income. Best decision ever!"', name: 'Ananya Singh', role: 'English Tutor, Lucknow', avatar: 'A' },
];

export default function Testimonials({ variant = 'student' }: { variant?: 'student' | 'tutor' }) {
  const testis = variant === 'tutor' ? tutorTestis : studentTestis;

  return (
    <section className={styles.section} id="testimonials">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 8 }}>
          <span className={styles.orangeBadge}>{variant === 'tutor' ? 'Tutor Stories' : 'Student Reviews'}</span>
        </div>
        <h2 className={`sectionTitle ${styles.title}`}>
          Hear How My Tutor Helped Their {variant === 'tutor' ? 'Tutoring' : 'Learning'} Journey
        </h2>
        <p className={`sectionSub ${styles.sub}`}>
          Real stories from {variant === 'tutor' ? 'tutors who transformed their careers' : 'students and parents who found success'} with My Tutor.
        </p>
        <div className={styles.grid}>
          {testis.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>{'⭐'.repeat(t.stars)}</div>
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
