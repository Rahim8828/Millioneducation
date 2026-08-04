'use client';

import { useState, FormEvent } from 'react';
import styles from './TutorHero.module.css';

export default function TutorHero() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    location: '',
    qualification: '',
    fees: '',
    notify: true,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.city || !formData.location || !formData.qualification || !formData.fees) {
      alert('Please fill in all required fields!');
      return;
    }

    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({
        fullName: '',
        phone: '',
        city: '',
        location: '',
        qualification: '',
        fees: '',
        notify: true,
      });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1200);
  };

  return (
    <section className={styles.hero} id="join">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.text}>
            <div className={styles.earnBadge}>💰 Earn ₹20,000 – ₹50,000 / Month</div>
            <h1>
              Find Home Tuition Jobs<br />
              Near You —<br />
              <span>Earn Big. Teach Smart.</span>
            </h1>
            <p>
              Open Earning Opportunities by Educating Students Coming from Various Cities.
              Your Teaching Transcends Geographical Limits, Nurturing Young Minds with Insights from Across India.
            </p>
            <div className={styles.chips}>
              <div className={styles.chip}><span className={styles.check}>✔</span> Quick Onboarding</div>
              <div className={styles.chip}><span className={styles.check}>✔</span> Zero Member Fee</div>
              <div className={styles.chip}><span className={styles.check}>✔</span> Verified Students</div>
              <div className={styles.chip}><span className={styles.check}>✔</span> Easy Verification</div>
              <div className={styles.chip}><span className={styles.check}>✔</span> Guaranteed Classes</div>
            </div>
          </div>

          {/* Form Card */}
          <div className={styles.formCard}>
            <h2>Join as a Tutor</h2>
            <p>Fill the form below and start teaching today</p>
            <form onSubmit={handleSubmit}>
              <div className={styles.group}>
                <label>Full Name *</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              <div className={styles.row}>
                <div className={styles.group}>
                  <label>Phone *</label>
                  <input
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.group}>
                  <label>City *</label>
                  <input
                    type="text"
                    placeholder="Your city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className={styles.group}>
                <label>Select Location *</label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  required
                >
                  <option value="">Select your area / location</option>
                  <option>Indiranagar, Bangalore</option>
                  <option>Koramangala, Bangalore</option>
                  <option>HSR Layout, Bangalore</option>
                  <option>Whitefield, Bangalore</option>
                  <option>South Delhi</option>
                  <option>North Delhi</option>
                  <option>Andheri, Mumbai</option>
                  <option>Bandra, Mumbai</option>
                  <option>Malviya Nagar, Jaipur</option>
                  <option>Vaishali Nagar, Jaipur</option>
                  <option>Banjara Hills, Hyderabad</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.group}>
                <label>Qualification *</label>
                <select
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  required
                >
                  <option value="">Select your highest qualification</option>
                  <option>12th Pass</option>
                  <option>B.A. / B.Sc. / B.Com (Pursuing)</option>
                  <option>B.A. / B.Sc. / B.Com (Graduate)</option>
                  <option>B.Tech / B.E.</option>
                  <option>M.A. / M.Sc. / M.Com</option>
                  <option>M.Tech / M.E.</option>
                  <option>B.Ed. / M.Ed.</option>
                  <option>PhD</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.group}>
                <label>Expected Fees (per month) *</label>
                <select
                  value={formData.fees}
                  onChange={(e) => setFormData({ ...formData, fees: e.target.value })}
                  required
                >
                  <option value="">Select fee range</option>
                  <option>₹5,000 – ₹10,000</option>
                  <option>₹10,000 – ₹20,000</option>
                  <option>₹20,000 – ₹30,000</option>
                  <option>₹30,000 – ₹50,000</option>
                  <option>₹50,000+</option>
                </select>
              </div>

              <div className={styles.checkGroup}>
                <input
                  type="checkbox"
                  id="notify"
                  checked={formData.notify}
                  onChange={(e) => setFormData({ ...formData, notify: e.target.checked })}
                />
                <label htmlFor="notify">
                  I Agree To Receive Updates And Important Notifications From My Tutor Via RCS, SMS, And WhatsApp.
                </label>
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status !== 'idle'}
              >
                {status === 'submitting'
                  ? 'Submitting...'
                  : status === 'success'
                  ? '✅ Application Submitted!'
                  : 'Join as a Tutor 🚀'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
