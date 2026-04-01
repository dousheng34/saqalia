'use client';

import { useEffect, useRef } from 'react';

interface NeuralNode {
  x: number; y: number; z: number;
  vx: number; vy: number; vz: number;
  size: number;
}

interface Connection {
  a: number; b: number; opacity: number;
}

export default function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const NODE_COUNT = 120;
    const MAX_DIST = 180;
    const nodes: NeuralNode[] = [];
    const connections: Connection[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const initNodes = () => {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 400 + 100,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          vz: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2.5 + 0.5,
        });
      }
    };

    const projectNode = (node: NeuralNode) => {
      const parallaxX = (mouseX / width - 0.5) * 60;
      const parallaxY = (mouseY / height - 0.5) * 40;
      const perspective = 600;
      const scale = perspective / (perspective + node.z);
      return {
        px: (node.x - width / 2 + parallaxX) * scale + width / 2,
        py: (node.y - height / 2 + parallaxY) * scale + height / 2,
        scale,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Update nodes
      nodes.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;
        node.z += node.vz;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
        if (node.z < 50 || node.z > 600) node.vz *= -1;
      });

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < MAX_DIST) {
            const pa = projectNode(a);
            const pb = projectNode(b);
            const alpha = (1 - dist / MAX_DIST) * 0.25 * Math.min(pa.scale, pb.scale);

            const grad = ctx.createLinearGradient(pa.px, pa.py, pb.px, pb.py);
            grad.addColorStop(0, `rgba(124, 58, 237, ${alpha})`);
            grad.addColorStop(0.5, `rgba(6, 182, 212, ${alpha * 0.8})`);
            grad.addColorStop(1, `rgba(124, 58, 237, ${alpha})`);

            ctx.beginPath();
            ctx.moveTo(pa.px, pa.py);
            ctx.lineTo(pb.px, pb.py);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.8 * Math.min(pa.scale, pb.scale);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        const { px, py, scale } = projectNode(node);
        const r = node.size * scale;

        // Outer glow
        const glow = ctx.createRadialGradient(px, py, 0, px, py, r * 6);
        glow.addColorStop(0, `rgba(124, 58, 237, ${0.4 * scale})`);
        glow.addColorStop(0.5, `rgba(124, 58, 237, ${0.1 * scale})`);
        glow.addColorStop(1, 'rgba(124, 58, 237, 0)');
        ctx.beginPath();
        ctx.arc(px, py, r * 6, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(px, py, r, 0, Math.PI * 2);
        const nodeGrad = ctx.createRadialGradient(px, py, 0, px, py, r);
        nodeGrad.addColorStop(0, `rgba(200, 180, 255, ${scale})`);
        nodeGrad.addColorStop(1, `rgba(124, 58, 237, ${0.6 * scale})`);
        ctx.fillStyle = nodeGrad;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    const onMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) {
        mouseX = e.touches[0].clientX;
        mouseY = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', () => { resize(); initNodes(); });
    window.addEventListener('mousemove', onMouse, { passive: true });
    window.addEventListener('touchmove', onTouch, { passive: true });

    resize();
    initNodes();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouse);
      window.removeEventListener('touchmove', onTouch);
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
