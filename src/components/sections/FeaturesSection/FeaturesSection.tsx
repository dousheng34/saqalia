'use client';
import { useTranslations } from 'next-intl';
import styles from './FeaturesSection.module.css';
import { useState } from 'react';

const featureCategories = [
  {
    key: 'games',
    icon: '🎮',
    color: 'purple',
    items: [
      { icon: '🃏', title: 'AI Game Studio', desc: '30+ типов игр — карточки, колесо фортуны, перетягивание каната, пазлы' },
      { icon: '📱', title: 'QR-Квиз Байқау', desc: 'Ученики участвуют с телефона по QR-коду. Real-time результаты' },
      { icon: '💬', title: 'Словесные баталии', desc: 'Командные лингво-игры и дебаты по теме урока' },
      { icon: '🧠', title: 'AI Flashcards', desc: 'Умные карточки с алгоритмом интервального повторения (SRS)' },
      { icon: '🎯', title: '3D Memory Game', desc: '3D карточки памяти с анимацией переворота' },
      { icon: '🎪', title: 'Escape Room Maker', desc: 'Создавай образовательные квест-игры для класса' },
    ]
  },
  {
    key: 'planning',
    icon: '📋',
    color: 'cyan',
    items: [
      { icon: '📄', title: 'КСП/ҚМЖЖ Генератор', desc: 'Автоматические краткосрочные планы по стандартам МОН РК' },
      { icon: '📅', title: 'ДҰБ Планировщик', desc: 'Долгосрочное планирование с разбивкой по четвертям' },
      { icon: '✅', title: 'БЖБТ/ТЖБТ', desc: 'Генератор формативных и суммативных оценок' },
      { icon: '📊', title: 'Рубрика Builder', desc: 'Создание критериальных рубрик оценивания' },
      { icon: '🎯', title: 'Дифференциация', desc: 'ИИ делает задания разного уровня сложности' },
      { icon: '✉️', title: 'Родитель Хат', desc: 'Генерация сообщений родителям в официальном стиле' },
    ]
  },
  {
    key: 'presentations',
    icon: '🖥️',
    color: 'orange',
    items: [
      { icon: '⚡', title: 'AI Презентации', desc: 'Полноценные слайды с картинками за 60 секунд' },
      { icon: '🎨', title: 'AI Постер Maker', desc: 'Учебные постеры и инфографика с ИИ-дизайном' },
      { icon: '📐', title: 'Шаблонная Gallery', desc: '200+ готовых шаблонов для любого предмета' },
      { icon: '🖼️', title: 'AI Иллюстратор', desc: 'Генерация иллюстраций к любой теме урока' },
      { icon: '📑', title: 'Обложка Maker', desc: 'Обложки тетрадей, папок, стендов' },
      { icon: '🗺️', title: 'Mind Map Creator', desc: 'Интерактивные ментальные карты по теме' },
    ]
  },
  {
    key: 'video',
    icon: '🎥',
    color: 'green',
    items: [
      { icon: '🌟', title: 'ЖАНДЫ Анимация', desc: 'Исторические личности оживают и рассказывают о себе' },
      { icon: '👤', title: 'AI Аватар Учителя', desc: 'Создай видео-урок через персональный AI-аватар' },
      { icon: '📹', title: 'Видеопостеры', desc: 'Короткие обучающие видео по теме за минуту' },
      { icon: '🎙️', title: 'Транскрипция', desc: 'Перевод аудио урока в текст автоматически' },
      { icon: '🌐', title: 'AI Перевод Видео', desc: 'Переводи видео уроки на KZ/RU/EN с дубляжем' },
      { icon: '✂️', title: 'Видео Редактор', desc: 'Простой AI-редактор для нарезки и монтажа' },
    ]
  },
  {
    key: 'assistant',
    icon: '🤖',
    color: 'blue',
    items: [
      { icon: '💬', title: 'Saqalia Bot', desc: 'Безлимитный AI-ассистент для любых учительских задач' },
      { icon: '🔍', title: 'AI Проверка', desc: 'Анализ ответов учеников и подсказки по ошибкам' },
      { icon: '📚', title: 'Предмет-AI', desc: 'Специализированный бот по математике, биологии, истории' },
      { icon: '🌍', title: 'AI Переводчик', desc: 'Мгновенный перевод материалов KZ↔RU↔EN' },
      { icon: '🎤', title: 'Голосовой Ввод', desc: 'Диктуй задание голосом — AI оформляет план' },
      { icon: '📊', title: 'Аналитика Класса', desc: 'Статистика прогресса учеников в реальном времени' },
    ]
  },
  {
    key: 'kids',
    icon: '👶',
    color: 'pink',
    items: [
      { icon: '🔤', title: 'Әліпби Studio', desc: 'Интерактивный казахский/русский алфавит с анимациями' },
      { icon: '🔢', title: 'Сандар Ойыны', desc: 'Игры с числами и счётом для дошкольников' },
      { icon: '📖', title: 'Шытырман Сказки', desc: 'AI генерирует сказки с иллюстрациями по теме' },
      { icon: '🎨', title: 'Цифровой Раскраска', desc: 'Интерактивная раскраска с обучающим контентом' },
      { icon: '🎵', title: 'Музыкальные Игры', desc: 'Обучение через музыку и ритм' },
      { icon: '🧩', title: 'Сенсорные Игры', desc: 'Развитие мелкой моторики через касания' },
    ]
  },
];

export default function FeaturesSection() {
  const t = useTranslations('features');
  const [activeTab, setActiveTab] = useState(0);

  const active = featureCategories[activeTab];

  return (
    <section className={styles.section} id="features">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <span className="badge badge-primary">⚡ {t('title')}</span>
          </div>
          <h2 className="section-title">
            {t('title')} —{' '}
            <span className="gradient-text-primary">20+ AI</span>
          </h2>
          <p className="section-subtitle">{t('subtitle')}</p>
        </div>

        {/* Category Tabs */}
        <div className={styles.tabs} role="tablist">
          {featureCategories.map((cat, i) => (
            <button
              key={cat.key}
              role="tab"
              aria-selected={i === activeTab}
              className={`${styles.tab} ${i === activeTab ? styles.tabActive : ''} ${styles[`tabColor_${cat.color}`]}`}
              onClick={() => setActiveTab(i)}
            >
              <span className={styles.tabIcon}>{cat.icon}</span>
              <span className={styles.tabLabel}>{t(`categories.${cat.key}`)}</span>
            </button>
          ))}
        </div>

        {/* Feature Cards Grid */}
        <div className={styles.grid} key={activeTab}>
          {active.items.map((item, i) => (
            <div
              key={i}
              className={`card ${styles.featureCard} ${styles[`cardColor_${active.color}`]}`}
              style={{ animationDelay: `${i * 0.07}s` }}
            >
              <div className={styles.cardIcon}>{item.icon}</div>
              <h4 className={styles.cardTitle}>{item.title}</h4>
              <p className={styles.cardDesc}>{item.desc}</p>
              <div className={styles.cardArrow}>→</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
