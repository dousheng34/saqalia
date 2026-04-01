import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import FeaturesSection from '@/components/sections/FeaturesSection/FeaturesSection';
import styles from './page.module.css';

export const metadata = {
  title: 'Функции — Saqalia | 20+ AI Инструментов',
  description: 'Полный список AI инструментов Saqalia: игры, планы уроков, презентации, видео, ассистенты и многое другое',
};

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.heroBar}>
          <div className="container">
            <span className="badge badge-primary">⚡ Все возможности</span>
            <h1 className={styles.heroTitle}>
              20+ AI инструментов для <span className="gradient-text">современного учителя</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Каждый инструмент разработан с учётом реальных потребностей казахстанских педагогов.
              Начните бесплатно — никаких ограничений в первые 14 дней.
            </p>
          </div>
        </div>
        <FeaturesSection />
      </main>
      <Footer />
    </>
  );
}
