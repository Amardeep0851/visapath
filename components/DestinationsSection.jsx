'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './DestinationsSection.module.css';

const countries = [
  {
    id: 'usa', name: 'USA', flag: '🇺🇸',
    intakes: 'Jan / May / Aug / Sep',
    applyBefore: '6–9 Months prior',
    expenses: '₹25L – ₹45L',
    exams: 'IELTS / TOEFL / PTE',
    steps: ['Shortlist Universities', 'Review SOP & LORs', 'Submit Applications'],
  },
  {
    id: 'uk', name: 'UK', flag: '🇬🇧',
    intakes: 'Sep / Jan',
    applyBefore: '6–12 Months prior',
    expenses: '₹20L – ₹40L',
    exams: 'IELTS / PTE',
    steps: ['University Selection', 'UCAS Application', 'CAS & Visa Process'],
  },
  {
    id: 'canada', name: 'Canada', flag: '🇨🇦',
    intakes: 'Sep / Jan / May',
    applyBefore: '6–8 Months prior',
    expenses: '₹15L – ₹35L',
    exams: 'IELTS / TOEFL / PTE / DET',
    steps: ['Course Shortlisting', 'Application & SOP', 'Study Permit Process'],
  },
  {
    id: 'australia', name: 'Australia', flag: '🇦🇺',
    intakes: 'Feb / Jul',
    applyBefore: '6–9 Months prior',
    expenses: '₹18L – ₹42L',
    exams: 'IELTS / PTE / TOEFL',
    steps: ['University Matching', 'Document Preparation', 'CoE & Visa Application'],
  },
  {
    id: 'germany', name: 'Germany', flag: '🇩🇪',
    intakes: 'Oct / Apr',
    applyBefore: '8–12 Months prior',
    expenses: '₹8L – ₹15L',
    exams: 'IELTS / TestDaF / Goethe',
    steps: ['Uni-Assist Application', 'APS Verification', 'Blocked Account & Visa'],
  },
  {
    id: 'dubai', name: 'Dubai (UAE)', flag: '🇦🇪',
    intakes: 'Sep / Jan / Jun',
    applyBefore: '3–6 Months prior',
    expenses: '₹10L – ₹25L',
    exams: 'IELTS / TOEFL / EmSAT',
    steps: ['University Selection', 'Direct Application', 'Student Visa Processing'],
  },
  {
    id: 'nz', name: 'New Zealand', flag: '🇳🇿',
    intakes: 'Feb / Jul',
    applyBefore: '6–8 Months prior',
    expenses: '₹15L – ₹30L',
    exams: 'IELTS / PTE / TOEFL',
    steps: ['Course Matching', 'Application Submit', 'Visa & Post-Landing'],
  },
];

export default function DestinationsSection() {
  const [active, setActive] = useState(0);
  const country = countries[active];

  return (
    <section className={`section ${styles.section}`} id="destinations">
      <div className={`glow-red ${styles.glow}`} />
      <div className={`container ${styles.wrapper}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Destinations</span>
          <h2 className="section-title">Where do you want to study?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Choose your dream destination to see intake dates, estimated costs, and requirements.
          </p>
        </motion.div>

        {/* Country Tabs */}
        <motion.div
          className={styles.tabs}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {countries.map((c, i) => (
            <button
              key={c.id}
              className={`${styles.tab} ${active === i ? styles.tabActive : ''}`}
              onClick={() => setActive(i)}
            >
              <span className={styles.tabFlag}>{c.flag}</span>
              {c.name}
            </button>
          ))}
        </motion.div>

        {/* Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={country.id}
            className={`glass ${styles.content}`}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.35 }}
          >
            <div className={styles.contentHeader}>
              <span className={styles.contentFlag}>{country.flag}</span>
              <div>
                <h3 className={styles.contentTitle}>Study in {country.name}</h3>
                <p className={styles.contentSub}>Everything you need to know before you apply.</p>
              </div>
            </div>

            <div className={styles.details}>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Upcoming Intakes</span>
                <span className={styles.detailValue}>{country.intakes}</span>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Apply Before</span>
                <span className={styles.detailValue}>{country.applyBefore}</span>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Est. Annual Expenses</span>
                <span className={styles.detailValue}>{country.expenses}</span>
              </div>
              <div className={styles.detailCard}>
                <span className={styles.detailLabel}>Accepted Exams</span>
                <span className={styles.detailValue}>{country.exams}</span>
              </div>
            </div>

            <div className={styles.ctaArea}>
              <div className={styles.ctaLeft}>
                <span className={styles.ctaBadge}>Limited Offer</span>
                <h4>Ready to apply to {country.name}?</h4>
                <ul className={styles.ctaSteps}>
                  {country.steps.map((s, i) => (
                    <li key={i}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.ctaRight}>
                <span className={styles.ctaPrice}>
                  Start for just <strong>₹999</strong>
                </span>
                <span className={styles.ctaNote}>Offer valid for first consultation.</span>
                <a href="#contact" className="btn btn-primary" style={{ padding: '12px 28px', fontSize: '0.9rem' }}>
                  Book Now
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
