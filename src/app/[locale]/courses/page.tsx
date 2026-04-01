import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import CoursesPreview from '@/components/sections/CoursesPreview/CoursesPreview';
import styles from './page.module.css';

export const metadata = {
  title: 'Курсы — Saqalia | ИИ, Вайбкодинг, ЕНТ',
  description: 'Курсы по ИИ для учителей, вайбкодинг, prompt engineering, AI видео и подготовка к ЕНТ. Онлайн обучение в своём темпе.',
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.heroBar}>
          <div className="container">
            <span className="badge badge-cyan">📚 Курсы</span>
            <h1 className={styles.heroTitle}>
              Обучайся <span className="gradient-text">ИИ инструментам</span> и вайбкодингу
            </h1>
            <p className={styles.heroSubtitle}>
              Практические курсы от практикующих учителей и разработчиков.
              Видеоуроки, задания и сертификаты по окончании.
            </p>
            <div className={styles.filterRow}>
              {['Все', 'ИИ для учителей', 'Вайбкодинг', 'Видео', 'Маркетинг', 'ЕНТ'].map((f) => (
                <button key={f} className={`btn btn-secondary ${styles.filterBtn}`}>{f}</button>
              ))}
            </div>
          </div>
        </div>
        <CoursesPreview />
      </main>
      <Footer />
    </>
  );
}
