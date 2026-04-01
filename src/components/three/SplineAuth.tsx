'use client';
import { useEffect } from 'react';
import styles from './SplineAuth.module.css';

export default function SplineAuth() {
  useEffect(() => {
    // Load Spline viewer as Web Component from CDN — no npm package needed
    if (!document.querySelector('script[data-spline-auth]')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://unpkg.com/@splinetool/viewer@0.9.506/build/spline-viewer.js';
      script.setAttribute('data-spline-auth', 'true');
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* @ts-ignore */}
      <spline-viewer
        url="https://prod.spline.design/fZkvjONp4tMIV5aE/scene.splinecode"
        style={{ width: '100%', height: '100%', display: 'block' }}
        loading-anim-type="none"
      />
      <div className={styles.overlay} />
    </div>
  );
}
