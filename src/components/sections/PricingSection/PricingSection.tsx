'use client';
import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import styles from './PricingSection.module.css';

const plans = [
  {
    key: 'free',
    name: 'Бесплатный',
    price: { monthly: 0, yearly: 0 },
    badge: null,
    color: 'default',
    features: [
      '✅ 5 КСП в месяц',
      '✅ 3 AI Презентации',
      '✅ QR-Квиз (5 игр/мес)',
      '✅ Saqalia Bot (20 запросов)',
      '✅ 1 курс (бесплатный)',
      '❌ AI Видео & Аватар',
      '❌ Оффлайн игры',
      '❌ KIDS Studio',
      '❌ Приоритетная поддержка',
    ],
    cta: 'Начать бесплатно',
    href: '/auth/register',
  },
  {
    key: 'pro',
    name: 'Saqalia Pro',
    price: { monthly: 25000, yearly: 149000 },
    badge: '🔥 Популярный',
    color: 'primary',
    features: [
      '✅ 50 КСП в месяц',
      '✅ 20 AI Презентаций',
      '✅ Безлимитные игры',
      '✅ Безлимитный Saqalia Bot',
      '✅ Все курсы включены',
      '✅ AI Видео & Аватар',
      '✅ 74+ Оффлайн игр',
      '✅ KIDS Studio',
      '✅ Куратор-поддержка',
    ],
    cta: 'Подключить Pro',
    href: '/auth/register?plan=pro',
  },
  {
    key: 'school',
    name: 'Для школ',
    price: { monthly: null, yearly: null },
    badge: '🏫 Командный',
    color: 'school',
    features: [
      '✅ Все из Pro для команды',
      '✅ До 100 учителей',
      '✅ Аналитика школы',
      '✅ Брендинг школы',
      '✅ Корпоративный куратор',
      '✅ Обучение педколлектива',
      '✅ Приоритетная поддержка 24/7',
      '✅ API доступ',
      '✅ Персональные функции',
    ],
    cta: 'Связаться с нами',
    href: '/contact',
  },
];

export default function PricingSection() {
  const t = useTranslations('pricing');
  const locale = useLocale();
  const [yearly, setYearly] = useState(false);

  return (
    <section className={styles.section} id="pricing">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary">💎 {t('title')}</span>
          <h2 className="section-title" style={{ marginTop: 'var(--space-4)' }}>
            Простые и <span className="gradient-text-primary">прозрачные</span> цены
          </h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        {/* Toggle Monthly/Yearly */}
        <div className={styles.toggle}>
          <span className={!yearly ? styles.toggleActive : ''}>Месяц</span>
          <button
            className={`${styles.toggleBtn} ${yearly ? styles.toggleBtnOn : ''}`}
            onClick={() => setYearly(!yearly)}
            aria-label="Toggle billing period"
          >
            <span className={styles.toggleThumb} />
          </button>
          <span className={yearly ? styles.toggleActive : ''}>
            Год
            <span className={styles.saveBadge}>-50%</span>
          </span>
        </div>

        {/* Pricing Cards */}
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div key={plan.key} className={`${styles.card} ${styles[`card_${plan.color}`]}`}>
              {plan.badge && (
                <div className={styles.badge}>{plan.badge}</div>
              )}

              <div className={styles.planHeader}>
                <h3 className={styles.planName}>{plan.name}</h3>
              </div>

              <div className={styles.price}>
                {plan.price.monthly === 0 ? (
                  <span className={styles.priceValue}>Бесплатно</span>
                ) : plan.price.monthly === null ? (
                  <span className={styles.priceCustom}>Индивидуально</span>
                ) : (
                  <>
                    <span className={styles.priceCurrency}>₸</span>
                    <span className={styles.priceValue}>
                      {yearly
                        ? plan.price.yearly!.toLocaleString()
                        : plan.price.monthly.toLocaleString()}
                    </span>
                    <span className={styles.pricePer}>{yearly ? '/ год' : '/ месяц'}</span>
                  </>
                )}
              </div>

              {yearly && plan.price.monthly && plan.price.monthly > 0 && (
                <div className={styles.savings}>
                  Экономия {(plan.price.monthly * 12 - plan.price.yearly!).toLocaleString()}₸
                </div>
              )}

              <ul className={styles.features}>
                {plan.features.map((feat, i) => (
                  <li key={i} className={`${styles.feat} ${feat.startsWith('❌') ? styles.featDisabled : ''}`}>
                    {feat}
                  </li>
                ))}
              </ul>

              <Link
                href={`/${locale}${plan.href}`}
                className={`btn btn-lg ${plan.color === 'primary' ? 'btn-primary' : 'btn-secondary'} ${styles.cta}`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className={styles.note}>
          💳 Оплата через <strong>Kaspi.kz</strong> | 🔒 Безопасные транзакции | ❌ Без скрытых комиссий
        </p>
      </div>
    </section>
  );
}
