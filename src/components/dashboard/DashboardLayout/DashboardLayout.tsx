'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import styles from './DashboardLayout.module.css';

const navItems = [
  { icon: '📊', label: 'Обзор', path: '/dashboard' },
  { icon: '🛠️', label: 'Инструменты', path: '/dashboard/tools' },
  { icon: '🤖', label: 'Saqalia Bot', path: '/dashboard/tools/saqalia-bot' },
  { icon: '📚', label: 'Мои курсы', path: '/dashboard/courses' },
  { icon: '👤', label: 'Профиль', path: '/dashboard/profile' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div className={styles.layout}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        {/* Logo */}
        <Link href={`/${locale}`} className={styles.sidebarLogo}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <defs>
              <linearGradient id="dashLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7C3AED"/>
                <stop offset="100%" stopColor="#06B6D4"/>
              </linearGradient>
            </defs>
            <path d="M16 2L28 9V23L16 30L4 23V9L16 2Z" fill="url(#dashLogoGrad)"/>
            <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="white" opacity="0.9"/>
            <circle cx="16" cy="16" r="3" fill="url(#dashLogoGrad)"/>
          </svg>
          <span className={styles.sidebarLogoText}>SAQALIA</span>
        </Link>

        {/* Navigation */}
        <nav className={styles.sidebarNav}>
          {navItems.map((item) => {
            const fullPath = `/${locale}${item.path}`;
            const isActive = pathname === fullPath || (item.path !== '/dashboard' && pathname.startsWith(fullPath));
            return (
              <Link
                key={item.path}
                href={fullPath}
                className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
              >
                <span className={styles.navIcon}>{item.icon}</span>
                <span className={styles.navLabel}>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom: Plan Badge */}
        <div className={styles.sidebarBottom}>
          <div className={styles.planBadge}>
            <span className={styles.planIcon}>✨</span>
            <div>
              <div className={styles.planName}>Saqalia Free</div>
              <Link href={`/${locale}/pricing`} className={styles.upgradePlan}>
                Улучшить до Pro →
              </Link>
            </div>
          </div>
          <Link href={`/${locale}`} className={styles.backToSite}>
            ← На главную
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className={styles.main}>
        {/* Top bar */}
        <header className={styles.topBar}>
          <div className={styles.topBarLeft}>
            <div className={styles.greeting}>
              <span className={styles.greetingText}>Добро пожаловать 👋</span>
            </div>
          </div>
          <div className={styles.topBarRight}>
            <Link href={`/${locale}/tools/saqalia-bot`} className={`btn btn-primary ${styles.quickCreate}`}>
              + Создать
            </Link>
            <div className={styles.avatar}>АБ</div>
          </div>
        </header>

        {/* Page content */}
        <main className={styles.content}>{children}</main>
      </div>
    </div>
  );
}
