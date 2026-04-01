'use client';
import dynamic from 'next/dynamic';
import styles from './SplineHero.module.css';

// Spline scene: "AI Landing page web design 3D Animation" by oanagavrila1902
// Community: https://app.spline.design/community/file/07bc94d9-099e-4b76-a3fa-98d4f2902f58
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className={styles.fallback} />,
});

export default function SplineHero() {
  return (
    <div className={styles.wrapper}>
      <Spline
        scene="https://prod.spline.design/odNJwdJ2JeBKbwoA/scene.splinecode"
        className={styles.spline}
      />
      {/* Fade overlay at bottom so content blends in */}
      <div className={styles.fadeBottom} />
      <div className={styles.fadeLeft} />
    </div>
  );
}
