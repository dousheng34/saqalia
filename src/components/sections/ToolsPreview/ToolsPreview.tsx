'use client';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import styles from './ToolsPreview.module.css';

const tools = [
  { id: 'game-studio', emoji: '🎮', name: 'AI Game Studio', desc: '30+ типов игр', tag: 'Бесплатно', color: 'purple' },
  { id: 'lesson-planner', emoji: '📋', name: 'КСП Генератор', desc: 'За 30 секунд', tag: 'Pro', color: 'cyan' },
  { id: 'presentations', emoji: '🖥️', name: 'AI Презентации', desc: 'За 60 секунд', tag: 'Pro', color: 'orange' },
  { id: 'saqalia-bot', emoji: '🤖', name: 'Saqalia Bot', desc: 'Безлимитный ИИ', tag: 'Pro', color: 'green' },
  { id: 'qr-quiz', emoji: '📱', name: 'QR-Квиз', desc: 'С телефонов', tag: 'Бесплатно', color: 'blue' },
  { id: 'ai-video', emoji: '🎥', name: 'AI Видео', desc: 'Аватар учителя', tag: 'Pro', color: 'pink' },
  { id: 'poster-maker', emoji: '🎨', name: 'Постер Maker', desc: 'AI дизайн', tag: 'Pro', color: 'orange' },
  { id: 'kids-studio', emoji: '👶', name: 'KIDS Studio', desc: 'Для детсадов', tag: 'Pro', color: 'green' },
];

export default function ToolsPreview() {
  const locale = useLocale();

  return (
    <section className={styles.section} id="tools">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-orange">🛠️ Инструменты</span>
          <h2 className="section-title" style={{ marginTop: 'var(--space-4)' }}>
            Попробуй <span className="gradient-text-orange">прямо сейчас</span>
          </h2>
          <p className="section-subtitle">Открой любой инструмент и начни создавать за секунды</p>
        </div>

        <div className={styles.grid}>
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={`/${locale}/tools/${tool.id}`}
              className={`${styles.toolCard} ${styles[`color_${tool.color}`]}`}
            >
              <div className={styles.toolEmoji}>{tool.emoji}</div>
              <div className={styles.toolInfo}>
                <span className={styles.toolName}>{tool.name}</span>
                <span className={styles.toolDesc}>{tool.desc}</span>
              </div>
              <span className={`${styles.toolTag} ${tool.tag === 'Бесплатно' ? styles.tagFree : styles.tagPro}`}>
                {tool.tag}
              </span>
              <div className={styles.toolArrow}>→</div>
            </Link>
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href={`/${locale}/tools`} className="btn btn-secondary">
            Все инструменты →
          </Link>
        </div>
      </div>
    </section>
  );
}
