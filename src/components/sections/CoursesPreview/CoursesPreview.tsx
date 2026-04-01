'use client';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import styles from './CoursesPreview.module.css';

const courses = [
  {
    id: 'ai-for-teachers',
    emoji: '🤖',
    color: 'purple',
    category: 'ИИ для учителей',
    title: 'ChatGPT, Gemini & Claude для Образования',
    desc: 'Полный курс по работе с ИИ-ассистентами. Создавай уроки, тесты и материалы за минуты.',
    lessons: 24, hours: 8, level: 'Все уровни', popular: true, free: false,
  },
  {
    id: 'vibe-coding',
    emoji: '💻',
    color: 'cyan',
    category: 'Вайбкодинг',
    title: 'Создавай сайты без кода с помощью ИИ',
    desc: 'Узнай как строить школьные сайты, приложения и интерактивные проекты без единой строки кода.',
    lessons: 18, hours: 6, level: 'Начинающий', popular: true, free: false,
  },
  {
    id: 'prompt-engineering',
    emoji: '✏️',
    color: 'orange',
    category: 'Prompt Engineering',
    title: 'Пиши идеальные промпты для Образования',
    desc: 'Мастер-класс по общению с ИИ. Научись получать от ChatGPT именно то, что нужно.',
    lessons: 12, hours: 4, level: 'Средний', popular: false, free: true,
  },
  {
    id: 'ai-video-production',
    emoji: '🎬',
    color: 'green',
    category: 'AI Видео',
    title: 'Создавай обучающие видео с ИИ',
    desc: 'От скрипта до готового видео с ИИ-аватаром. Runway, HeyGen, Synthesia для учителей.',
    lessons: 15, hours: 5, level: 'Средний', popular: false, free: false,
  },
  {
    id: 'digital-teacher',
    emoji: '⭐',
    color: 'pink',
    category: 'Личный Бренд',
    title: 'Цифровой Учитель: строй свой бренд',
    desc: 'Как стать известным учителем онлайн. Instagram, YouTube, Telegram канал и монетизация.',
    lessons: 20, hours: 7, level: 'Все уровни', popular: false, free: false,
  },
  {
    id: 'ent-prep',
    emoji: '📝',
    color: 'blue',
    category: 'ЕНТ/ОЗП',
    title: 'AI-Подготовка к ЕНТ и ОЗП',
    desc: 'Используй ИИ для подготовки индивидуальных заданий, тестов и разбора ошибок учеников.',
    lessons: 16, hours: 5, level: 'Продвинутый', popular: false, free: false,
  },
];

const colorMap: Record<string, string> = {
  purple: '#7C3AED', cyan: '#06B6D4', orange: '#F97316',
  green: '#10B981', pink: '#EC4899', blue: '#3B82F6',
};

export default function CoursesPreview() {
  const t = useTranslations('courses');
  const locale = useLocale();

  return (
    <section className={styles.section} id="courses">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge badge-cyan">📚 {t('title')}</span>
          </div>
          <h2 className="section-title">
            {t('title')} с <span className="gradient-text">ИИ Инструктором</span>
          </h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        <div className={styles.grid}>
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/${locale}/courses/${course.id}`}
              className={`${styles.card} ${course.popular ? styles.popular : ''}`}
              style={{ '--accent': colorMap[course.color] } as React.CSSProperties}
            >
              {course.popular && (
                <div className={styles.popularBadge}>🔥 {t('popular')}</div>
              )}
              {course.free && (
                <div className={styles.freeBadge}>✨ {t('free')}</div>
              )}

              <div className={styles.cardHeader}>
                <span className={styles.emoji}>{course.emoji}</span>
                <span className={styles.category}>{course.category}</span>
              </div>

              <h3 className={styles.title}>{course.title}</h3>
              <p className={styles.desc}>{course.desc}</p>

              <div className={styles.meta}>
                <span>📹 {course.lessons} {t('lessons')}</span>
                <span>⏱ {course.hours} {t('hours')}</span>
                <span>📊 {course.level}</span>
              </div>

              <div className={styles.enrollBtn}>
                {t('enroll')} →
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href={`/${locale}/courses`} className="btn btn-secondary btn-lg">
            Все курсы
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
