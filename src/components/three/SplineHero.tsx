'use client';
import { useEffect } from 'react';
import styles from './SplineHero.module.css';

export default function SplineHero() {
  useEffect(() => {
    // Load model-viewer web component from Google CDN
    if (!customElements.get('model-viewer')) {
      const script = document.createElement('script');
      script.type = 'module';
      script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/3.5.0/model-viewer.min.js';
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* @ts-ignore */}
      <model-viewer
        src="https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/models/gltf/RobotExpressive/RobotExpressive.glb"
        alt="AI Robot"
        auto-rotate
        auto-rotate-delay="0"
        rotation-per-second="25deg"
        animation-name="Wave"
        autoplay
        camera-orbit="25deg 80deg 4m"
        field-of-view="22deg"
        exposure="0.3"
        shadow-intensity="0"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          '--poster-color': 'transparent',
          filter: 'hue-rotate(100deg) saturate(2) brightness(0.85)',
        }}
      />
      <div className={styles.fadeBottom} />
      <div className={styles.fadeLeft} />
    </div>
  );
}
