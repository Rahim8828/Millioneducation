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
  Zap,
  Calendar,
  Table as TableIcon,
  Grid as GridIcon,
  Info,
  Stethoscope
} from 'lucide-react';
import styles from './Courses.module.css';

interface NEETBatchOption {
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
  badge?: string;
  recommendedFor: string;
}

const neetBatchData: NEETBatchOption[] = [
  {
    id: 'full-year-neet',
    name: 'Full Year Batch',
    lectures: '96 Lectures',
    duration: '1.5 Hours / Session',
    badge: 'Most Popular',
    description: 'Complete NEET preparation covering Physics, Chemistry & Biology with emphasis on NCERT mastery, concept clarity, and PYQ (Previous Year Questions) solving. Designed for students starting early with comprehensive foundation building.',
    descriptionBullets: ['NCERT mastery & clarity', 'Previous year questions', 'Foundation building'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Early NEET aspirants targeting thorough concept mastery and high NEET ranking.',
  },
  {
    id: 'semester-neet',
    name: 'Semester Batch',
    lectures: '48 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '+10% Depth & Rigor',
    description: 'Accelerated semester-wise NEET curriculum structured for faster coverage. Ideal for students who want to complete syllabus quickly while maintaining concept depth and topic-wise practice tests.',
    descriptionBullets: ['Faster syllabus coverage', 'Concept depth maintained', 'Topic-wise practice tests'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Mid-journey NEET aspirants seeking faster completion with rigorous practice.',
  },
  {
    id: 'crash-3mo-neet',
    name: 'Crash Course (3 Months)',
    lectures: '24 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '+20% Intensive Focus',
    badge: 'Exam Special',
    description: 'Intensive 90-day NEET revision program focusing on high-weightage topics, important chapters, derivative-based questions, and comprehensive mock test solving sessions.',
    descriptionBullets: ['High-weightage topics', 'Mock test solving', 'Derivative questions'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Final quarter revision and strategy-based score maximization.',
  },
  {
    id: 'ultra-crash-neet',
    name: 'Ultra Crash (30 Days)',
    lectures: '8 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '+20% Rapid Sprint',
    description: 'Last-minute 30-day NEET sprint covering most critical topics, formula-based questions, and final mock test reviews with doubt clearing sessions.',
    descriptionBullets: ['Critical topics focus', 'Formula-based questions', 'Doubt clearing'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Emergency NEET preparation in final month with focus on high-scoring topics.',
  },
  {
    id: 'dropper-neet',
    name: 'Dropper / NEET Repeater Batch',
    lectures: '96 Lectures',
    duration: '1.5 Hours / Session',
    bonus: '+10% Advanced Analysis',
    description: 'Specialized full-year batch for NEET droppers and previous attempt repeaters. Includes weak-area identification, advanced problem-solving techniques, and personalized strategy sessions.',
    descriptionBullets: ['Weak-area identification', 'Advanced problem-solving', 'Strategy sessions'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'NEET repeaters targeting significant score improvement and higher ranking.',
  },
  {
    id: 'subject-specific-neet',
    name: 'Subject-Specific (Single Subject)',
    lectures: '48 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '+15% Specialization',
    description: 'Focused single-subject NEET preparation (Biology, Chemistry, or Physics). Deep-dive into complex topics with high question frequency in NEET exams.',
    descriptionBullets: ['Single subject focus', 'High-frequency topics', 'Deep concept dive'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: false,
    recommendedFor: 'Students needing subject-specific strength building in weak areas.',
  },
  {
    id: 'combo-class12-neet',
    name: 'Class 12 Board + NEET Combo',
    lectures: '120 Lectures',
    duration: '1.5-2.0 Hours / Session',
    bonus: '~13% Value Top-up',
    description: 'Integrated program combining Class 12 CBSE/State board preparation with NEET-specific strategy. Perfect for students aiming for both board excellence and NEET success.',
    descriptionBullets: ['Board + NEET integrated', 'Dual excellence focus', 'Strategic preparation'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    badge: 'Best Value',
    recommendedFor: 'Class 12 students targeting 90%+ boards and NEET selection simultaneously.',
  },
  {
    id: 'weekend-neet',
    name: 'Weekend / Part-Time',
    lectures: '40 Lectures',
    duration: '1.5 Hours / Session',
    bonus: 'Flexible Schedule',
    description: 'Weekend-only NEET preparation (Saturday & Sunday) for students balancing school, coaching, or other commitments. Maintains consistency without weekday pressure.',
    descriptionBullets: ['Weekend-only schedule', 'Flexible timing', 'No weekday pressure'],
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Working professionals or students with packed weekday schedules.',
  },
];

export default function CourseNEET() {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');
  const [expandedBatches, setExpandedBatches] = useState<Set<string>>(
    new Set()
  );

  return (
    <section className={`${styles.section} sectionPadding`} id="neet-courses">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <div className="badge">
            <Stethoscope size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            NEET UG Preparation Programs
          </div>
        </div>
        <h2 className="sectionTitle">NEET UG 1-on-1 Personal Coaching Programs</h2>
        <p className="sectionSub">
          Science-focused, rank-engineered personal coaching for NEET aspirants. Expert guidance in Physics, Chemistry & Biology with emphasis on conceptual mastery and competitive exam strategy.
        </p>

        {/* Delivery Modes Highlight */}
        <div className={styles.modesContainer}>
          <div className={styles.modeBadge}>
            <Laptop size={18} color="#2563EB" />
            <div>
              <strong>Online Interactive</strong>
              <span>Live 1-on-1 Sessions</span>
            </div>
          </div>
          <div className={styles.modeBadge}>
            <Home size={18} color="#2563EB" />
            <div>
              <strong>Home Coaching Program</strong>
              <span>At-Residence Tutor</span>
            </div>
          </div>
          <div className={styles.modeBadge}>
            <UserCheck size={18} color="#2563EB" />
            <div>
              <strong>Complete (3-Subject)</strong>
              <span>Physics + Chemistry + Biology</span>
            </div>
          </div>
        </div>

        {/* View Mode Toggle Switcher */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '24px' }}>
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
          <div>
            <h3>🏥 NEET UG — Physics, Chemistry & Biology (Medical)</h3>
            <p>Comprehensive NEET preparation with doctor-level expertise from MBBS specialists and medical faculty. Every session focuses on high-frequency NEET topics, clinical reasoning, and doubt resolution for All India Medical entrance success. Our Chemistry and Biology mentors hold MBBS/MD degrees for premium medical insights.</p>
          </div>
        </div>

        {/* CARDS VIEW */}
        {viewMode === 'cards' && (
          <div className={styles.grid}>
            {neetBatchData.map((batch) => {
              const isExpanded = expandedBatches.has(batch.id);
              const isHidden = batch.id !== 'full-year-neet' && batch.id !== 'semester-neet' && batch.id !== 'crash-3mo-neet' && !isExpanded;
              
              return isHidden ? null : (
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
              );
            })}
          </div>
        )}

        {/* Show More Button */}
        {viewMode === 'cards' && neetBatchData.length > 3 && (
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <button
              onClick={() => {
                const allIds = new Set(neetBatchData.map(b => b.id));
                if (expandedBatches.size === allIds.size) {
                  // Collapse to default
                  setExpandedBatches(new Set(['full-year-neet', 'semester-neet', 'crash-3mo-neet']));
                } else {
                  // Expand all
                  setExpandedBatches(allIds);
                }
              }}
              style={{
                background: '#2563EB',
                color: 'white',
                border: 'none',
                padding: '10px 24px',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = '#1d4ed8')}
              onMouseOut={(e) => (e.currentTarget.style.background = '#2563EB')}
            >
              {expandedBatches.size === neetBatchData.length ? '▲ Show Less Options' : '▼ Show More Options'}
            </button>
          </div>
        )}

        {/* MATRIX TABLE VIEW */}
        {viewMode === 'table' && (
          <div className={styles.tableWrapper}>
            <table className={styles.matrixTable}>
              <thead>
                <tr>
                  <th>NEET Program / Tenure</th>
                  <th>Total Lectures & Duration</th>
                  <th>Single Subject — Online</th>
                  <th>Single Subject — Offline</th>
                  <th>Complete (3-Subject)</th>
                </tr>
              </thead>
              <tbody>
                {neetBatchData.map((batch) => (
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
              <strong>Note:</strong> All NEET programs are NCERT-focused with emphasis on conceptual clarity. Lecture counts include live doubt sessions, mock test reviews, and personalized feedback. Individual mentor selection based on subject specialization happens after free consultation.
            </p>
          </div>
          
          <div className={styles.actionCta}>
            <a href="tel:+919004826378" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              🎯 Book NEET Consultation & Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
