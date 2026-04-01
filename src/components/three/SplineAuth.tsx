'use client';
import dynamic from 'next/dynamic';
import styles from './SplineAuth.module.css';

// Spline scene: "abstract sphere animation." by theshubhamdhage
// Community: https://app.spline.design/community/file/b32b2a5d-50c5-4821-8603-c85956bab0dd
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className={styles.fallback} />,
});

export default function SplineAuth() {
  return (
    <div className={styles.wrapper}>
      <Spline
        scene="https://prod.spline.design/fZkvjONp4tMIV5aE/scene.splinecode"
        className={styles.spline}
      />
      <div className={styles.overlay} />
    </div>
  );
}
