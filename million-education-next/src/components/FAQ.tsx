'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import styles from './FAQ.module.css';

interface FAQItem { q: string; a: string; }

const studentFaqs: FAQItem[] = [
  // Personal Coaching Program & How it Works
  { q: 'How does the 1-on-1 personal coaching program for 11th, 12th, NEET & JEE work?', a: 'You submit your target course (Class 11/12 Science, NEET or JEE). We match you with an expert subject specialist (IITians/Medical faculty). You get a FREE live demo session before finalizing your schedule. Classes can be conducted at your home (Home Tuition) or online (Live 1-on-1) based on your preference.' },
  { q: 'What is included in the complete PCM/PCB course?', a: 'The complete course includes: Complete Physics, Chemistry, Maths/Biology coverage based on your stream, Weekly assessment tests, NCERT line-by-line mastery, 15+ years of Previous Year Questions (PYQs), Unlimited doubt solving support, Digital PDF notes and study material, Performance tracking dashboards, and Monthly parent-teacher review meetings.' },
  { q: 'How are the tutors/faculty selected and verified?', a: 'All our faculty members go through a rigorous 5-step verification process: (1) Document verification of qualifications, (2) Subject knowledge assessment, (3) Teaching demonstration, (4) Background check, and (5) Student feedback during trial period. We only onboard IITians, M.Sc/M.Tech degree holders, MBBS doctors, and experienced competitive exam mentors.' },
  { q: 'Can I opt for single-subject or chapter-wise tuition?', a: 'Yes! We offer complete flexibility. You can choose: Single subject tuition (e.g., only Physics for JEE), Combo packages (PCM or PCB), or Chapter-wise intensive modules for specific weak areas. Pricing varies based on the package selected.' },
  
  // Pricing & Payment
  { q: 'What are the payment options and fee structure?', a: 'We offer multiple payment options: (1) Full payment with 10% discount, (2) 2-installment plan (50% upfront, 50% after 2 months), (3) 3-installment plan, (4) 4-installment plan. Payments can be made via UPI, Bank Transfer, Credit/Debit Card, or Cash. EMIs through select credit cards are also available.' },
  { q: 'Is there a refund policy if I am not satisfied?', a: 'Yes, we offer a transparent refund policy: (1) Full refund if no suitable tutor is available within 7 days, (2) Pro-rata refund if you discontinue after starting, (3) 100% refund on unused session fees if you cancel within 48 hours of enrollment. Please refer to our Refund Policy page for detailed terms.' },
  { q: 'Do you offer scholarships or discounts?', a: 'We offer several discount programs: (1) Early bird discount (15% for enrollments 30+ days before course start), (2) Sibling discount (10% for second sibling), (3) Referral discount (₹2,000 credit for each successful referral), and (4) Merit scholarship (up to 25% for students with 90%+ in Board exams). Contact us to know your eligibility.' },
  
  // Classes & Schedule
  { q: 'Are home tuition and online options available for NEET/JEE in Mumbai?', a: 'Yes! We offer both modes across Mumbai and Navi Mumbai: Home Tuitions available in Andheri, Bandra, Powai, Thane, Ghatkopar, South Mumbai, Jogeshwari, and all major areas. Live Online Classes available for students anywhere in India with interactive video sessions, screen sharing, and digital whiteboard.' },
  { q: 'What is the schedule flexibility for classes?', a: 'We understand students have varied schedules. You can choose class timings that work best for you: Weekday slots (4 PM - 9 PM), Weekend slots (9 AM - 6 PM), Morning slots for early birds, and Intensive vacation batches during breaks. Each session is typically 90-120 minutes with 3-5 sessions per week.' },
  { q: 'Is there a free demo class available?', a: 'Yes, every student gets a FREE Academic Counselling Session and 1-on-1 Demo Class (60 minutes) before enrollment. This helps you: (1) Meet your assigned tutor, (2) Understand the teaching methodology, (3) Clarify any doubts, and (4) Finalize the schedule. No credit card required for booking the demo.' },
  
  // Subjects & Coverage
  { q: 'Which subjects and courses do you offer?', a: 'We offer comprehensive Science stream coverage: Single Subjects - Physics, Chemistry, Mathematics, Biology. Combo Courses - PCM (Physics+Chemistry+Math), PCB (Physics+Chemistry+Biology). Target Courses - Class 11 Science, Class 12 Science, NEET UG Preparation, JEE Main & Advanced, Board Exam Crash Courses.' },
  { q: 'How do you cover NCERT and competitive exam syllabus together?', a: 'Our unique integrated approach covers both simultaneously: (1) First, we ensure 100% NCERT understanding with line-by-line explanations, (2) Then, we extend concepts to competitive exam level with advanced problem-solving, (3) Regular PYQ practice from last 15+ years of JEE/NEET, (4) Separate Board exam revision drills before March. This dual-focus approach ensures success in both Board exams and entrance tests.' },
];

const tutorFaqs: FAQItem[] = [
  // Getting Started
  { q: 'What qualifications do I need to teach 11th, 12th, NEET or JEE?', a: 'We require strong subject expertise in Physics, Chemistry, Maths or Biology. Preferred qualifications include: B.Tech/B.E. (especially from IITs/NITs), M.Tech/M.E., M.Sc in Physics/Chemistry/Maths/Biology, MBBS/BDS (for Biology), PhD holders, and Experienced B.Ed. faculty. Passion for teaching and communication skills are equally important.' },
  { q: 'Can I teach both Home Tuitions and Online Classes?', a: 'Yes! You can choose your preferred teaching mode or offer both: (1) Home Tuition - Teach students at their homes in your locality, (2) Online Live Classes - Teach from anywhere via our digital platform, (3) Hybrid - Mix of both based on your schedule. Many tutors prefer online for flexibility and travel savings.' },
  { q: 'How do I receive student leads for NEET/JEE coaching?', a: 'Once verified by our academic team, you will receive leads through: (1) Direct app notifications, (2) SMS/WhatsApp alerts for nearby students, (3) Dashboard with student requirements matching your expertise and location. You have complete control to accept or decline requests based on your availability and preference.' },
  
  // Earnings & Payments
  { q: 'How much can I earn as a tutor with Million Education?', a: 'Earnings vary significantly based on your experience, qualifications, subject specialization, and number of active students. Verified subject specialists typically earn competitive monthly income based on market rates. Most tutors scale their earnings by building a dedicated student base. We provide transparent session tracking and timely payments. For specific earnings details, please contact our faculty onboarding team at +91 9004826378.' },
  { q: 'When and how do I receive my payments?', a: 'We follow a transparent and timely payment schedule: (1) Payments are processed on the 5th of every month for the previous month\'s sessions, (2) Direct bank transfer (no cash handling), (3) Detailed session reports available on your dashboard, (4) TDS deductions as per government norms. Payment disputes are resolved within 48 hours.' },
  { q: 'Is there any registration fee or commission?', a: 'Registration on Million Education is 100% FREE with zero membership fees. We deduct a nominal platform fee from each session payment, which covers: Student marketing & lead generation, Platform maintenance & technology, Payment processing, and Customer support. This is our only revenue source - we succeed when you succeed.' },
  
  // Requirements & Verification
  { q: 'What is the verification process for tutors?', a: 'Our thorough verification ensures quality: (1) Document upload (ID, degree certificates, address proof), (2) Academic background verification, (3) Online subject assessment/test, (4) Teaching demonstration video call, (5) Reference check from previous institutions/students. The entire process takes 3-5 business days once all documents are submitted.' },
  { q: 'What are the tutor requirements and expectations?', a: 'We expect our tutors to maintain high standards: (1) Minimum 1 year of teaching experience preferred, (2) Regular availability for scheduled classes, (3) Punctuality and 100% attendance record (with advance notice for emergencies), (4) Regular assessment and progress reporting, (5) Professional communication with students and parents, (6) Continuous improvement through our faculty development programs.' },
  { q: 'Can I set my own fees and availability?', a: 'Yes! You have complete control: (1) Set your own hourly/first session rates within market guidelines, (2) Define your available time slots, (3) Choose your preferred locations/areas, (4) Set maximum student load. We provide guidance on competitive pricing based on your qualifications and local market rates.' },
];

const generalFaqs: FAQItem[] = [
  { q: 'Which locations do you serve?', a: 'We serve Mumbai and Navi Mumbai extensively including: Andheri, Bandra, Powai, Thane, Navi Mumbai, South Mumbai, Jogeshwari, Ghatkopar, Borivali, Dadar, Vashi, and 50+ other neighborhoods. Online classes are available Pan-India for students outside Mumbai.' },
  { q: 'How do I book a free demo class?', a: 'Booking a free demo is easy: (1) Call/WhatsApp us at +91 9004826378, (2) Or fill the contact form with your details, (3) Our academic counsellor will call you within 2 hours, (4) Schedule a convenient time for your free 60-minute demo session, (5) If satisfied, proceed with enrollment and schedule.' },
  { q: 'What makes Million Education different from other tuition centers?', a: 'What sets us apart: (1) 1-on-1 personalized attention (not batch sessions), (2) Verified expert faculty (IITians, MBBS, M.Sc), (3) Flexible home or online options, (4) Free demo before enrollment, (5) Unlimited doubt solving, (6) Monthly parent feedback meetings, (7) Proven track record with 500+ successful students, (8) Transparent pricing with no hidden costs.' },
  { q: 'Do you offer crash courses or intensive programs?', a: 'Yes! We offer several intensive programs: (1) Board Exam Crash Course (2 months before exams), (2) NEET/JEE Last Mile Prep (3 months before exam), (3) Chapter-wise intensive modules, (4) Doubt remediation workshops. These are designed for students who need focused revision and extra practice in limited time.' },
  { q: 'How can I track my child\'s progress?', a: 'We provide multiple progress tracking tools: (1) Monthly parent-teacher meetings (in-person or online), (2) Weekly progress reports via WhatsApp, (3) Student dashboard with performance analytics, (4) Detailed session logs and feedback, (5) Comparison with peers and benchmarks. Parents stay fully informed about their child\'s academic journey.' },
  { q: 'What if I have more questions?', a: 'We are here to help! Reach us through: (1) Phone/WhatsApp: +91 9004826378 or +91 9152152155, (2) Email: support@millioneducation.com, (3) Contact form on our website, (4) Visit our office at Pearl Majestic, Aqsa Masjid Rd, Shastri Nagar, Jogeshwari West, Mumbai. Our team responds within 2 hours during business hours.' },
];

export default function FAQ({ variant = 'student' }: { variant?: 'student' | 'tutor' | 'general' }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = variant === 'tutor' ? tutorFaqs : variant === 'general' ? generalFaqs : studentFaqs;
  const title = variant === 'tutor' ? 'joining Million Education as a faculty mentor' : variant === 'general' ? 'our services and offerings' : 'our 11th, 12th, NEET & JEE 1-on-1 programs';

  return (
    <section className={`${styles.section} sectionPadding`} id="faq">
      <div className="container">
        <div style={{ textAlign: 'center' }}>
          <div className="badge">Got Questions?</div>
        </div>
        <h2 className="sectionTitle">Frequently Asked Questions</h2>
        <p className="sectionSub">Everything you need to know about {title}.</p>
        <div className={styles.list}>
          {faqs.map((f, i) => (
            <div key={i} className={`${styles.item} ${openIndex === i ? styles.open : ''}`}>
              <button
                className={styles.question}
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {f.q}
                <span className={styles.icon}>
                  {openIndex === i ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              {openIndex === i && (
                <div className={styles.answer}>{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}