import { 
  BookOpen, 
  GraduationCap, 
  Stethoscope, 
  Cpu, 
  Home, 
  Laptop, 
  UserCheck, 
  CheckCircle2, 
  Info 
} from 'lucide-react';
import styles from './Courses.module.css';

const courses = [
  {
    title: 'Class 11 Science (PCM)',
    icon: BookOpen,
    description: 'Complete Physics, Chemistry & Mathematics preparation with focus on core concepts.',
    features: [
      'One-to-One Personalized Teaching',
      'Weekly Tests & Assignments',
      'Doubt Solving Support',
      'Digital Study Material & Notes',
      'Performance Tracking',
      'Parent Feedback Sessions',
    ],
  },
  {
    title: 'Class 12 Science (PCB)',
    icon: GraduationCap,
    description: 'Complete Physics, Chemistry & Biology preparation with board and NCERT focus.',
    features: [
      'One-to-One Personalized Teaching',
      'Weekly Tests & Assignments',
      'NCERT + Board Focused Preparation',
      'Digital Study Material & Notes',
      'Parent Progress Reports',
      'Board & Entrance Exam Guidance',
    ],
  },
  {
    title: 'NEET Premium Mentorship',
    icon: Stethoscope,
    description: 'Specialized one-to-one mentorship to help you crack the NEET medical entrance exam.',
    features: [
      'NEET-Oriented Concept Building',
      'NCERT Mastery & PYQs',
      'Weekly Mock Tests',
      'Personalized Study Plan',
      'Doubt Solving Sessions',
      'Performance Analysis',
    ],
  },
  {
    title: 'JEE Premium Mentorship',
    icon: Cpu,
    description: 'Comprehensive preparation for JEE Main & Advanced with strategic mentoring.',
    features: [
      'JEE Main & Advanced Preparation',
      'Advanced Problem Solving',
      'Weekly Tests & Mock Papers',
      'Personalized Learning Strategy',
      'Doubt Solving Sessions',
      'Performance Tracking',
    ],
  },
];

export default function Courses() {
  return (
    <section className={`${styles.section} sectionPadding`} id="courses">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="badge">Our Premium Courses</div>
        </div>
        <h2 className="sectionTitle">11th, 12th, NEET & JEE Programs</h2>
        <p className="sectionSub">
          Comprehensive learning programs designed for academic excellence and competitive success.
        </p>

        <div className={styles.modesContainer}>
          <div className={styles.modeBadge}>
            <Home size={18} color="#f97316" /> Home Tuition
          </div>
          <div className={styles.modeBadge}>
            <Laptop size={18} color="#f97316" /> Online Classes
          </div>
          <div className={styles.modeBadge}>
            <UserCheck size={18} color="#f97316" /> One-to-One Personalized
          </div>
        </div>

        <div className={styles.grid}>
          {courses.map((course, idx) => {
            const IconComponent = course.icon;
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.icon}>
                    <IconComponent size={24} color="#f97316" />
                  </div>
                  <h3>{course.title}</h3>
                </div>
                <p className={styles.description}>{course.description}</p>
                
                <div className={styles.featuresList}>
                  <h4>Includes:</h4>
                  <ul>
                    {course.features.map((feature, fIdx) => (
                      <li key={fIdx}>
                        <CheckCircle2 size={16} className={styles.checkIcon} color="#22c55e" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className={styles.bottomNote}>
          <p>
            <Info size={18} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle', color: '#f97316' }} />
            <strong>Important Note:</strong> Course plans are customized based on the student&apos;s academic level, subject combination, and requirements. Final structure is confirmed after a <strong>FREE Academic Counselling Session</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

