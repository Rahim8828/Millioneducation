import styles from './CityLinks.module.css';

export default function CityLinks() {
  const targetLinks = [
    'Physics Specialist',
    'Chemistry Specialist',
    'Mathematics Specialist',
    'Biology Specialist',
    'Class 11 Science Tutor',
    'Class 12 Science Tutor',
    'NEET Mentorship Tutor',
    'JEE Main & Advanced Tutor',
    'PCM Combo Specialist',
    'PCB Combo Specialist',
    'CBSE Board Specialist',
    'NCERT Concept Tutor',
  ];

  const mumbaiRegions = [
    'Andheri & Juhu',
    'Bandra & Khar',
    'Borivali & Kandivali',
    'Powai & Ghatkopar',
    'South Mumbai (Worli, Dadar, Colaba)',
    'Thane & Mulund',
    'Navi Mumbai (Vashi, Nerul)',
  ];

  return (
    <section className="sectionPadding" style={{ background: 'var(--white)' }}>
      <div className="container">
        <h2 className="sectionTitle">Home & Online Tuitions Across Mumbai</h2>
        <p className="sectionSub">1-on-1 Personalized Mentorship for 11th, 12th, NEET & JEE in all major Mumbai locations.</p>
        
        {mumbaiRegions.map((regionName) => (
          <div key={regionName} style={{ marginBottom: 32 }}>
            <h3 className={styles.cityTitle}>Home Tutors in {regionName}</h3>
            <div className={styles.cityLinks}>
              {targetLinks.map((link, i) => (
                <a key={i} className={styles.cityLink} href="/courses">
                  {regionName.split(' ')[0]} {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


