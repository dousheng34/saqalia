'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const localeNames: Record<string, string> = {
  ru: 'RU',
  kz: 'KZ',
  en: 'EN',
};

const localeFlags: Record<string, string> = {
  ru: '🇷🇺',
  kz: '🇰🇿',
  en: '🇬🇧',
};

export default function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getLocalePath = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    return segments.join('/');
  };

  const navLinks = [
    { href: `/${locale}/features`, label: t('features') },
    { href: `/${locale}/courses`, label: t('courses') },
    { href: `/${locale}/tools`, label: t('tools') },
    { href: `/${locale}/pricing`, label: t('pricing') },
    { href: `/${locale}/blog`, label: t('blog') },
    { href: `/${locale}/about`, label: t('about') },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navInner}`}>
        {/* Logo */}
        <Link href={`/${locale}`} className={styles.logo}>
          <span className={styles.logoIcon}>
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#06B6D4" />
                </linearGradient>
              </defs>
              <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="url(#logoGrad)" opacity="0.9"/>
              <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="white" opacity="0.9"/>
              <circle cx="16" cy="16" r="3" fill="url(#logoGrad)"/>
            </svg>
          </span>
          <span className={styles.logoText}>
            SAQ<span className={styles.logoAccent}>ALIA</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className={styles.navLinks} role="navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname.startsWith(link.href) ? styles.active : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls */}
        <div className={styles.navRight}>
          {/* Language Selector */}
          <div className={styles.langSelector}>
            <button
              className={styles.langBtn}
              onClick={() => setLangOpen(!langOpen)}
              aria-label="Change language"
            >
              <span>{localeFlags[locale]}</span>
              <span>{localeNames[locale]}</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 8L2 4h8L6 8z"/>
              </svg>
            </button>
            {langOpen && (
              <div className={styles.langDropdown}>
                {Object.entries(localeNames).map(([loc, name]) => (
                  <Link
                    key={loc}
                    href={getLocalePath(loc)}
                    className={`${styles.langItem} ${locale === loc ? styles.langActive : ''}`}
                    onClick={() => setLangOpen(false)}
                  >
                    <span>{localeFlags[loc]}</span>
                    <span>{name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href={`/${locale}/auth/login`} className={`btn btn-secondary ${styles.loginBtn}`}>
            {t('login')}
          </Link>

          <Link href={`/${locale}/auth/register`} className={`btn btn-primary ${styles.ctaBtn}`}>
            <span className={styles.ctaBtnDot}/>
            {t('cta')}
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`${styles.menuToggle} ${menuOpen ? styles.menuOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span/><span/><span/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className={styles.mobileDivider} />
          <div className={styles.mobileLangRow}>
            {Object.entries(localeNames).map(([loc, name]) => (
              <Link
                key={loc}
                href={getLocalePath(loc)}
                className={`${styles.mobileLangBtn} ${locale === loc ? styles.mobileLangActive : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {localeFlags[loc]} {name}
              </Link>
            ))}
          </div>
          <Link href={`/${locale}/auth/register`} className="btn btn-primary" onClick={() => setMenuOpen(false)}>
            {t('cta')}
          </Link>
        </div>
      )}
    </header>
  );
}
