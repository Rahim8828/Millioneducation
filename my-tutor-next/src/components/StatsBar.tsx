'use client';

import { useEffect, useRef } from 'react';
import styles from './StatsBar.module.css';

interface StatItem {
  num: string;
  label: string;
  rawNum: number;
  suffix: string;
}

const stats: StatItem[] = [
  { num: '10,000+', rawNum: 10000, suffix: '+', label: 'Happy Students' },
  { num: '26,000+', rawNum: 26000, suffix: '+', label: 'Verified Tutors' },
  { num: '2,000+', rawNum: 2000, suffix: '+', label: 'Locations Covered' },
  { num: '8+', rawNum: 8, suffix: '+', label: 'Years of Excellence' },
];

function animateCounter(el: HTMLElement, target: number, suffix: string) {
  const duration = 2000;
  const start = performance.now();
  function update(ts: number) {
    const elapsed = ts - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(target * eased);
    el.textContent = current.toLocaleString('en-IN') + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

export default function StatsBar({ dark = false }: { dark?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated.current) {
            animated.current = true;
            const nums = ref.current?.querySelectorAll<HTMLElement>('[data-num]');
            nums?.forEach((el) => {
              const target = Number(el.dataset.target);
              const suffix = el.dataset.suffix ?? '';
              animateCounter(el, target, suffix);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${styles.bar} ${dark ? styles.dark : styles.orange}`} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((s) => (
            <div className={styles.item} key={s.label}>
              <div
                className={styles.num}
                data-num
                data-target={s.rawNum}
                data-suffix={s.suffix}
              >
                {s.num}
              </div>
              <div className={styles.label}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
