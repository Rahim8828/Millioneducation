import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';
import styles from './policy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy — Million Education',
  description: 'Read our privacy policy to understand how Million Education protects your personal information and data.',
};

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      
      <section className={styles.heroSection}>
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last Updated: August 2024</p>
        </div>
      </section>

      <section className={`${styles.contentSection} sectionPadding`}>
        <div className="container">
          <div className={styles.content}>
            <h2>1. Introduction</h2>
            <p>
              Million Education ("Company", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, and engage with our platform.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect on the site includes:</p>
            <ul>
              <li><strong>Personal Data:</strong> Name, email address, phone number, city, and educational background when you create an account or contact us.</li>
              <li><strong>Course Information:</strong> Details about your educational level, subjects of interest, and learning preferences.</li>
              <li><strong>Payment Information:</strong> Transaction details processed through secure payment gateways (we do not store complete credit card information).</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including IP address, browser type, pages visited, and time spent.</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect in the following ways:</p>
            <ul>
              <li>To provide and improve our educational services and content.</li>
              <li>To communicate with you about courses, updates, and promotional offers.</li>
              <li>To process your transactions and send transactional emails.</li>
              <li>To analyze and improve user experience on our platform.</li>
              <li>To comply with legal obligations and protect our rights.</li>
              <li>To match students with appropriate tutors and faculty.</li>
            </ul>

            <h2>4. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>

            <h2>5. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. However, we may share your information with:
            </p>
            <ul>
              <li>Service providers who assist us in operating our website and conducting our business.</li>
              <li>Tutors and faculty members (limited information necessary for the educational relationship).</li>
              <li>Legal authorities when required by law or to protect our rights.</li>
            </ul>

            <h2>6. Cookies and Tracking</h2>
            <p>
              Our website may use cookies and similar tracking technologies to enhance your experience. These cookies help us understand user behavior and personalize content. You can control cookie settings through your browser preferences.
            </p>

            <h2>7. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data (right to be forgotten)</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability (receive your data in a structured format)</li>
            </ul>

            <h2>8. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13 years old. We do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will delete such information promptly.
            </p>

            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date above.
            </p>

            <h2>10. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
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
