import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'О нас — Saqalia',
  description: 'История создания Saqalia — казахстанской AI платформы для учителей. Наша команда, миссия и ценности.',
};

const team = [
  { name: 'Арман Сейтов', role: 'CEO & Основатель', avatar: '👨‍💼', desc: 'Бывший учитель математики, 10 лет опыта в образовании' },
  { name: 'Жансая Ахмет', role: 'CTO', avatar: '👩‍💻', desc: 'Разработчик ИИ систем, ex-Google Engineer' },
  { name: 'Нурлан Бек', role: 'Head of Product', avatar: '👨‍🎨', desc: 'UX/UI дизайнер, специалист по образовательным продуктам' },
  { name: 'Айгерим Дос', role: 'Head of Content', avatar: '👩‍🏫', desc: 'Методист, разрабатывает курсы и образовательные материалы' },
];

const stats = [
  { value: '40,000+', label: 'Учителей', icon: '👨‍🏫' },
  { value: '200+', label: 'Школ', icon: '🏫' },
  { value: '3+', label: 'Года работы', icon: '📅' },
  { value: '20+', label: 'AI инструментов', icon: '🤖' },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className="container">
            <span className="badge badge-primary">🇰🇿 О нас</span>
            <h1 className={styles.heroTitle}>
              Мы верим, что каждый учитель заслуживает <span className="gradient-text">лучших инструментов</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Saqalia — казахстанская AI платформа, созданная учителями для учителей.
              Наша миссия: сделать образование более качественным и менее утомительным.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className={styles.statsSection}>
          <div className="container">
            <div className={styles.statsGrid}>
              {stats.map((s, i) => (
                <div key={i} className={styles.statCard}>
                  <span className={styles.statIcon}>{s.icon}</span>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className={styles.missionSection}>
          <div className="container">
            <div className={styles.missionGrid}>
              <div>
                <span className="badge badge-cyan">🎯 Наша миссия</span>
                <h2 className={styles.missionTitle}>
                  Освобождаем учителей от рутины
                </h2>
                <p className={styles.missionText}>
                  Казахстанский учитель тратит в среднем 40+ часов в неделю — из них больше половины
                  уходит на administrative рутину: составление планов, поиск материалов, оформление документов.
                </p>
                <p className={styles.missionText}>
                  Мы создали Saqalia, чтобы изменить это. С нашими AI инструментами учителя
                  тратят на подготовку на 20+ часов меньше каждую неделю — и посвящают это время детям.
                </p>
              </div>
              <div className={styles.missionVisual}>
                <div className={styles.missionCard}>
                  <span className={styles.beforeAfterLabel}>Раньше</span>
                  <div className={styles.timeBar}>
                    <div className={styles.timeBarFill} style={{ width: '80%', background: 'var(--color-danger)' }} />
                    <span>40 часов/нед</span>
                  </div>
                </div>
                <div className={`${styles.missionCard} ${styles.missionCardGreen}`}>
                  <span className={styles.beforeAfterLabel}>С Saqalia</span>
                  <div className={styles.timeBar}>
                    <div className={styles.timeBarFill} style={{ width: '35%', background: 'var(--color-success)' }} />
                    <span>15 часов/нед</span>
                  </div>
                </div>
                <p className={styles.missionSave}>🎉 Экономия: 25 часов в неделю</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className={styles.teamSection}>
          <div className="container">
            <div className="section-header">
              <span className="badge badge-primary">👥 Команда</span>
              <h2 className="section-title" style={{ marginTop: 'var(--space-4)' }}>Люди за Saqalia</h2>
            </div>
            <div className={styles.teamGrid}>
              {team.map((member, i) => (
                <div key={i} className={styles.teamCard}>
                  <div className={styles.teamAvatar}>{member.avatar}</div>
                  <h3 className={styles.teamName}>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p className={styles.teamDesc}>{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
