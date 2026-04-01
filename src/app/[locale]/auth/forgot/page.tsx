'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import dynamic from 'next/dynamic';
import styles from '@/components/auth/AuthPage/AuthPage.module.css';

const SplineAuth = dynamic(() => import('@/components/three/SplineAuth'), { ssr: false });

export default function ForgotPasswordPage() {
  const locale = useLocale();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    // Firebase sendPasswordResetEmail will be integrated here
    await new Promise((r) => setTimeout(r, 1500));
    setSent(true);
    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <SplineAuth />
      <div className={styles.overlay} />

      {/* Logo */}
      <Link href={`/${locale}`} className={styles.logo}>
        <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
          <defs>
            <linearGradient id="forgotLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7C3AED" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
          </defs>
          <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="url(#forgotLogoGrad)"/>
          <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="white" opacity="0.9"/>
          <circle cx="16" cy="16" r="3" fill="url(#forgotLogoGrad)"/>
        </svg>
        <span className={styles.logoText}>SAQALIA</span>
      </Link>

      {/* Card */}
      <div className={styles.card}>
        {!sent ? (
          <>
            <div className={styles.cardHeader}>
              <h1 className={styles.title}>Восстановить пароль</h1>
              <p className={styles.subtitle}>
                Введите email и мы отправим ссылку для сброса пароля
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="forgot-email">Email</label>
                <input
                  id="forgot-email"
                  type="email"
                  className={`input ${styles.input}`}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="teacher@school.kz"
                  required
                />
              </div>

              {error && <div className={styles.error}>{error}</div>}

              <button
                type="submit"
                className={`btn btn-primary btn-lg ${styles.submitBtn}`}
                disabled={loading}
                id="forgot-submit-btn"
              >
                {loading ? <span className={styles.spinner} /> : 'Отправить ссылку'}
              </button>
            </form>
          </>
        ) : (
          <div className={styles.cardHeader} style={{ padding: 'var(--space-4) 0' }}>
            <div style={{ fontSize: '3rem', marginBottom: 'var(--space-4)' }}>📧</div>
            <h1 className={styles.title}>Письмо отправлено!</h1>
            <p className={styles.subtitle}>
              Мы отправили ссылку для сброса пароля на <strong style={{ color: 'var(--text-primary)' }}>{email}</strong>.
              Проверьте входящие (и папку «Спам»).
            </p>
            <Link
              href={`/${locale}/auth/login`}
              className={`btn btn-primary btn-lg`}
              style={{ marginTop: 'var(--space-6)', width: '100%', justifyContent: 'center' }}
            >
              Войти в аккаунт
            </Link>
          </div>
        )}

        <p className={styles.switchText}>
          Вспомнили пароль?{' '}
          <Link href={`/${locale}/auth/login`} className={styles.switchLink}>
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
