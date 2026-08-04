import styles from './CityLinks.module.css';

export default function CityLinks() {
  const cities = [
    { name: 'Bangalore', links: ['10th Maths Tutor', 'Physics Tutor', 'Chemistry Tutor', 'Biology Tutor', 'English Tutor', 'Science Tutor', 'Class 8 Tutor', 'Class 9 Tutor', 'Class 10 Tutor', 'Class 11 Tutor', 'Class 12 Tutor', 'CBSE Tutor', 'ICSE Tutor', 'Maths Tutor', 'Hindi Tutor'] },
    { name: 'Delhi', links: ['10th Maths Tutor', 'Physics Tutor', 'Chemistry Tutor', 'Biology Tutor', 'English Tutor', 'Class 9 Tutor', 'Class 10 Tutor', 'JEE Tutor', 'NEET Tutor', 'IIT Tutor', 'CBSE Tutor', 'Maths Tutor'] },
    { name: 'Mumbai', links: ['Maths Tutor', 'Science Tutor', 'English Tutor', 'ICSE Tutor', 'Class 10 Tutor', 'Class 12 Tutor', 'Hindi Tutor', 'Sanskrit Tutor', 'Economics Tutor', 'Commerce Tutor'] },
    { name: 'Jaipur', links: ['Maths Tutor', 'Science Tutor', 'English Tutor', 'Hindi Tutor', 'RBSE Tutor', 'Class 10 Tutor', 'Class 12 Tutor', 'Physics Tutor', 'Chemistry Tutor', 'Biology Tutor'] },
    { name: 'Hyderabad', links: ['Maths Tutor', 'Physics Tutor', 'Chemistry Tutor', 'Biology Tutor', 'NEET Tutor', 'JEE Tutor', 'Class 10 Tutor', 'Class 12 Tutor', 'Telugu Tutor', 'English Tutor'] },
  ];

  return (
    <section className="sectionPadding" style={{ background: 'var(--white)' }}>
      <div className="container">
        {cities.map((c) => (
          <div key={c.name} style={{ marginBottom: 32 }}>
            <h2 className={styles.cityTitle}>Home Tutors in {c.name}</h2>
            <div className={styles.cityLinks}>
              {c.links.map((l, i) => (
                <a key={i} className={styles.cityLink} href="#">{l}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
