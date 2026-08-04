import styles from './MediaLogos.module.css';

export default function MediaLogos() {
  return (
    <>
      <section className="sectionPadding" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="badge">Registered With</div>
          </div>
          <h2 className="sectionTitle" style={{ marginBottom: 36 }}>Registered & Recognized</h2>
          <div className={styles.logosGrid}>
            <div className={styles.logoPill}>🏛️ Startup India</div>
            <div className={styles.logoPill}>🏢 MSME</div>
            <div className={styles.logoPill}>🌐 INC42</div>
            <div className={styles.logoPill}>📱 Google for Startups</div>
            <div className={styles.logoPill}>🔐 ISO Certified</div>
          </div>
        </div>
      </section>

      <section className="sectionPadding" style={{ background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }}>
            <div className="badge">Press</div>
          </div>
          <h2 className="sectionTitle" style={{ marginBottom: 36 }}>In The Media</h2>
          <div className={styles.logosGrid}>
            <div className={styles.logoPill}>📰 Rajasthan Patrika</div>
            <div className={styles.logoPill}>🗞️ Hindustan Times</div>
            <div className={styles.logoPill}>📺 Amar Ujala</div>
            <div className={styles.logoPill}>🌐 Times of India</div>
            <div className={styles.logoPill}>📻 NDTV</div>
            <div className={styles.logoPill}>🗞️ The Tribune</div>
          </div>
        </div>
      </section>
    </>
  );
}
