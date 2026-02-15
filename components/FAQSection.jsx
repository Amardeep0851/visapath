'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './FAQSection.module.css';

const faqs = [
  {
    q: 'How do I get started with VisaPath?',
    a: 'Simply pay the ₹999 introductory fee to create your profile. Our counselors will conduct an eligibility check and guide you through every step of the process.',
  },
  {
    q: 'What countries can I apply to through your services?',
    a: 'We currently support applications to the USA, UK, Canada, Australia, Germany, Dubai (UAE), and New Zealand. Each destination has dedicated counselors with specific expertise.',
  },
  {
    q: 'How long does the entire process take?',
    a: 'The timeline varies by country, but typically takes 3–9 months from initial consultation to university offer letter. We recommend starting 6–12 months before your intended intake.',
  },
  {
    q: 'What documents do I need to prepare?',
    a: 'Essential documents include academic transcripts, English proficiency scores (IELTS/TOEFL), Statement of Purpose, Letters of Recommendation, and financial documents. Our team helps you prepare each one.',
  },
  {
    q: 'Is my personal information secure?',
    a: 'Absolutely. We use industry-standard encryption and strict privacy policies to protect all your personal data and documents. Your information is never shared with third parties without consent.',
  },
  {
    q: 'What is your success rate?',
    a: 'We maintain a 97% approval rate across all visa applications processed. Our experienced counselors ensure your application meets the highest standards before submission.',
  },
  {
    q: 'Can I get a refund if my application is rejected?',
    a: 'We offer a partial refund policy depending on the stage of your application. Please contact our support team for detailed information about our refund terms.',
  },
];

function FAQItem({ faq, isOpen, onClick, index }) {
  return (
    <motion.div
      className={`glass ${styles.item} ${isOpen ? styles.itemOpen : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <button className={styles.question} onClick={onClick} aria-expanded={isOpen}>
        <span>{faq.q}</span>
        <motion.span
          className={styles.icon}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className={styles.answer}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`section ${styles.section}`} id="faq">
      <div className={`glow-red ${styles.glow}`} />
      <div className={`container ${styles.wrapper}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Do you have questions?</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            We&apos;ve answered the most common questions to help you get started.
          </p>
        </motion.div>

        <div className={styles.list}>
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
