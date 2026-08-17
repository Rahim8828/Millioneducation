import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import styles from './policy.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service — Million Education',
  description: 'Read our terms of service to understand your rights and responsibilities when using Million Education.',
};

export default function TermsOfServicePage() {
  return (
    <main>
      <Navbar />
      
      <section className={styles.heroSection}>
        <div className="container">
          <h1>Terms of Service</h1>
          <p>Last Updated: August 2024</p>
        </div>
      </section>

      <section className={`${styles.contentSection} sectionPadding`}>
        <div className="container">
          <div className={styles.content}>
            <h2>1. Agreement to Terms</h2>
            <p>
              By accessing and using the Million Education website and services, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2>2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Million Education's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul>
              <li>Modifying or copying the materials</li>
              <li>Using the materials for any commercial purpose or for any public display</li>
              <li>Attempting to decompile or reverse engineer any software contained on the website</li>
              <li>Removing any copyright or other proprietary notations from the materials</li>
              <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
            </ul>

            <h2>3. Disclaimer</h2>
            <p>
              The materials on Million Education's website are provided on an 'as is' basis. Million Education makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2>4. Limitations</h2>
            <p>
              In no event shall Million Education or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Million Education's website, even if Million Education or an authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2>5. Accuracy of Materials</h2>
            <p>
              The materials appearing on Million Education's website could include technical, typographical, or photographic errors. Million Education does not warrant that any of the materials on the website are accurate, complete, or current. Million Education may make changes to the materials contained on the website at any time without notice.
            </p>

            <h2>6. Materials on Website</h2>
            <p>
              Million Education has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Million Education of the site. Use of any such linked website is at the user's own risk.
            </p>

            <h2>7. Modifications</h2>
            <p>
              Million Education may revise these terms of service for the website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>

            <h2>8. User Accounts</h2>
            <p>
              When you create an account with Million Education, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your password and account information. You agree to accept responsibility for all activities that occur under your account.
            </p>

            <h2>9. Student Responsibilities</h2>
            <p>
              Students agree to:
            </p>
            <ul>
              <li>Attend scheduled sessions regularly</li>
              <li>Provide at least 24 hours notice for cancellations</li>
              <li>Complete assigned coursework and assignments</li>
              <li>Maintain respectful behavior during sessions</li>
            </ul>

            <h2>10. Faculty Responsibilities</h2>
            <p>
              Tutors and faculty members agree to:
            </p>
            <ul>
              <li>Conduct classes as scheduled</li>
              <li>Maintain professional teaching standards</li>
              <li>Respect student confidentiality</li>
              <li>Provide quality educational content</li>
            </ul>

            <h2>11. Payment Terms</h2>
            <p>
              All fees are stated in Indian Rupees (INR). Payments must be made through authorized payment methods. Refunds are subject to our Refund Policy. By making a payment, you authorize Million Education to charge your account.
            </p>

            <h2>12. Intellectual Property Rights</h2>
            <p>
              All content on Million Education's website, including text, graphics, logos, images, and software, is the property of Million Education or its content suppliers and is protected by international copyright laws. Unauthorized reproduction or distribution is prohibited.
            </p>

            <h2>13. Limitation of Liability</h2>
            <p>
              Million Education shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services.
            </p>

            <h2>14. Governing Law</h2>
            <p>
              These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>

            <h2>15. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className={styles.contactInfo}>
              <p><strong>Email:</strong> support@millioneducation.in</p>
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
