'use client';

import { useEffect, useRef } from 'react';

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = window.innerWidth;
    let height = canvas.offsetHeight || 600;

    interface Star {
      x: number; y: number; z: number;
      size: number; opacity: number; speed: number;
    }

    const STAR_COUNT = 200;
    const stars: Star[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = canvas.offsetHeight || 600;
      canvas.width = width;
      canvas.height = height;
    };

    const initStars = () => {
      stars.length = 0;
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random(),
          size: Math.random() * 1.5 + 0.2,
          opacity: Math.random() * 0.7 + 0.1,
          speed: Math.random() * 0.003 + 0.001,
        });
      }
    };

    let time = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      time += 0.01;

      stars.forEach((star) => {
        star.opacity = 0.2 + Math.abs(Math.sin(time * star.speed * 10 + star.z * 100)) * 0.6;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${star.z > 0.6 ? '200,180,255' : star.z > 0.3 ? '100,180,255' : '180,220,255'}, ${star.opacity})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', () => { resize(); initStars(); });
    resize();
    initStars();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
