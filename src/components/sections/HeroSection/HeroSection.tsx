'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './HeroSection.module.css';

// Real Spline 3D — "AI Landing page web design 3D Animation"
const SplineHero = dynamic(() => import('@/components/three/SplineHero'), { ssr: false });

function CountUp({ target, suffix = '', duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(ease * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale();

  return (
    <section className={styles.hero} id="hero">
      {/* Real 3D Spline Background */}
      <SplineHero />

      {/* Subtle grid overlay */}
      <div className={styles.grid} />

      <div className={`container ${styles.content}`}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          <span>{t('badge')}</span>
        </div>

        {/* Main Title */}
        <h1 className={styles.title}>
          <span className={styles.titleLine1}>{t('title').split(' ').slice(0, 3).join(' ')}</span>
          <span className={`${styles.titleLine2} gradient-text`}>
            {t('title').split(' ').slice(3).join(' ')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>{t('subtitle')}</p>

        {/* CTA Buttons */}
        <div className={styles.ctas}>
          <Link href={`/${locale}/auth/register`} className={`btn btn-primary btn-lg ${styles.ctaPrimary}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            {t('cta_primary')}
          </Link>
          <a
            href={`https://wa.me/77073138701`}
            target="_blank"
            rel="noreferrer"
            className={`btn btn-secondary btn-lg ${styles.ctaSecondary}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#25D366">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
            </svg>
            Написать в WhatsApp
          </a>
        </div>

        {/* Feature pills — floating over the 3D */}
        <div className={styles.pillRow} aria-hidden="true">
          {[
            { icon: '🎮', text: 'AI Game Studio' },
            { icon: '📋', text: 'КСП за 30 сек' },
            { icon: '🎥', text: 'AI Аватар' },
            { icon: '🤖', text: 'Saqalia Bot' },
            { icon: '📱', text: 'QR-Квиз' },
          ].map((p, i) => (
            <div key={i} className={styles.pill} style={{ animationDelay: `${i * 0.15}s` }}>
              <span>{p.icon}</span>
              <span>{p.text}</span>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className={styles.stats}>
          {[
            { value: 40000, suffix: '+', label: t('stat_teachers'), color: 'purple' },
            { value: 20,    suffix: '+', label: t('stat_tools'),    color: 'cyan' },
            { value: 20,    suffix: '+', label: t('stat_hours'),    color: 'orange' },
            { value: 500000,suffix: '+', label: t('stat_lessons'),  color: 'green' },
          ].map((stat, i) => (
            <div key={i} className={`${styles.statItem} ${styles[`statColor_${stat.color}`]}`}>
              <div className={styles.statValue}>
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Fade */}
      <div className={styles.bottomFade} />
    </section>
  );
}
