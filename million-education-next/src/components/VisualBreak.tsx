'use client';

import styles from './VisualBreak.module.css';
import { TrendingUp, Users, Zap } from 'lucide-react';

export default function VisualBreak() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Why Top Science Students Choose Million Education</h2>
            <p>
              Thousands of Class 11, Class 12, NEET & JEE aspirants have transformed their academic performance through our personalized 1-on-1 coaching model.
            </p>
            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <Zap size={20} />
                <span>Personalized learning paths</span>
              </div>
              <div className={styles.highlight}>
                <TrendingUp size={20} />
                <span>Proven rank improvement track record</span>
              </div>
              <div className={styles.highlight}>
                <Users size={20} />
                <span>Expert-matched faculty pairing</span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.statGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNum}>10K+</div>
                <div className={styles.statLabel}>Successful Students</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>4.9★</div>
                <div className={styles.statLabel}>Average Rating</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>1500+</div>
                <div className={styles.statLabel}>Expert Tutors</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNum}>8+</div>
                <div className={styles.statLabel}>Years Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
