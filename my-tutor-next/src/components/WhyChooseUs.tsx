import styles from './WhyChooseUs.module.css';

const reasons = [
  { icon: '👨‍🏫', title: 'Dedicated Tutors', desc: 'Every tutor on our platform is dedicated, passionate, and committed to helping your child achieve their academic goals.' },
  { icon: '🎯', title: 'Hassle-Free Tutor Selection', desc: 'We make finding the right tutor effortless. Browse, compare and connect — all within minutes.' },
  { icon: '✅', title: 'Verified Tutors', desc: 'All tutors are thoroughly background-verified by our team. We ensure a safe and reliable tutoring experience.' },
  { icon: '🌐', title: 'Offline & Online', desc: 'Choose between home tutoring at your doorstep or convenient online classes — whichever works best for you.' },
  { icon: '🔄', title: 'Tutor Replacement', desc: 'Not happy with your tutor? We offer seamless tutor replacement at no additional cost, ensuring your satisfaction.' },
  { icon: '🛡️', title: 'Safe & Secure', desc: "Your child's safety is our top priority. Every tutor undergoes strict background checks before joining our platform." },
];

export default function WhyChooseUs() {
  return (
    <section className={`${styles.section} sectionPadding`}>
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="badge">Why My Tutor?</div>
        </div>
        <h2 className="sectionTitle">Here&apos;s what makes us a trusted partner in your child&apos;s learning journey</h2>
        <p className="sectionSub">Thousands of families trust My Tutor to find the perfect tutor for their children. Here&apos;s why.</p>
        <div className={styles.grid}>
          {reasons.map((r) => (
            <div key={r.title} className={styles.card}>
              <div className={styles.icon}>{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
