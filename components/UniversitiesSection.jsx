'use client';
import { motion } from 'framer-motion';
import styles from './UniversitiesSection.module.css';

const universities = [
  { name: 'University of Toronto', country: 'Canada', ranking: '#21', programs: 'Engineering, CS, Business', type: 'Public Research' },
  { name: 'University of Melbourne', country: 'Australia', ranking: '#14', programs: 'Medicine, Law, Arts', type: 'Public Research' },
  { name: 'Imperial College London', country: 'UK', ranking: '#6', programs: 'STEM, Medicine, Business', type: 'Public Research' },
  { name: 'MIT', country: 'USA', ranking: '#1', programs: 'Engineering, CS, Physics', type: 'Private Research' },
  { name: 'TU Munich', country: 'Germany', ranking: '#37', programs: 'Engineering, CS, Natural Sciences', type: 'Public Technical' },
  { name: 'University of Auckland', country: 'New Zealand', ranking: '#68', programs: 'Engineering, Health, Arts', type: 'Public Research' },
  { name: 'University of British Columbia', country: 'Canada', ranking: '#34', programs: 'Forestry, Mining, CS', type: 'Public Research' },
  { name: 'University of Sydney', country: 'Australia', ranking: '#19', programs: 'Architecture, Medicine, Law', type: 'Public Research' },
  { name: 'University of Oxford', country: 'UK', ranking: '#3', programs: 'Humanities, Sciences, Law', type: 'Public Collegiate' },
  { name: 'Stanford University', country: 'USA', ranking: '#2', programs: 'CS, Business, Engineering', type: 'Private Research' },
  { name: 'RWTH Aachen', country: 'Germany', ranking: '#87', programs: 'Mechanical, Electrical, CS', type: 'Public Technical' },
  { name: 'University of Dubai', country: 'UAE', ranking: '#Top 50 Arab', programs: 'Business, Engineering, IT', type: 'Private' },
];

const flags = {
  'Canada': '🇨🇦', 'Australia': '🇦🇺', 'UK': '🇬🇧', 'USA': '🇺🇸',
  'Germany': '🇩🇪', 'New Zealand': '🇳🇿', 'UAE': '🇦🇪',
};

const colors = {
  'Canada': '#dc2626', 'Australia': '#2563eb', 'UK': '#1d4ed8', 'USA': '#3b82f6',
  'Germany': '#eab308', 'New Zealand': '#000000', 'UAE': '#16a34a',
};

export default function UniversitiesSection() {
  const doubled = [...universities, ...universities];

  return (
    <section className={`section ${styles.section}`} id="universities">
      <div className="container">
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Partner Universities</span>
          <h2 className="section-title">World-Class Universities Await You</h2>
          <p className="section-subtitle">
            We partner with leading universities across the globe to offer you the best educational opportunities.
          </p>
        </motion.div>
      </div>

      {/* Row 1 — Left to Right */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {doubled.map((uni, i) => (
            <div className={`glass ${styles.card}`} key={`r1-${i}`}>
              <div className={styles.cardTop}>
                <span className={styles.flag}>{flags[uni.country]}</span>
                <span className={styles.ranking} style={{ borderColor: `${colors[uni.country]}40`, color: colors[uni.country] }}>
                  {uni.ranking}
                </span>
              </div>
              <h3 className={styles.cardName}>{uni.name}</h3>
              <p className={styles.cardCountry}>{uni.country}</p>
              <div className={styles.cardDivider} />
              <p className={styles.cardPrograms}>{uni.programs}</p>
              <span className={styles.cardType}>{uni.type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Right to Left */}
      <div className={styles.marqueeWrapper} style={{ marginTop: '16px' }}>
        <div className={`${styles.marquee} ${styles.marqueeReverse}`}>
          {[...doubled].reverse().map((uni, i) => (
            <div className={`glass ${styles.card}`} key={`r2-${i}`}>
              <div className={styles.cardTop}>
                <span className={styles.flag}>{flags[uni.country]}</span>
                <span className={styles.ranking} style={{ borderColor: `${colors[uni.country]}40`, color: colors[uni.country] }}>
                  {uni.ranking}
                </span>
              </div>
              <h3 className={styles.cardName}>{uni.name}</h3>
              <p className={styles.cardCountry}>{uni.country}</p>
              <div className={styles.cardDivider} />
              <p className={styles.cardPrograms}>{uni.programs}</p>
              <span className={styles.cardType}>{uni.type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
