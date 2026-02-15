'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './HowItWorksSection.module.css';

const steps = [
  {
    num: '01',
    title: 'Start for ₹999',
    desc: 'Create your profile for a ₹999 introductory token fee. Receive a quick eligibility check and professional clarity on your options.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Shortlist & Strategy',
    desc: 'Receive a shortlist of 3–6 matched courses and universities with clear requirements, entry fees, and deadlines.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Documents & Application',
    desc: 'We provide expert guidance on preparing SOPs, LORs, and financial checklists, facilitating the submission of genuine applications.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Offer Letter & Next Steps',
    desc: 'Track your university admission decisions, book IELTS/DET if needed, and prepare for the visa stage.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#e63946" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    ),
  },
];

export default function HowItWorksSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  return (
    <section className={`section ${styles.section}`} id="how-it-works" ref={sectionRef}>
      <div className={`glow-white ${styles.glow}`} />
      <div className={`container ${styles.grid}`}>
        {/* Left — Image Area */}
        <motion.div
          className={styles.imageArea}
          style={{ y: imageY }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className={styles.imageFrame}>
            <div className={styles.imagePlaceholder}>
              <div className={styles.imageGraphic}>
                <div className={styles.personIcon}>
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(230,57,70,0.4)" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div className={styles.imageDecor1} />
                <div className={styles.imageDecor2} />
                <span className={styles.imageLabel}>Your Journey</span>
              </div>
            </div>
            <div className={`glass ${styles.imageFloat}`}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              <span>97% Success Rate</span>
            </div>
          </div>
        </motion.div>

        {/* Right — Steps */}
        <div className={styles.stepsArea}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="section-label">Process</span>
            <h2 className="section-title">How does it work?</h2>
            <p className="section-subtitle" style={{ marginBottom: '48px' }}>
              Four simple steps from sign-up to university admission.
            </p>
          </motion.div>

          <div className={styles.timeline}>
            {steps.map((step, i) => (
              <motion.div
                className={styles.step}
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className={styles.stepLine}>
                  <div className={styles.stepDot}>
                    <span className={styles.stepNum}>{step.num}</span>
                  </div>
                  {i < steps.length - 1 && <div className={styles.stepConnector} />}
                </div>
                <div className={`glass ${styles.stepCard}`}>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <div>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
