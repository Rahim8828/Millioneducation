'use client';

import { useState, FormEvent } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import styles from './contact.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'Class 11 Science (PCM)',
    mode: 'Home Tuition',
    city: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.city) {
      alert('Please fill in all required fields!');
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        course: 'Class 11 Science (PCM)',
        mode: 'Home Tuition',
        city: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <main>
      <Navbar />

      {/* Hero Banner */}
      <section className={styles.heroSection}>
        <div className="container">
          <div className={styles.badge}>
            <MessageCircle size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
            Academic Counselling & Support
          </div>
          <h1>Contact Our Academic Mentors</h1>
          <p className={styles.heroSub}>
            Book a FREE Academic Counselling Session or enquire about 1-on-1 Home Tuitions & Online Coaching for 11th, 12th, NEET & JEE.
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className={`${styles.contactSection} sectionPadding`}>
        <div className="container">
          <div className={styles.wrapper}>
            
            {/* Contact Information Side */}
            <div className={styles.infoSide}>
              <h2>Get in Touch</h2>
              <p className={styles.infoDesc}>
                Have questions about our course structure, faculty selection, or demo classes? Our academic team is ready to guide you.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Phone size={20} color="#2563EB" /></div>
                  <div>
                    <h4>Call / WhatsApp</h4>
                    <p><a href="tel:+919004826378">+91 9004826378</a></p>
                    <p><a href="tel:+919152152155">+91 9152152155</a></p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Mail size={20} color="#2563EB" /></div>
                  <div>
                    <h4>Email Support</h4>
                    <p><a href="mailto:support@millioneducation.in">support@millioneducation.in</a></p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><MapPin size={20} color="#2563EB" /></div>
                  <div>
                    <h4>Address</h4>
                    <p>Pearl Majestic, Aqsa Masjid Rd, Shastri Nagar, Jogeshwari West, Mumbai, Maharashtra 400102</p>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.iconBox}><Clock size={20} color="#2563EB" /></div>
                  <div>
                    <h4>Counselling Hours</h4>
                    <p>Monday – Saturday: 9:00 AM – 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className={styles.formSide}>
              <h3>Book Free Counselling & Demo</h3>
              <p className={styles.formSub}>Fill your details below to schedule a free 1-on-1 demo session.</p>

              {submitted ? (
                <div className={styles.successBox}>
                  <CheckCircle2 size={32} color="#22c55e" />
                  <h4>Request Submitted Successfully!</h4>
                  <p>Our academic team will call you within 2 hours to confirm your FREE demo class.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.group}>
                    <label>Student / Parent Name *</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>

                    <div className={styles.group}>
                      <label>City / Location *</label>
                      <input
                        type="text"
                        placeholder="Your city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.group}>
                      <label>Select Target Course *</label>
                      <select
                        value={formData.course}
                        onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      >
                        <option>Class 11 Science (PCM)</option>
                        <option>Class 11 Science (PCB)</option>
                        <option>Class 12 Science (PCM)</option>
                        <option>Class 12 Science (PCB)</option>
                        <option>NEET Premium Coaching Program</option>
                        <option>JEE Main & Advanced</option>
                      </select>
                    </div>

                    <div className={styles.group}>
                      <label>Preferred Mode *</label>
                      <select
                        value={formData.mode}
                        onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      >
                        <option>Home Tuition (1-on-1)</option>
                        <option>Online Live Classes (1-on-1)</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.group}>
                    <label>Specific Requirements / Message</label>
                    <textarea
                      rows={3}
                      placeholder="Mention any specific subjects, weak areas, or preferred timings..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <Send size={16} /> Request Free Demo Class
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}