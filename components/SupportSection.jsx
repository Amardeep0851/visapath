'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './SupportSection.module.css';

const benefits = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Direct access to admission experts',
    desc: 'Connect directly with experienced counselors who know the system inside out.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Response within 2 hours',
    desc: 'Get quick and thorough answers to all your admission queries.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
    title: 'Secure & Confidential',
    desc: 'Your personal data and documents are handled with the utmost privacy.',
  },
];

export default function SupportSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className={`section ${styles.section}`} id="contact">
      <div className={`glow-red ${styles.glow}`} />
      <div className={`container ${styles.grid}`}>
        {/* Left — Info */}
        <motion.div
          className={styles.info}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Get support for your application today
          </h2>
          <p className={styles.desc}>
            Have questions about your admit letter or application? Fill out the
            form and our counselor will guide you step-by-step.
          </p>

          <div className={styles.benefits}>
            {benefits.map((b, i) => (
              <motion.div
                className={styles.benefit}
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className={styles.benefitIcon}>{b.icon}</div>
                <div>
                  <h4 className={styles.benefitTitle}>{b.title}</h4>
                  <p className={styles.benefitDesc}>{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Form */}
        <motion.form
          className={`glass ${styles.form}`}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <h3 className={styles.formTitle}>Send us a message</h3>
          <p className={styles.formSub}>We&apos;ll get back to you within 2 hours</p>

          <div className={styles.field}>
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" type="text" placeholder="John Doe" required value={formData.name} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="john@example.com" required value={formData.email} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label htmlFor="phone">Phone Number</label>
            <input id="phone" name="phone" type="tel" placeholder="+91 98765 43210" value={formData.phone} onChange={handleChange} />
          </div>
          <div className={styles.field}>
            <label htmlFor="message">Your Message</label>
            <textarea id="message" name="message" rows="4" placeholder="Tell us about your study abroad plans..." required value={formData.message} onChange={handleChange} />
          </div>

          <button type="submit" className={`btn btn-primary ${styles.submitBtn}`} disabled={submitted}>
            {submitted ? '✓ Message Sent!' : 'Submit Enquiry'}
          </button>

          <p className={styles.formNote}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Your data is encrypted and secure
          </p>
        </motion.form>
      </div>
    </section>
  );
}
