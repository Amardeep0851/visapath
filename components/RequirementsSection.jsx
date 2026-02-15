'use client';
import { motion } from 'framer-motion';
import styles from './RequirementsSection.module.css';

const categories = [
  {
    title: 'Personal & References',
    items: [
      {
        name: 'Statement of Purpose',
        level: 'Highly Critical',
        levelColor: '#e63946',
        desc: 'A personal essay describing your goals and motivations.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        ),
      },
      {
        name: 'Letters of Recommendation',
        level: '2-3 Letters',
        levelColor: '#f59e0b',
        desc: 'Reference letters from your professors or past employers.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
          </svg>
        ),
      },
      {
        name: 'Portfolio / Essays',
        level: 'Optional',
        levelColor: '#6b7280',
        desc: 'Required for Arts/Design courses or specific universities.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
          </svg>
        ),
      },
    ],
  },
  {
    title: 'Academics & Tests',
    items: [
      {
        name: 'Academic Transcripts',
        level: 'Mandatory',
        levelColor: '#e63946',
        desc: 'Official marksheets from your previous school or college.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
          </svg>
        ),
      },
      {
        name: 'English Proficiency Score',
        level: 'Required',
        levelColor: '#f59e0b',
        desc: 'TOEFL / IELTS test scores as proof of language skills.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
          </svg>
        ),
      },
      {
        name: 'Entrance Exams',
        level: 'Course Dependent',
        levelColor: '#3b82f6',
        desc: 'ACT/SAT for Undergrad, GMAT/GRE for Postgrad programs.',
        icon: (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
        ),
      },
    ],
  },
];

export default function RequirementsSection() {
  return (
    <section className={`section ${styles.section}`} id="requirements">
      <div className={`container ${styles.wrapper}`}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">Checklist</span>
          <h2 className="section-title">Admission Requirements for Study Abroad</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Ensure you have these documents ready to speed up your application process.
          </p>
        </motion.div>

        <div className={styles.categories}>
          {categories.map((cat, ci) => (
            <motion.div
              className={styles.category}
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.15 }}
            >
              <h3 className={styles.catTitle}>{cat.title}</h3>
              <div className={styles.cards}>
                {cat.items.map((item, ii) => (
                  <motion.div
                    className={`glass ${styles.card}`}
                    key={ii}
                    whileHover={{ y: -6, scale: 1.01 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div className={styles.cardIcon}>{item.icon}</div>
                    <div className={styles.cardContent}>
                      <div className={styles.cardTop}>
                        <h4 className={styles.cardName}>{item.name}</h4>
                        <span className={styles.cardLevel} style={{ borderColor: `${item.levelColor}40`, color: item.levelColor, background: `${item.levelColor}12` }}>
                          {item.level}
                        </span>
                      </div>
                      <p className={styles.cardDesc}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
