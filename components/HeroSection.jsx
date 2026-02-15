'use client';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './HeroSection.module.css';

const stats = [
  { number: 500, suffix: '+', label: 'Letters Issued' },
  { number: 97, suffix: '%', label: 'Approval Rate' },
  { number: 132, suffix: '+', label: 'Courses' },
];

const students = [
  { name: 'Priya Sharma', country: 'Canada', visa: 'Study Visa', date: 'Jan 2025' },
  { name: 'Rahul Mehta', country: 'Australia', visa: 'Student Visa', date: 'Dec 2024' },
  { name: 'Ananya Patel', country: 'UK', visa: 'Tier 4 Visa', date: 'Nov 2024' },
  { name: 'Vikram Singh', country: 'USA', visa: 'F-1 Visa', date: 'Oct 2024' },
  { name: 'Sneha Reddy', country: 'Germany', visa: 'Study Visa', date: 'Sep 2024' },
  { name: 'Arjun Nair', country: 'New Zealand', visa: 'Student Visa', date: 'Aug 2024' },
  { name: 'Kavitha Iyer', country: 'Canada', visa: 'Study Permit', date: 'Jul 2024' },
  { name: 'Rohan Das', country: 'Australia', visa: 'Subclass 500', date: 'Jun 2024' },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % students.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      {/* Ambient glow effects */}
      <div className={`glow-red ${styles.glow1}`} />
      <div className={`glow-white ${styles.glow2}`} />

      {/* ── Navbar ────────────────────────────── */}
      <nav className={styles.nav}>
        <div className={`container ${styles.navInner}`}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#e63946" />
                <path d="M2 9V23L16 30V16L2 9Z" fill="#e63946" opacity="0.7" />
                <path d="M30 9V23L16 30V16L30 9Z" fill="#e63946" opacity="0.4" />
              </svg>
            </div>
            <span className={styles.logoText}>VisaPath</span>
          </div>
          <ul className={styles.navLinks}>
            <li><a href="#destinations">Destinations</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#requirements">Requirements</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href="#contact" className="btn btn-primary" style={{ padding: '10px 24px', fontSize: '0.85rem' }}>
            Get Started
          </a>
        </div>
      </nav>

      {/* ── Hero Content ─────────────────────── */}
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroLeft}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Trusted by 500+ students worldwide
            </span>
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Your Journey to{' '}
            <span className={styles.titleHighlight}>Study Abroad</span>{' '}
            Starts Here
          </motion.h1>

          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Expert guidance for university admissions, visa processing, and
            immigration support. Let us turn your dream into reality.
          </motion.p>

          <motion.div
            className={styles.heroCta}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <a href="#contact" className="btn btn-primary">
              Book Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#how-it-works" className="btn btn-ghost">
              Learn More
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            {stats.map((s, i) => (
              <div className={styles.stat} key={i}>
                <span className={styles.statNumber}>
                  <AnimatedCounter target={s.number} suffix={s.suffix} />
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Visa Slider ──────────────────────── */}
        <motion.div
          className={styles.heroRight}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderHeader}>
              <span className={styles.sliderLive} />
              <span>Recent Approvals</span>
            </div>
            <div className={styles.sliderTrack}>
              <AnimatePresence mode="popLayout">
                {[0, 1, 2, 3].map((offset) => {
                  const idx = (currentSlide + offset) % students.length;
                  const student = students[idx];
                  return (
                    <motion.div
                      key={`${idx}-${currentSlide}`}
                      className={`glass ${styles.sliderCard}`}
                      initial={{ opacity: 0, y: 40, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -40, scale: 0.95 }}
                      transition={{ duration: 0.5, delay: offset * 0.08 }}
                    >
                      <div className={styles.studentAvatar}>
                        {student.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className={styles.studentInfo}>
                        <span className={styles.studentName}>{student.name}</span>
                        <span className={styles.studentDetail}>{student.visa} • {student.country}</span>
                      </div>
                      <div className={styles.studentBadge}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                        Approved
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
