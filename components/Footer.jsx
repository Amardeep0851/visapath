'use client';
import { useEffect, useRef } from 'react';
import styles from './Footer.module.css';

// Deterministic star positions to avoid hydration mismatch
const stars = Array.from({ length: 30 }, (_, i) => ({
  left: ((i * 37 + 13) % 100),
  top: ((i * 23 + 7) % 60),
  size: 1 + ((i * 11) % 20) / 10,
  delay: ((i * 17) % 40) / 10,
  duration: 2 + ((i * 13) % 30) / 10,
}));

// Deterministic window lit pattern
const isWindowLit = (bx, row, col) => ((bx + row * 7 + col * 13) % 10) > 3;

export default function Footer() {
  const planeRef = useRef(null);

  useEffect(() => {
    // Subtle parallax on the plane based on mouse
    const handleMouse = (e) => {
      if (!planeRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 30;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      planeRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <footer className={styles.footer}>
      {/* ── Sky / Background ──────────────── */}
      <div className={styles.sky}>
        {/* Stars */}
        <div className={styles.stars}>
          {stars.map((s, i) => (
            <div
              key={i}
              className={styles.star}
              style={{
                left: `${s.left}%`,
                top: `${s.top}%`,
                width: `${s.size}px`,
                height: `${s.size}px`,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
              }}
            />
          ))}
        </div>

        {/* Clouds Layer */}
        <div className={styles.cloudsLayer}>
          <div className={styles.cloudTrack}>
            <svg className={styles.cloud} style={{ top: '15%' }} viewBox="0 0 200 80" width="160" height="64" fill="rgba(255,255,255,0.04)">
              <ellipse cx="60" cy="50" rx="60" ry="30" />
              <ellipse cx="100" cy="35" rx="50" ry="28" />
              <ellipse cx="150" cy="48" rx="45" ry="25" />
            </svg>
            <svg className={styles.cloud} style={{ top: '35%', animationDelay: '-12s' }} viewBox="0 0 200 80" width="120" height="48" fill="rgba(255,255,255,0.03)">
              <ellipse cx="60" cy="50" rx="55" ry="28" />
              <ellipse cx="110" cy="38" rx="48" ry="26" />
              <ellipse cx="155" cy="50" rx="40" ry="22" />
            </svg>
            <svg className={styles.cloud} style={{ top: '8%', animationDelay: '-25s' }} viewBox="0 0 200 80" width="140" height="56" fill="rgba(255,255,255,0.05)">
              <ellipse cx="55" cy="48" rx="55" ry="28" />
              <ellipse cx="105" cy="35" rx="50" ry="26" />
              <ellipse cx="148" cy="46" rx="42" ry="24" />
            </svg>
            <svg className={styles.cloud} style={{ top: '50%', animationDelay: '-8s' }} viewBox="0 0 200 80" width="100" height="40" fill="rgba(255,255,255,0.025)">
              <ellipse cx="55" cy="45" rx="50" ry="25" />
              <ellipse cx="110" cy="38" rx="45" ry="22" />
              <ellipse cx="150" cy="45" rx="38" ry="20" />
            </svg>
          </div>
        </div>

        {/* ── Plane ──────────────────────────── */}
        <div className={styles.planeWrapper}>
          <div className={styles.planeFloat} ref={planeRef}>
            <svg className={styles.plane} viewBox="0 0 120 40" width="80" height="28" fill="none">
              {/* Fuselage */}
              <path d="M10 22 C10 22, 30 18, 85 18 C95 18, 105 20, 110 22 C105 24, 95 26, 85 26 C30 26, 10 22, 10 22Z" fill="rgba(255,255,255,0.9)" />
              {/* Wing */}
              <path d="M50 22 L38 8 L70 18 Z" fill="rgba(230,57,70,0.85)" />
              <path d="M50 22 L42 34 L68 26 Z" fill="rgba(230,57,70,0.65)" />
              {/* Tail */}
              <path d="M10 22 L5 12 L22 19 Z" fill="rgba(230,57,70,0.9)" />
              <path d="M10 22 L8 28 L20 25 Z" fill="rgba(230,57,70,0.6)" />
              {/* Windows */}
              <circle cx="60" cy="21" r="1.5" fill="rgba(255,255,255,0.3)" />
              <circle cx="67" cy="21" r="1.5" fill="rgba(255,255,255,0.3)" />
              <circle cx="74" cy="21" r="1.5" fill="rgba(255,255,255,0.3)" />
              <circle cx="81" cy="21" r="1.5" fill="rgba(255,255,255,0.3)" />
              <circle cx="88" cy="21.5" r="1.5" fill="rgba(255,255,255,0.3)" />
              {/* Cockpit */}
              <path d="M105 20 C108 20.5, 110 21, 110 22 C110 23, 108 23.5, 105 24" fill="rgba(180,220,255,0.5)" />
            </svg>
            {/* Contrail */}
            <div className={styles.contrail} />
            <div className={styles.contrail2} />
          </div>
        </div>
      </div>

      {/* ── Cityscape ────────────────────────── */}
      <div className={styles.cityscape}>
        <svg className={styles.buildings} viewBox="0 0 1440 260" preserveAspectRatio="none" fill="none">
          {/* Background buildings (darker, shorter) */}
          <rect x="40" y="130" width="45" height="130" rx="2" fill="rgba(255,255,255,0.03)" />
          <rect x="95" y="100" width="35" height="160" rx="2" fill="rgba(255,255,255,0.04)" />
          <rect x="180" y="110" width="50" height="150" rx="2" fill="rgba(255,255,255,0.03)" />
          <rect x="290" y="90" width="40" height="170" rx="2" fill="rgba(255,255,255,0.04)" />
          <rect x="380" y="120" width="55" height="140" rx="2" fill="rgba(255,255,255,0.03)" />
          <rect x="500" y="85" width="35" height="175" rx="2" fill="rgba(255,255,255,0.04)" />
          <rect x="590" y="105" width="48" height="155" rx="2" fill="rgba(255,255,255,0.03)" />
          <rect x="700" y="95" width="42" height="165" rx="2" fill="rgba(255,255,255,0.04)" />
          <rect x="800" y="115" width="50" height="145" rx="2" fill="rgba(255,255,255,0.03)" />
          <rect x="910" y="100" width="38" height="160" rx="2" fill="rgba(255,255,255,0.04)" />
          <rect x="1000" y="88" width="45" height="172" rx="2" fill="rgba(255,255,255,0.03)" />
          <rect x="1100" y="110" width="55" height="150" rx="2" fill="rgba(255,255,255,0.04)" />
          <rect x="1200" y="95" width="40" height="165" rx="2" fill="rgba(255,255,255,0.03)" />
          <rect x="1300" y="120" width="48" height="140" rx="2" fill="rgba(255,255,255,0.04)" />

          {/* Foreground buildings (brighter, taller) */}
          <rect x="10" y="160" width="60" height="100" rx="2" fill="rgba(255,255,255,0.06)" />
          <rect x="140" y="80" width="30" height="180" rx="2" fill="rgba(255,255,255,0.07)" />
          <rect x="240" y="140" width="40" height="120" rx="2" fill="rgba(255,255,255,0.06)" />
          <rect x="340" y="70" width="28" height="190" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="440" y="100" width="50" height="160" rx="2" fill="rgba(255,255,255,0.06)" />
          <rect x="545" y="130" width="35" height="130" rx="2" fill="rgba(255,255,255,0.07)" />
          <rect x="650" y="60" width="38" height="200" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="750" y="140" width="42" height="120" rx="2" fill="rgba(255,255,255,0.06)" />
          <rect x="855" y="75" width="45" height="185" rx="2" fill="rgba(255,255,255,0.07)" />
          <rect x="955" y="130" width="35" height="130" rx="2" fill="rgba(255,255,255,0.06)" />
          <rect x="1055" y="65" width="32" height="195" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="1160" y="135" width="30" height="125" rx="2" fill="rgba(255,255,255,0.07)" />
          <rect x="1250" y="80" width="42" height="180" rx="2" fill="rgba(255,255,255,0.06)" />
          <rect x="1360" y="100" width="55" height="160" rx="2" fill="rgba(255,255,255,0.07)" />

          {/* Windows (tiny glowing dots) */}
          {[140, 340, 650, 855, 1055, 1250].map((bx) =>
            Array.from({ length: 8 }).map((_, row) =>
              Array.from({ length: 3 }).map((_, col) => (
                <rect
                  key={`w-${bx}-${row}-${col}`}
                  x={bx + 5 + col * 9}
                  y={85 + row * 18}
                  width="4"
                  height="6"
                  rx="0.5"
                  fill={isWindowLit(bx, row, col) ? 'rgba(255,200,50,0.25)' : 'rgba(255,255,255,0.05)'}
                />
              ))
            )
          )}

          {/* Antenna/spire on tallest buildings */}
          <line x1="156" y1="80" x2="156" y2="60" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <circle cx="156" cy="58" r="2" fill="rgba(230,57,70,0.6)" className={styles.blink} />
          <line x1="669" y1="60" x2="669" y2="38" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <circle cx="669" cy="36" r="2" fill="rgba(230,57,70,0.6)" className={styles.blink} style={{ animationDelay: '1s' }} />
          <line x1="1071" y1="65" x2="1071" y2="42" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5" />
          <circle cx="1071" cy="40" r="2" fill="rgba(230,57,70,0.6)" className={styles.blink} style={{ animationDelay: '2s' }} />
        </svg>
      </div>

      {/* ── Road ─────────────────────────────── */}
      <div className={styles.road}>
        <div className={styles.roadSurface}>
          <div className={styles.roadLines}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div className={styles.roadDash} key={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Footer Content ───────────────────── */}
      <div className={styles.content}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <path d="M16 2L2 9L16 16L30 9L16 2Z" fill="#e63946" />
                <path d="M2 9V23L16 30V16L2 9Z" fill="#e63946" opacity="0.7" />
                <path d="M30 9V23L16 30V16L30 9Z" fill="#e63946" opacity="0.4" />
              </svg>
              <span>VisaPath</span>
            </div>
            <p className={styles.tagline}>
              Your trusted partner for study abroad admissions and immigration support.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Explore</h4>
              <a href="#destinations">Destinations</a>
              <a href="#universities">Universities</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#requirements">Requirements</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Support</h4>
              <a href="#contact">Contact Us</a>
              <a href="#faq">FAQ</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className={styles.linkGroup}>
              <h4>Connect</h4>
              <a href="#">Instagram</a>
              <a href="#">LinkedIn</a>
              <a href="#">YouTube</a>
              <a href="#">Twitter / X</a>
            </div>
          </div>
        </div>

        <div className={`container ${styles.bottom}`}>
          <span>© 2025 VisaPath. All rights reserved.</span>
          <span>Made with ❤️ for dreamers worldwide</span>
        </div>
      </div>
    </footer>
  );
}
