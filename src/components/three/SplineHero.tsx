'use client';
import styles from './SplineHero.module.css';

export default function SplineHero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.animatedBg}>
        <div className={styles.orb1} />
        <div className={styles.orb2} />
        <div className={styles.orb3} />
        <div className={styles.grid} />
      </div>
      <div className={styles.fadeBottom} />
      <div className={styles.fadeLeft} />
    </div>
  );
}
