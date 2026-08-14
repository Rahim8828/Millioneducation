import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import styles from './policy.module.css';

export const metadata: Metadata = {
  title: 'Refund Policy — Million Education',
  description: 'Read our refund policy to understand our refund and cancellation terms for courses and services.',
};

export default function RefundPolicyPage() {
  return (
    <main>
      <Navbar />
      
      <section className={styles.heroSection}>
        <div className="container">
          <h1>Refund Policy</h1>
          <p>Last Updated: August 2024</p>
        </div>
      </section>

      <section className={`${styles.contentSection} sectionPadding`}>
        <div className="container">
          <div className={styles.content}>
            <h2>1. Refund Eligibility</h2>
            <p>
              Million Education offers refunds under the following conditions:
            </p>
            <ul>
              <li><strong>Within 7 Days of Enrollment:</strong> Full refund if no classes have been conducted.</li>
              <li><strong>Before First Class:</strong> Full refund if you cancel before your first scheduled session.</li>
              <li><strong>After First Class:</strong> Refund for unused sessions, minus a cancellation fee of 10% or ₹500 (whichever is greater).</li>
              <li><strong>Medical/Personal Emergency:</strong> Full refund with appropriate documentation.</li>
            </ul>

            <h2>2. Non-Refundable Items</h2>
            <p>The following are generally non-refundable:</p>
            <ul>
              <li>Completed sessions or consumed classes</li>
              <li>Promotional discounts or coupon codes</li>
              <li>Registration fees</li>
              <li>Administrative fees</li>
            </ul>

            <h2>3. Refund Process</h2>
            <p>
              To request a refund:
            </p>
            <ol>
              <li>Contact our support team at support@millioneducation.com with your enrollment details.</li>
              <li>Provide a reason for your refund request.</li>
              <li>Our team will review your request within 3-5 business days.</li>
              <li>If approved, refunds will be processed to your original payment method within 7-10 business days.</li>
            </ol>

            <h2>4. Cancellation & Rescheduling</h2>
            <p>
              <strong>Session Cancellation:</strong> Students or tutors can cancel scheduled sessions with at least 24 hours notice without penalty. Cancellations with less than 24 hours notice may result in the session being marked as "attended" and not refunded.
            </p>
            <p>
              <strong>Rescheduling:</strong> Free rescheduling is allowed with 48 hours notice. After enrollment, you can reschedule up to 2 sessions per batch without charges.
            </p>

            <h2>5. Course Completion & Performance</h2>
            <p>
              Refunds are not provided for poor academic performance or non-completion of coursework. Students are encouraged to communicate with their tutors regarding any difficulties or concerns they may have.
            </p>

            <h2>6. Special Circumstances</h2>
            <p>
              In cases of:
            </p>
            <ul>
              <li><strong>Tutor Mismatch:</strong> Free tutor replacement is available. If after one replacement you're still unsatisfied, a partial refund of 50% is offered.</li>
              <li><strong>Technical Issues:</strong> Million Education will provide makeup classes or credits at no charge.</li>
              <li><strong>Service Failure:</strong> Full refund may be granted at our discretion.</li>
            </ul>

            <h2>7. Payment Methods & Processing</h2>
            <p>
              Refunds are processed to the original payment method used during enrollment. Depending on your bank or payment provider, it may take 5-10 business days for the refund to appear in your account. International transactions may take longer.
            </p>

            <h2>8. Refund Disputes</h2>
            <p>
              If you believe a refund was incorrectly denied or processed, you may escalate your case to our management team. All disputes must be filed within 30 days of the decision. We will provide a resolution within 15 days of receiving your escalation.
            </p>

            <h2>9. Exceptions & Adjustments</h2>
            <p>
              While these guidelines cover most scenarios, Million Education reserves the right to assess special cases individually. Factors such as extenuating circumstances, student engagement, and service quality may be considered in refund decisions.
            </p>

            <h2>10. No Refund for Change of Mind</h2>
            <p>
              Refunds cannot be issued simply because you changed your mind about the course or learning format. However, if you believe the course is not suitable for your needs, we encourage you to speak with our academic counselors about alternatives.
            </p>

            <h2>11. Policy Changes</h2>
            <p>
              Million Education reserves the right to modify this Refund Policy at any time. Changes will be effective immediately upon posting. Continued use of our services after changes indicates your acceptance of the updated policy.
            </p>

            <h2>12. Contact Us for Refund Requests</h2>
            <p>
              For any refund-related inquiries or to initiate a refund request:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> support@millioneducation.com</p>
              <p><strong>Phone:</strong> +91 9004826378</p>
              <p><strong>Address:</strong> Pearl Majestic, Aqsa Masjid Rd, Shastri Nagar, Jogeshwari West, Mumbai, Maharashtra 400102</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
