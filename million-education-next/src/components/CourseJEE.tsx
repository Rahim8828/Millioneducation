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
  Info,
  Lightbulb
} from 'lucide-react';
import styles from './Courses.module.css';

interface JEEBatchOption {
  id: string;
  name: string;
  lectures: string;
  duration: string;
  bonus?: string;
  description: string;
  singleOnline: boolean;
  singleOffline: boolean;
  completeBundle: boolean;
  badge?: string;
  recommendedFor: string;
}

const jeeBatchData: JEEBatchOption[] = [
  {
    id: 'full-year-jee',
    name: 'Full Year Batch',
    lectures: '120 Lectures',
    duration: '1.5-2.0 Hours / Session',
    badge: 'Most Popular',
    description: 'Comprehensive JEE Main & Advanced preparation covering Physics, Chemistry & Mathematics. In-depth conceptual mastery, advanced problem-solving, derivation techniques, and competitive-level numericals with regular PYQ solving.',
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Early JEE aspirants (Class 11 start) targeting IIT admission through consistent concept building.',
  },
  {
    id: 'semester-jee',
    name: 'Semester Batch',
    lectures: '60 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '+10% Advanced Topics',
    description: 'Accelerated semester-wise JEE curriculum structured for systematic coverage. Includes advanced derivations, tough problem-solving sessions, and regular mock tests aligned with JEE pattern.',
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Mid-journey JEE aspirants seeking faster completion with maintained rigor.',
  },
  {
    id: 'mains-intensive-jee',
    name: 'JEE Mains Intensive (3 Months)',
    lectures: '36 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '+15% Mains Focus',
    badge: 'Exam Special',
    description: 'Targeted 90-day JEE Mains revision program focusing on frequently asked topics, high-scoring chapters, time-management strategies, and full-length mock test solving with performance analysis.',
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'JEE Mains specific preparation with focus on maximizing 90+ percentile scores.',
  },
  {
    id: 'advanced-crash-jee',
    name: 'JEE Advanced Crash (2 Months)',
    lectures: '32 Lectures',
    duration: '2.5 Hours / Session',
    bonus: '+20% Advanced Focus',
    badge: 'For Advancees',
    description: 'Intensive 60-day program for students who have cleared JEE Mains and need Advanced-level preparation. Covers advanced topics, multi-concept problems, and IIT-level practice.',
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'JEE Mains qualifiers preparing for JEE Advanced with IIT rank targeting.',
  },
  {
    id: 'rapid-revision-jee',
    name: 'Rapid Revision (30 Days)',
    lectures: '12 Lectures',
    duration: '2.5 Hours / Session',
    bonus: '+20% High-Yield Topics',
    description: 'Last-minute 30-day JEE Mains sprint covering most critical topics, formula compilation, quick concept review, and final mock test strategy sessions.',
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Emergency JEE Mains preparation in final month focusing on highest-probability topics.',
  },
  {
    id: 'dropper-jee',
    name: 'JEE Dropper / Repeater Program',
    lectures: '120 Lectures',
    duration: '1.5-2.0 Hours / Session',
    bonus: '+10% Strategic Analysis',
    description: 'Specialized full-year program for JEE droppers and previous attempt repeaters. Includes weak-area deep-dive, advanced problem-solving, personalized strategy sessions, and performance tracking.',
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'JEE repeaters aiming for significant score improvement and better ranking.',
  },
  {
    id: 'subject-jee',
    name: 'Subject-Specific Mastery',
    lectures: '60 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '+15% Deep Specialization',
    description: 'Focused single-subject JEE preparation (Physics, Chemistry, or Mathematics). Advanced topic mastery with high-frequency competitive questions and derivation-based problems.',
    singleOnline: true,
    singleOffline: true,
    completeBundle: false,
    recommendedFor: 'Students needing subject-specific strength in weak areas for JEE success.',
  },
  {
    id: 'board-jee-combo',
    name: 'Class 12 Board + JEE Combo',
    lectures: '150 Lectures',
    duration: '2.0 Hours / Session',
    bonus: '~15% Value Integration',
    badge: 'Best Value',
    description: 'Integrated program balancing Class 12 CBSE/State board excellence with JEE Main preparation. Dual-focused personal coaching ensuring both 90%+ boards and strong JEE scores.',
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Class 12 students targeting excellent boards AND strong JEE Main scores.',
  },
  {
    id: 'weekend-jee',
    name: 'Weekend / Part-Time',
    lectures: '50 Lectures',
    duration: '1.5-2.0 Hours / Session',
    bonus: 'Flexible Scheduling',
    description: 'Weekend-only JEE preparation (Saturday & Sunday) for students managing school, other coaching, or responsibilities. Structured yet flexible approach maintaining consistency.',
    singleOnline: true,
    singleOffline: true,
    completeBundle: true,
    recommendedFor: 'Students with packed weekday schedules needing structured JEE guidance.',
  },
];

export default function CourseJEE() {
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  return (
    <section className={`${styles.section} sectionPadding`} id="jee-courses">
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center' }}>
          <div className="badge">
            <Lightbulb size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            JEE Main & Advanced Programs
          </div>
        </div>
        <h2 className="sectionTitle">JEE 1-on-1 Personal Coaching Programs</h2>
        <p className="sectionSub">
          Engineering-focused, IIT-targeted personal coaching combining competitive excellence with conceptual depth. Expert guidance in Physics, Chemistry & Mathematics at JEE standard.
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
              <span>Physics + Chemistry + Math</span>
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
            <h3>🔬 JEE Main & Advanced — Physics, Chemistry & Mathematics</h3>
            <p>Expert-led preparation for India's toughest engineering entrance. Advanced problem-solving techniques, multi-concept questions, derivation mastery, and IIT-level competitive strategies for both JEE Mains (90+ percentile) and Advanced (top AIR ranking).</p>
          </div>
        </div>

        {/* CARDS VIEW */}
        {viewMode === 'cards' && (
          <div className={styles.grid}>
            {jeeBatchData.map((batch) => (
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

                <div className={styles.deliveryModesBox}>
                  <h4>Available Delivery Modes:</h4>
                  <div className={styles.modeChecklist}>
                    <div className={styles.modeCheck}>
                      {batch.singleOnline ? <CheckCircle2 size={16} color="#22c55e" /> : <XCircle size={16} color="#94a3b8" />}
                      <span>Single Subject — Online</span>
                    </div>
                    <div className={styles.modeCheck}>
                      {batch.singleOffline ? <CheckCircle2 size={16} color="#22c55e" /> : <XCircle size={16} color="#94a3b8" />}
                      <span>Single Subject — Offline</span>
                    </div>
                    <div className={styles.modeCheck}>
                      {batch.completeBundle ? (
                        <CheckCircle2 size={16} color="#22c55e" />
                      ) : (
                        <span className={styles.naTag}>Single Subject Only</span>
                      )}
                      <span>Complete (3-Subj Bundle)</span>
                    </div>
                  </div>
                </div>

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
                  <th>JEE Program / Tenure</th>
                  <th>Total Lectures & Duration</th>
                  <th>Single Subject — Online</th>
                  <th>Single Subject — Offline</th>
                  <th>Complete (3-Subject)</th>
                </tr>
              </thead>
              <tbody>
                {jeeBatchData.map((batch) => (
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
              <strong>Note:</strong> All JEE programs combine competitive exam strategy with deep conceptual foundation. Lectures include advanced problem-solving, mock test analysis, time management strategies, and doubt resolution. Mentor selection based on subject expertise and AIR ranking happens after consultation.
            </p>
          </div>
          
          <div className={styles.actionCta}>
            <a href="tel:+919004826378" className="btn btn-primary" style={{ padding: '14px 28px' }}>
              🎓 Book JEE Strategy Session & Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
