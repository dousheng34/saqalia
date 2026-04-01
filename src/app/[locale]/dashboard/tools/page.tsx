import Link from 'next/link';
import styles from './page.module.css';

export const metadata = { title: 'AI Инструменты — Dashboard Saqalia' };

const toolCategories = [
  {
    color: '#7C3AED', emoji: '🎮', name: 'AI Game Studio',
    desc: 'Создай интерактивный QR-квиз, кроссворд или викторину за 60 секунд',
    tags: ['QR-Квиз', 'Кроссворд', 'Викторина'],
    href: '/tools/game-studio', hot: true,
  },
  {
    color: '#06B6D4', emoji: '📋', name: 'Планировщик уроков',
    desc: 'КСП, КТП, технологическая карта урока на казахском или русском',
    tags: ['КСП', 'КТП', 'Карта урока'],
    href: '/tools/lesson-planner', hot: false,
  },
  {
    color: '#F97316', emoji: '🖥️', name: 'AI Презентации',
    desc: 'Профессиональные слайды за 30 секунд с готовым дизайном',
    tags: ['PowerPoint', 'Google Slides'],
    href: '/tools/presentations', hot: false,
  },
  {
    color: '#10B981', emoji: '🤖', name: 'Saqalia Bot',
    desc: 'Умный ИИ-помощник для ответов на вопросы и генерации контента',
    tags: ['Чат', 'Генерация текста'],
    href: '/tools/saqalia-bot', hot: true,
  },
  {
    color: '#8B5CF6', emoji: '🎥', name: 'AI Видео Аватар',
    desc: 'Создай обучающее видео с AI-аватаром без камеры и студии',
    tags: ['Видео', 'Аватар', 'HeyGen'],
    href: '/tools/ai-avatar', hot: false,
  },
  {
    color: '#EC4899', emoji: '📱', name: 'QR Постеры',
    desc: 'Красивые образовательные постеры с QR-кодом за 2 клика',
    tags: ['Постер', 'QR-код'],
    href: '/tools/qr-poster', hot: false,
  },
  {
    color: '#F59E0B', emoji: '✍️', name: 'Промпт Генератор',
    desc: 'Создай идеальный промпт для любого ИИ инструмента',
    tags: ['ChatGPT', 'Claude', 'Gemini'],
    href: '/tools/prompt-gen', hot: false,
  },
  {
    color: '#06B6D4', emoji: '📊', name: 'Тест Конструктор',
    desc: 'Тесты в форматах ЕНТ и СОЧ с автоматической проверкой',
    tags: ['ЕНТ', 'СОЧ', 'Google Forms'],
    href: '/tools/test-builder', hot: false,
  },
];

export default function DashboardToolsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>🛠️ AI Инструменты</h1>
        <p className={styles.subtitle}>
          {toolCategories.length} инструментов для современного учителя
        </p>
      </div>

      <div className={styles.grid}>
        {toolCategories.map((tool, i) => (
          <Link key={i} href={tool.href} className={styles.toolCard}>
            {tool.hot && <span className={styles.hotBadge}>🔥 Хит</span>}
            <div className={styles.toolIcon} style={{ background: `${tool.color}20`, color: tool.color }}>
              {tool.emoji}
            </div>
            <h3 className={styles.toolName}>{tool.name}</h3>
            <p className={styles.toolDesc}>{tool.desc}</p>
            <div className={styles.toolTags}>
              {tool.tags.map((tag, j) => (
                <span key={j} className={styles.tag}>{tag}</span>
              ))}
            </div>
            <div className={styles.toolCta} style={{ color: tool.color }}>
              Открыть →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
