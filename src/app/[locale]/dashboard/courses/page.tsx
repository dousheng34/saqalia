import styles from './page.module.css';

export const metadata = { title: 'Мои курсы — Dashboard Saqalia' };

const courses = [
  {
    id: 1, emoji: '🤖', title: 'ChatGPT для учителей',
    modules: 6, done: 4, color: '#7C3AED',
    nextLesson: 'Урок 5: Создание тестов с ChatGPT',
    level: 'Начинающий',
  },
  {
    id: 2, emoji: '💻', title: 'Вайбкодинг: сайты без кода',
    modules: 8, done: 2, color: '#06B6D4',
    nextLesson: 'Урок 3: Деплой на Vercel',
    level: 'Средний',
  },
  {
    id: 3, emoji: '✍️', title: 'Prompt Engineering',
    modules: 5, done: 0, color: '#F97316',
    nextLesson: 'Урок 1: Основы промптов',
    level: 'Начинающий',
  },
];

const allCourses = [
  { emoji: '🎬', title: 'AI Видео: аватары и Shorts', color: '#EC4899', level: 'Начинающий' },
  { emoji: '🌐', title: 'Личный бренд учителя', color: '#8B5CF6', level: 'Средний' },
  { emoji: '📝', title: 'ЕНТ 2025 подготовка с ИИ', color: '#10B981', level: 'Продвинутый' },
];

export default function DashboardCoursesPage() {
  return (
    <div className={styles.page}>
      {/* My Courses */}
      <section>
        <h2 className={styles.sectionTitle}>📚 Мои курсы</h2>
        <div className={styles.myCourses}>
          {courses.map((course) => {
            const pct = Math.round((course.done / course.modules) * 100);
            return (
              <div key={course.id} className={styles.courseCard} style={{ '--accent': course.color } as React.CSSProperties}>
                <div className={styles.courseTop}>
                  <div className={styles.courseEmoji}>{course.emoji}</div>
                  <div className={styles.courseInfo}>
                    <h3 className={styles.courseTitle}>{course.title}</h3>
                    <span className={styles.courseLevel}>{course.level}</span>
                  </div>
                  <div className={styles.coursePct} style={{ color: course.color }}>{pct}%</div>
                </div>

                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${pct}%`, background: course.color }}
                  />
                </div>

                <div className={styles.courseBottom}>
                  <span className={styles.nextLesson}>▶ {course.nextLesson}</span>
                  <span className={styles.modulesCount}>{course.done}/{course.modules} уроков</span>
                </div>

                <button className={styles.continueBtn} style={{ borderColor: `${course.color}40`, color: course.color }}>
                  Продолжить →
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* All Courses Catalog */}
      <section>
        <h2 className={styles.sectionTitle}>🔍 Все курсы платформы</h2>
        <div className={styles.allCourses}>
          {allCourses.map((course, i) => (
            <div key={i} className={styles.catalogCard}>
              <div className={styles.catalogEmoji} style={{ background: `${course.color}15`, color: course.color }}>
                {course.emoji}
              </div>
              <div className={styles.catalogInfo}>
                <h4 className={styles.catalogTitle}>{course.title}</h4>
                <span className={styles.catalogLevel}>{course.level}</span>
              </div>
              <button className="btn btn-secondary" style={{ fontSize: 'var(--text-sm)', padding: '0.5rem 1rem' }}>
                Начать
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
