'use client';
import styles from './TestimonialsSection.module.css';

const testimonials = [
  {
    name: 'Айгерим Бекова',
    role: 'Учитель Математики, НИШ Алматы',
    avatar: '👩‍🏫',
    rating: 5,
    text: 'Saqalia изменила мою жизнь. Раньше я тратила 3 часа на подготовку к одному уроку, теперь — 15 минут. Игры для учеников создаются мгновенно, и дети обожают их!',
    color: 'purple',
  },
  {
    name: 'Нурлан Сейтқали',
    role: 'Учитель Биологии, Гимназия №5 Астана',
    avatar: '👨‍🏫',
    rating: 5,
    text: 'КСП генератор — это настоящее чудо. Полный план урока по любой теме за 30 секунд. ИИ даже предлагает варианты дифференциации для разных уровней учеников.',
    color: 'cyan',
  },
  {
    name: 'Гүлнара Жақсыбекова',
    role: 'Воспитатель, Детский сад №12 Шымкент',
    avatar: '👩‍💼',
    rating: 5,
    text: 'Раздел KIDS — это именно то, что нам нужно. Интерактивные игры с алфавитом, цифрами и сказками. Малыши в восторге, а я экономлю массу времени.',
    color: 'orange',
  },
  {
    name: 'Даниял Ахметов',
    role: 'Учитель Истории, Школа №45 Алматы',
    avatar: '👨‍💻',
    rating: 5,
    text: 'Функция ЖАНДЫ потрясающая — Абай Кунанбаев буквально говорит с моими учениками! Они запомнили тему лучше, чем за весь прошлый год. Рекомендую всем!',
    color: 'green',
  },
  {
    name: 'Сара Нурмаганбетова',
    role: 'Учитель Английского, Мектеп г.Актобе',
    avatar: '👩‍🎓',
    rating: 5,
    text: 'Вайбкодинг курс открыл для меня новый мир. Я создала сайт для своего класса без единой строки кода. Ученики невероятно удивились и стали больше уважать учителя!',
    color: 'blue',
  },
  {
    name: 'Баглан Касымов',
    role: 'Завуч, Лицей №7 Павлодар',
    avatar: '👨‍💼',
    rating: 5,
    text: 'Мы внедрили Saqalia для всего педагогического коллектива. Результат — учителя стали готовиться быстрее, уроки стали интерактивнее, успеваемость выросла на 23%.',
    color: 'pink',
  },
];

export default function TestimonialsSection() {
  return (
    <section className={styles.section} id="reviews">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-primary">💬 Отзывы</span>
          <h2 className="section-title" style={{ marginTop: 'var(--space-4)' }}>
            Учителя любят <span className="gradient-text-primary">Saqalia</span>
          </h2>
          <p className="section-subtitle">40,000+ учителей уже используют платформу каждый день</p>
        </div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`${styles.card} ${styles[`color_${t.color}`]}`}>
              <div className={styles.stars}>
                {'⭐'.repeat(t.rating)}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
