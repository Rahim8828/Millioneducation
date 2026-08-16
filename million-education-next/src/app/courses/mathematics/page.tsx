import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FAQ from '@/components/ui/FAQ';
import { courseSchema, breadcrumbSchema } from '@/lib/schema';
import { BookOpen, GraduationCap, CheckCircle2, Calendar, MessageCircle, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mathematics Specialist — 1-on-1 Home & Online Tuition for 11th, 12th & JEE',
  description: 'Master Mathematics with expert IITian faculty. Comprehensive 1-on-1 tuition for Class 11, 12 & JEE Main/Advanced. Calculus, Algebra, Trigonometry & more.',
  keywords: [
    'Math tutor Mumbai',
    'Mathematics coaching',
    'Mathematics tuition online',
    'JEE Mathematics',
    'JEE Maths tuition',
    'Class 11 Mathematics',
    'Class 12 Mathematics',
    'Calculus tutor',
    'IITian mathematics tutor',
    'Algebra geometry trigonometry',
  ],
  openGraph: {
    type: 'website',
    title: 'Mathematics Specialist — 1-on-1 Home & Online Tuition for 11th, 12th & JEE',
    description: 'Master Mathematics with expert IITian faculty. Comprehensive 1-on-1 tuition for Class 11, 12 & JEE Main/Advanced.',
    url: 'https://www.millioneducation.com/courses/mathematics',
    siteName: 'Million Education',
    images: [
      {
        url: 'https://www.millioneducation.com/logo.png',
        width: 1200,
        height: 630,
        alt: 'Mathematics Specialist Course - Million Education',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mathematics Specialist — 1-on-1 Tuition',
    description: 'Expert Mathematics coaching for Class 11, 12 & JEE',
    images: ['https://www.millioneducation.com/logo.png'],
  },
  alternates: {
    canonical: 'https://www.millioneducation.com/courses/mathematics',
  },
};

export default function MathematicsPage() {
  const courseData = courseSchema(
    'Mathematics Specialist Course',
    'Master Mathematics with expert IITian faculty for Class 11, 12 & JEE Main/Advanced.',
    'https://www.millioneducation.com/logo.png',
    'https://www.millioneducation.com/courses/mathematics'
  );

  const breadcrumbs = breadcrumbSchema([
    { name: 'Home', url: 'https://www.millioneducation.com' },
    { name: 'Courses', url: 'https://www.millioneducation.com/courses' },
    { name: 'Mathematics', url: 'https://www.millioneducation.com/courses/mathematics' },
  ]);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseData) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
        suppressHydrationWarning
      />
      <Navbar />
      
      {/* Header Banner */}
      <section style={{
        background: 'linear-gradient(135deg, var(--gray-900) 0%, #1e1b4b 100%)',
        color: 'var(--white)',
        padding: '120px 0 60px',
        textAlign: 'center',
      }}>
        <div className="container">
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.12)',
            color: 'var(--white)',
            fontSize: '0.85rem',
            fontWeight: 600,
            padding: '6px 16px',
            borderRadius: '100px',
            marginBottom: '20px',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}>
            <GraduationCap size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            Mathematics Specialist Course
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px' }}>
            Master Mathematics for Boards & JEE
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--gray-300)', maxWidth: '680px', margin: '0 auto', lineHeight: 1.6 }}>
            Comprehensive Mathematics tuition covering Class 11 & 12 NCERT, JEE Main/Advanced concepts with dedicated 1-on-1 personal coaching from expert IITian faculty.
          </p>
        </div>
      </section>

      {/* Course Content */}
      <section style={{ padding: '60px 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
            {/* Main Content */}
            <div style={{ flex: '2', minWidth: '300px' }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--gray-900)', marginBottom: '16px' }}>
                About This Course
              </h2>
              <p style={{ color: 'var(--gray-600)', marginBottom: '20px', lineHeight: 1.7 }}>
                Our Mathematics Specialist course is designed for students who want to master calculus, algebra, and trigonometry for both Board exams and JEE entrance exams. Our expert IITian faculty provide personalized attention to help you build strong conceptual foundations and develop problem-solving skills.
              </p>
              
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--gray-900)', marginTop: '32px', marginBottom: '16px' }}>
                Key Features
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Complete NCERT coverage with in-depth concept explanations',
                  'Advanced problem-solving techniques for JEE Main & Advanced',
                  'Calculus, Algebra, Trigonometry & Coordinate Geometry mastery',
                  'Weekly chapter-wise and cumulative assessment tests',
                  'Unlimited doubt solving support via WhatsApp/Call',
                  'Digital notes, formula sheets, and practice problems',
                  'Monthly parent-teacher feedback meetings',
                  'Flexible scheduling: Home Tuition or Online Live Classes',
                ].map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <CheckCircle2 size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--gray-700)' }}>{feature}</span>
                  </li>
                ))}
              </ul>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--gray-900)', marginTop: '32px', marginBottom: '16px' }}>
                What You&apos;ll Learn
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '24px' }}>
                {['Algebra & Sequences', 'Calculus', 'Trigonometry', 'Coordinate Geometry', 'Vectors & 3D', 'Probability & Stats'].map((topic, i) => (
                  <div key={i} style={{ background: 'var(--gray-50)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                    <span style={{ fontWeight: 600, color: 'var(--gray-800)' }}>{topic}</span>
                  </div>
                ))}
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: 'var(--gray-900)', marginTop: '32px', marginBottom: '16px' }}>
                Suitable For
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {['Class 11 Students', 'Class 12 Students', 'JEE Main Aspirants', 'JEE Advanced Aspirants', 'Board Exam Prep', 'Dropper Batch'].map((item, i) => (
                  <li key={i} style={{ background: 'var(--primary-light)', color: 'var(--primary)', padding: '8px 16px', borderRadius: '100px', fontSize: '0.9rem', fontWeight: 600 }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Card */}
            <div style={{ flex: '1', minWidth: '280px' }}>
              <div style={{ background: 'var(--gray-50)', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: '28px', position: 'sticky', top: '100px' }}>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'var(--primary-light)', color: 'var(--primary)', padding: '6px 14px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, marginBottom: '12px' }}>
                    <BookOpen size={14} /> 1-on-1 Personalized
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: 'var(--gray-900)', marginBottom: '8px' }}>
                    Enroll Now
                  </h3>
                  <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>Book your FREE demo class today</p>
                </div>

                <div style={{ marginBottom: '20px', padding: '16px', background: 'var(--white)', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Duration</span>
                    <span style={{ fontWeight: 600, color: 'var(--gray-800)' }}>3 Months / 6 Months</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Classes</span>
                    <span style={{ fontWeight: 600, color: 'var(--gray-800)' }}>3 sessions/week</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Mode</span>
                    <span style={{ fontWeight: 600, color: 'var(--gray-800)' }}>Home / Online</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--gray-600)', fontSize: '0.9rem' }}>Rating</span>
                    <span style={{ fontWeight: 600, color: 'var(--primary)' }}>4.9 ⭐ (120+ reviews)</span>
                  </div>
                </div>

                <a href="tel:+919004826378" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '14px', background: 'var(--primary)', color: 'var(--white)', borderRadius: 'var(--radius-md)', fontWeight: 600, marginBottom: '12px', transition: 'var(--transition)' }}>
                  <MessageCircle size={18} /> Call to Enquire
                </a>
                <a href="https://wa.me/919004826378" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', width: '100%', padding: '14px', background: 'var(--success)', color: 'var(--white)', borderRadius: 'var(--radius-md)', fontWeight: 600, transition: 'var(--transition)' }}>
                  <Calendar size={18} /> Book Free Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section style={{ padding: '60px 0', background: 'var(--gray-50)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--gray-900)', textAlign: 'center', marginBottom: '32px' }}>
            Related Courses
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
            {[
              { title: 'Physics Specialist', href: '/courses/physics', desc: 'Mechanics, Waves & Modern Physics' },
              { title: 'Chemistry Specialist', href: '/courses/chemistry', desc: 'Organic, Inorganic & Physical Chemistry' },
              { title: 'PCM Combo Course', href: '/courses/pcm', desc: 'Physics, Chemistry & Math together' },
            ].map((course, i) => (
              <Link key={i} href={course.href} style={{ display: 'block', background: 'var(--white)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--gray-200)', transition: 'var(--transition)' }}>
                <h4 style={{ color: 'var(--gray-900)', marginBottom: '6px' }}>{course.title}</h4>
                <p style={{ color: 'var(--gray-500)', fontSize: '0.9rem' }}>{course.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Back Link */}
      <div className="container" style={{ padding: '20px' }}>
        <Link href="/courses" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 600 }}>
          <ArrowLeft size={18} /> Back to All Courses
        </Link>
      </div>

      <FAQ variant="student" />
      <Footer />
    </main>
  );
}
