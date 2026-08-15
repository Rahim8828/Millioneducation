'use client';

import { useState } from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Home, 
  Laptop, 
  UserCheck, 
  CheckCircle2, 
  XCircle,
  Clock,
  Sparkles,
  Zap,
  Calendar,
  Layers,
  Table as TableIcon,
  Grid as GridIcon,
  ShieldCheck,
  ArrowRight,
  Info
} from 'lucide-react';
import styles from './Courses.module.css';

interface BatchOption {
  id: string;
  name: string;
  lectures: string;
  duration: string;
  bonus?: string;
  description: string;
  descriptionBullets?: string[];
  singleOnline: boolean;
  singleOffline: boolean;
  completeBundle: boolean;
  singleOnly?: boolean;
  badge?: string;
  recommendedFor: string;
}

const batchData: BatchOption[] = [
  {
    id: 'full-year',
    name: 'Full Year Batch',
    lectures: '96 Lectures',
    duration: '1.5 Hours / Session',
    badge: 'Most Popular',
    description: 'Complete year-long curriculum coverage with step-by-step concept building, NCERT line-by-line discussion, and regular progress tests.',
    descriptionBullets: ['Complete curriculum coverage', 'Step-by-step concept building', 'Regular progress tests'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Early starters aiming for comprehensive 100% board preparation.',
  },
  {
    id: 'semester',
    name: 'Semester Batch',
    lectures: '48 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '+10% Content Depth',
    description: 'Accelerated term-wise preparation structured to cover half-yearly and term exam modules rapidly with targeted problem solving.',
    descriptionBullets: ['Term-wise focused modules', 'Rapid exam coverage', 'Targeted problem solving'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Students seeking targeted semester-wise completion.',
  },
  {
    id: 'crash-3mo',
    name: 'Crash Course (3 Months)',
    lectures: '24 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '+20% Intensive Focus',
    badge: 'Exam Special',
    description: 'Intensive 90-day revision program focusing on high-weightage topics, key derivations, numericals, and sample paper solving.',
    descriptionBullets: ['High-weightage topics', 'Key derivations & numericals', 'Sample paper solving'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Final quarter exam revision and score enhancement.',
  },
  {
    id: 'ultra-crash',
    name: 'Ultra Crash (30 Days)',
    lectures: '8 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '+20% Rapid Sprint',
    description: 'Fast-track 30-day emergency sprint covering essential formulas, quick concept summaries, and previous years board questions.',
    descriptionBullets: ['Essential formulas & concepts', 'Quick summaries', 'Previous year questions'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Last-minute 30-day exam preparation & confidence boost.',
  },
  {
    id: 'board-repeater',
    name: 'Board Repeater (Full Year)',
    lectures: '96 Lectures',
    duration: '1.5 Hours / Session',
    bonus: '+10% In-Depth Analysis',
    description: 'Specialized full-year course for score improvement and repeaters focusing on weak-area rectifications and structured practice.',
    descriptionBullets: ['Weak area identification', 'Score improvement focus', 'Structured practice'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Improvement candidates aiming for 90%+ in board exams.',
  },
  {
    id: 'compartment-crash',
    name: 'Compartment Crash',
    lectures: '18 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '+25% Target Resolution',
    singleOnly: true,
    badge: 'Single Subject Only',
    description: 'High-priority single subject crash course designed exclusively to help students clear compartment / supplementary board exams.',
    descriptionBullets: ['Single subject focus', 'Compartment exam prep', 'Quick clearance strategy'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: false,
    recommendedFor: 'Students preparing for single-subject compartment board exams.',
  },
  {
    id: 'weekend',
    name: 'Weekend / Part-Time',
    lectures: '40 Lectures',
    duration: '1.5 Hours / Session',
    bonus: 'Standard Plan',
    description: 'Flexible weekend-only schedule (Saturday & Sunday) tailored for students with packed weekday school schedules.',
    descriptionBullets: ['Weekend schedule only', 'Flexible timing', 'Packed weekday support'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Students needing weekend-only focused 1-on-1 home/online tuition.',
  },
];

export default function Courses() {
  const [activeClass, setActiveClass] = useState<'class11' | 'class12'>('class11');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <section className={`${styles.section} sectionPadding`} id="courses">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <div className="badge">
            <GraduationCap size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            Structured Academic Batches
          </div>
        </div>
        <h2 className="sectionTitle">Class 11th & 12th Academic Programs</h2>
        <p className="sectionSub">
          Flexible, high-impact 1-on-1 tuition modules engineered for top board performance and concept mastery.
        </p>

        {/* Delivery Modes Highlight */}
        <div className={styles.modesContainer}>
          <div className={styles.modeBadge}>
            <Laptop size={18} color="#2563EB" />
            <div>
              <strong>Single Subject — Online</strong>
              <span>Live 1-on-1 Interactive</span>
            </div>
          </div>
          <div className={styles.modeBadge}>
            <Home size={18} color="#2563EB" />
            <div>
              <strong>Single Subject — Offline</strong>
              <span>At-Home Tutor Visit</span>
            </div>
          </div>
          <div className={styles.modeBadge}>
            <UserCheck size={18} color="#2563EB" />
            <div>
              <strong>Complete (3-Subj Bundle)</strong>
              <span>Physics + Chemistry + Math/Bio</span>
            </div>
          </div>
        </div>

        {/* Class Selection Tabs */}
        <div className={styles.classTabsWrapper}>
          <div className={styles.classTabs}>
            <button
              className={`${styles.tabBtn} ${activeClass === 'class11' ? styles.tabActive : ''}`}
              onClick={() => setActiveClass('class11')}
            >
              <BookOpen size={18} />
              CLASS 11 (Physics + Chemistry + Math)
            </button>
            <button
              className={`${styles.tabBtn} ${activeClass === 'class12' ? styles.tabActive : ''}`}
              onClick={() => setActiveClass('class12')}
            >
              <GraduationCap size={18} />
              CLASS 12 (Physics + Chemistry + Biology)
            </button>
          </div>

          {/* View Mode Toggle Switcher */}
          <div className={styles.viewSwitcher}>
            <button 
              className={`${styles.switchBtn} ${viewMode === 'cards' ? styles.switchActive : ''}`}
              onClick={() => setViewMode('cards')}
              title="Card View"
            >
              <GridIcon size={16} /> Grid
            </button>
            <button 
              className={`${styles.switchBtn} ${viewMode === 'table' ? styles.switchActive : ''}`}
              onClick={() => setViewMode('table')}
              title="Table View"
            >
              <TableIcon size={16} /> Matrix Table
            </button>
          </div>
        </div>

        {/* Active Class Info Banner */}
        <div className={styles.classBanner}>
          {activeClass === 'class11' ? (
            <div>
              <h3>📘 CLASS 11 — Physics, Chemistry & Mathematics</h3>
              <p>Uniform structured tenure modules for Class 11th Science board & foundational preparation. Core concepts, problem solving, and chapter tests.</p>
            </div>
          ) : (
            <div>
              <h3>📗 CLASS 12 — Physics, Chemistry & Biology</h3>
              <p>Board-focused excellence curriculum designed for maximum board scoring. (Same subject structure — Board-focused academic rigor).</p>
            </div>
          )}
        </div>

        {/* CARDS VIEW */}
        {viewMode === 'cards' && (
          <div className={styles.grid}>
            {batchData.map((batch) => (
              <div key={batch.id} className={`${styles.card} ${batch.badge ? styles.cardFeatured : ''}`}>
                {batch.badge && <span className={styles.cardTag}>{batch.badge}</span>}
                
                <div className={styles.cardHeader}>
                  <h3>{batch.name}</h3>
                  {batch.bonus && <span className={styles.bonusBadge}><Zap size={13} /> {batch.bonus}</span>}
                </div>

                <div className={styles.metricsRow}>
                  <div className={styles.metricItem}>
                    <Clock size={16} color="#2563EB" />
                    <div>
                      <span className={styles.metricLabel}>Total Lectures</span>
                      <strong className={styles.metricVal}>{batch.lectures}</strong>
                    </div>
                  </div>
                  <div className={styles.metricItem}>
                    <Calendar size={16} color="#2563EB" />
                    <div>
                      <span className={styles.metricLabel}>Session Duration</span>
                      <strong className={styles.metricVal}>{batch.duration}</strong>
                    </div>
                  </div>
                </div>

                <p className={styles.description}>{batch.description}</p>

                {batch.descriptionBullets && (
                  <ul className={styles.bulletList}>
                    {batch.descriptionBullets.map((bullet, idx) => (
                      <li key={idx}>✓ {bullet}</li>
                    ))}
                  </ul>
                )}

                <div className={styles.recommendedBox}>
                  <strong>Ideal For:</strong> {batch.recommendedFor}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* MATRIX TABLE VIEW */}
        {viewMode === 'table' && (
          <div className={styles.tableWrapper}>
            <table className={styles.matrixTable}>
              <thead>
                <tr>
                  <th>Tenure / Batch Program</th>
                  <th>Total Lectures & Duration</th>
                  <th>Single Subject — Online</th>
                  <th>Single Subject — Offline</th>
                  <th>Complete (3-Subj Bundle)</th>
                </tr>
              </thead>
              <tbody>
                {batchData.map((batch) => (
                  <tr key={batch.id}>
                    <td>
                      <div className={styles.tableNameCell}>
                        <strong>{batch.name}</strong>
                        {batch.bonus && <span className={styles.bonusPill}>{batch.bonus}</span>}
                      </div>
                    </td>
                    <td>
                      <div className={styles.tableMetaCell}>
                        <span><strong>{batch.lectures}</strong> ({batch.duration})</span>
                      </div>
                    </td>
                    <td>
                      <span className={styles.statusAvailable}><CheckCircle2 size={16} /> Available</span>
                    </td>
                    <td>
                      <span className={styles.statusAvailable}><CheckCircle2 size={16} /> Available</span>
                    </td>
                    <td>
                      {batch.completeBundle ? (
                        <span className={styles.statusAvailable}><CheckCircle2 size={16} /> Available</span>
                      ) : (
                        <span className={styles.statusNa}><XCircle size={16} /> Single Subject Only</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Features & Call to action */}
        <div className={styles.bottomBar}>
          <div className={styles.bottomNote}>
            <Info size={20} color="#2563EB" style={{ flexShrink: 0 }} />
            <p>
              <strong>Note:</strong> Lecture counts and subject structures apply uniformly across Physics, Chemistry, Mathematics & Biology. Schedule timings and personalized learning plans are configured after a free 1-on-1 assessment.
            </p>
          </div>
          
          <div className={styles.actionCta}>
            <a href="tel:+919004826378" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              📚 Book A Free Demo Class
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
