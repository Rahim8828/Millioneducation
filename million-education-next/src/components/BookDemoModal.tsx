'use client';

import { useState } from 'react';
import { X, Send } from 'lucide-react';
import styles from './BookDemoModal.module.css';

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookDemoModal({ isOpen, onClose }: BookDemoModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: 'Class 11 Science (PCM)',
    mode: 'Online',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in all required fields!');
      return;
    }

    // Create WhatsApp message with pre-filled details
    const message = `Hi! I want to book a demo class.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCourse: ${formData.course}\nMode: ${formData.mode}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/919004826378?text=${encodedMessage}`;

    // Show success message
    setSubmitted(true);
    setTimeout(() => {
      // Redirect to WhatsApp
      window.open(whatsappUrl, '_blank');
      onClose();
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        course: 'Class 11 Science (PCM)',
        mode: 'Online',
      });
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className={styles.backdrop} onClick={onClose} />

      {/* Modal */}
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>

        <div className={styles.header}>
          <h2>Book Your Free Demo Class</h2>
          <p>Fill your details and we'll connect you on WhatsApp</p>
        </div>

        {submitted ? (
          <div className={styles.successBox}>
            <div className={styles.successIcon}>✓</div>
            <h3>Details Submitted!</h3>
            <p>Redirecting to WhatsApp...</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.group}>
              <label>Your Name *</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

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
              <label>Select Course</label>
              <select
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              >
                <option>Class 11 Science (PCM)</option>
                <option>Class 11 Science (PCB)</option>
                <option>Class 12 Science (PCM)</option>
                <option>Class 12 Science (PCB)</option>
                <option>NEET Preparation</option>
                <option>JEE Main & Advanced</option>
              </select>
            </div>

            <div className={styles.group}>
              <label>Preferred Mode</label>
              <select
                value={formData.mode}
                onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
              >
                <option>Online</option>
                <option>Home Tuition</option>
                <option>Both</option>
              </select>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <Send size={18} />
              Continue to WhatsApp
            </button>
          </form>
        )}
      </div>
    </>
  );
}