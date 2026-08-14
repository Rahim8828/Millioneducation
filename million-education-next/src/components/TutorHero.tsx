'use client';

import { useState, FormEvent } from 'react';
import { Award, CheckCircle2, Send } from 'lucide-react';
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
            <div className={styles.earnBadge}>
              <Award size={16} style={{ display: 'inline', marginRight: 6, verticalAlign: 'middle' }} />
              High-Earning Mentorship Opportunities
            </div>
            <h1>
              Find 1-on-1 Tuition Jobs<br />
              For 11th, 12th, NEET & JEE —<br />
              <span>Teach Smart. Inspire Ranks.</span>
            </h1>
            <p>
              Connect with high-aspiring Science stream students looking for dedicated 1-on-1 Home Tuitions & Online Mentorship in Physics, Chemistry, Maths & Biology.
            </p>
            <div className={styles.chips}>
              <div className={styles.chip}><CheckCircle2 size={16} color="#22c55e" /> Quick Onboarding</div>
              <div className={styles.chip}><CheckCircle2 size={16} color="#22c55e" /> Zero Membership Fee</div>
              <div className={styles.chip}><CheckCircle2 size={16} color="#22c55e" /> Verified Science Students</div>
              <div className={styles.chip}><CheckCircle2 size={16} color="#22c55e" /> Verified Credentials</div>
              <div className={styles.chip}><CheckCircle2 size={16} color="#22c55e" /> Flexible Hours</div>
            </div>
          </div>

          {/* Form Card */}
          <div className={styles.formCard}>
            <h2>Join as a Faculty Mentor</h2>
            <p>Fill the form below and start mentoring today</p>
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
                  <option value="">Select your area in Mumbai</option>
                  <option>Andheri, Mumbai</option>
                  <option>Bandra, Mumbai</option>
                  <option>Borivali, Mumbai</option>
                  <option>Powai, Mumbai</option>
                  <option>Juhu, Mumbai</option>
                  <option>Dadar / South Mumbai</option>
                  <option>Thane, Mumbai</option>
                  <option>Navi Mumbai</option>
                  <option>Ghatkopar, Mumbai</option>
                  <option>Other Mumbai Location</option>
                </select>
              </div>

              <div className={styles.group}>
                <label>Qualification / Expertise *</label>
                <select
                  value={formData.qualification}
                  onChange={(e) => setFormData({ ...formData, qualification: e.target.value })}
                  required
                >
                  <option value="">Select highest qualification</option>
                  <option>B.Tech / B.E. (IIT/NIT/Top College)</option>
                  <option>M.Tech / M.E.</option>
                  <option>M.Sc Physics / Chemistry / Maths / Bio</option>
                  <option>MBBS / BDS (Medical Specialist)</option>
                  <option>PhD in Science / Maths</option>
                  <option>B.Ed. / Experienced Faculty</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.group}>
                <label>Target Subjects *</label>
                <select
                  value={formData.fees}
                  onChange={(e) => setFormData({ ...formData, fees: e.target.value })}
                  required
                >
                  <option value="">Select primary domain</option>
                  <option>Physics (11th, 12th, JEE/NEET)</option>
                  <option>Chemistry (11th, 12th, JEE/NEET)</option>
                  <option>Mathematics (11th, 12th, JEE)</option>
                  <option>Biology (11th, 12th, NEET)</option>
                  <option>PCM Full Combo</option>
                  <option>PCB Full Combo</option>
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
                  I Agree To Receive Updates And Important Notifications From Million Education Via RCS, SMS, And WhatsApp.
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
                  ? 'Application Submitted!'
                  : 'Join as a Faculty Mentor'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

