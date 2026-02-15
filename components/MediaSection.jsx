'use client';
import { motion } from 'framer-motion';
import styles from './MediaSection.module.css';

const media = [
  { name: 'The Times of India', type: 'Newspaper', reach: '50M+ readers' },
  { name: 'NDTV Education', type: 'News Channel', reach: '30M+ viewers' },
  { name: 'Hindustan Times', type: 'Newspaper', reach: '40M+ readers' },
  { name: 'India Today', type: 'Magazine', reach: '25M+ readers' },
  { name: 'Education World', type: 'Publication', reach: '5M+ readers' },
  { name: 'YouTube Edu', type: 'Platform', reach: '10M+ subscribers' },
  { name: 'The Economic Times', type: 'Newspaper', reach: '35M+ readers' },
  { name: 'Business Standard', type: 'Newspaper', reach: '20M+ readers' },
];

export default function MediaSection() {
  return (
    <section className={`section ${styles.section}`}>
      <div className={`container ${styles.wrapper}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Press</span>
          <h2 className="section-title">Media Coverage</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Our announcements and content have appeared across various media and content platforms.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {media.map((m, i) => (
            <motion.div
              className={`glass ${styles.card}`}
              key={i}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
            >
              <div className={styles.cardLogo}>
                <span className={styles.cardInitial}>{m.name.charAt(0)}</span>
              </div>
              <h4 className={styles.cardName}>{m.name}</h4>
              <div className={styles.cardMeta}>
                <span className={styles.cardType}>{m.type}</span>
                <span className={styles.cardReach}>{m.reach}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
