'use client';
import styles from './SplineAuth.module.css';

export default function SplineAuth() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.animatedBg}>
        <div className={styles.sphere1} />
        <div className={styles.sphere2} />
        <div className={styles.sphere3} />
        <div className={styles.ring1} />
        <div className={styles.ring2} />
      </div>
      <div className={styles.overlay} />
    </div>
  );
}
