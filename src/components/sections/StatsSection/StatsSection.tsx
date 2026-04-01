'use client';
import { useTranslations } from 'next-intl';
import styles from './StatsSection.module.css';

const partners = ['🏫 НИШ', '📚 Мектеп', '🎓 КазНУ', '🏛️ МОН РК', '🌐 Bilim', '🔬 Назарбаев Университет'];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className="container">
        {/* Partner Ticker */}
        <div className={styles.tickerWrap}>
          <div className={styles.ticker}>
            {[...partners, ...partners].map((p, i) => (
              <span key={i} className={styles.tickerItem}>{p}</span>
            ))}
          </div>
        </div>

        {/* Trust line */}
        <p className={styles.trustText}>
          Нам доверяют учителя из более чем <strong>200+ школ</strong> по всему Казахстану
        </p>
      </div>
    </section>
  );
}
