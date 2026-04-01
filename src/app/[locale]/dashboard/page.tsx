import Link from 'next/link';
import styles from './page.module.css';

export const metadata = { title: 'Dashboard — Saqalia' };

const quickActions = [
  { icon: '📋', label: 'Создать КСП', href: '/tools/lesson-planner', color: 'purple' },
  { icon: '🎮', label: 'Создать игру', href: '/tools/game-studio', color: 'cyan' },
  { icon: '🖥️', label: 'Презентация', href: '/tools/presentations', color: 'orange' },
  { icon: '🤖', label: 'Saqalia Bot', href: '/tools/saqalia-bot', color: 'green' },
];

const recentActivity = [
  { icon: '📋', action: 'Создан КСП', item: 'Математика 5 класс — Дроби', time: '2 мин назад' },
  { icon: '🎮', action: 'Создана игра', item: 'QR-квиз — Биология клетка', time: '1 час назад' },
  { icon: '🖥️', action: 'Создана презентация', item: 'История Казахстана — Золотая Орда', time: '3 часа назад' },
  { icon: '📚', action: 'Курс пройден', item: 'Модуль 2: ChatGPT для планирования', time: 'Вчера' },
];

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      {/* Stats Row */}
      <div className={styles.statsRow}>
        {[
          { val: '12', label: 'Уроков создано', icon: '📋', color: 'purple' },
          { val: '8', label: 'Игр создано', icon: '🎮', color: 'cyan' },
          { val: '47', label: 'Часов сэкономлено', icon: '⏱', color: 'orange' },
          { val: '2/6', label: 'Курсов пройдено', icon: '📚', color: 'green' },
        ].map((s, i) => (
          <div key={i} className={`${styles.statCard} ${styles[`statCard_${s.color}`]}`}>
            <span className={styles.statIcon}>{s.icon}</span>
            <span className={styles.statVal}>{s.val}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.mainGrid}>
        {/* Quick Actions */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>⚡ Быстрые действия</h2>
          <div className={styles.actionsGrid}>
            {quickActions.map((action, i) => (
              <Link key={i} href={action.href} className={`${styles.actionCard} ${styles[`action_${action.color}`]}`}>
                <span className={styles.actionIcon}>{action.icon}</span>
                <span className={styles.actionLabel}>{action.label}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🕐 Последняя активность</h2>
          <div className={styles.activityList}>
            {recentActivity.map((act, i) => (
              <div key={i} className={styles.activityItem}>
                <span className={styles.activityIcon}>{act.icon}</span>
                <div className={styles.activityInfo}>
                  <span className={styles.activityAction}>{act.action}</span>
                  <span className={styles.activityItem_name}>{act.item}</span>
                </div>
                <span className={styles.activityTime}>{act.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Course Progress */}
        <div className={`${styles.section} ${styles.sectionWide}`}>
          <h2 className={styles.sectionTitle}>📚 Мои курсы</h2>
          <div className={styles.coursesProgress}>
            {[
              { name: 'ChatGPT для учителей', progress: 60, color: '#7C3AED' },
              { name: 'Вайбкодинг: сайты без кода', progress: 20, color: '#06B6D4' },
            ].map((course, i) => (
              <div key={i} className={styles.courseProgressItem}>
                <div className={styles.courseProgressTop}>
                  <span className={styles.courseProgressName}>{course.name}</span>
                  <span className={styles.courseProgressPct}>{course.progress}%</span>
                </div>
                <div className={styles.progressBar}>
                  <div
                    className={styles.progressFill}
                    style={{ width: `${course.progress}%`, background: course.color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
