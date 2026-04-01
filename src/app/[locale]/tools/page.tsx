import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import ToolsPreview from '@/components/sections/ToolsPreview/ToolsPreview';
import styles from './page.module.css';

export const metadata = {
  title: 'AI Инструменты — Saqalia',
  description: 'Все AI инструменты Saqalia: создание игр, планов уроков, презентаций, видео, ботов и многое другое.',
};

export default function ToolsPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.hero}>
          <div className="container">
            <span className="badge badge-orange">🛠️ Инструменты</span>
            <h1 className={styles.heroTitle}>
              Все AI инструменты <span className="gradient-text-orange">в одном месте</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Попробуйте любой инструмент бесплатно — никакой регистрации не нужно для первого запуска.
            </p>
          </div>
        </div>
        <ToolsPreview />
      </main>
      <Footer />
    </>
  );
}
