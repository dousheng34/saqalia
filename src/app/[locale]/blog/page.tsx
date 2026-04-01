import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Блог — Saqalia | Статьи, советы, видео',
  description: 'Статьи и видео об ИИ для учителей, вайбкодинге, prompt engineering и современных методах обучения.',
};

const posts = [
  { slug: 'chatgpt-uchitelyam', category: 'ИИ для учителей', emoji: '🤖', title: 'ChatGPT для учителей: 10 промптов которые сэкономят 5 часов в неделю', date: '28 Марта 2026', readTime: '7 мин', views: '4.2k', type: 'article' },
  { slug: 'vibecoding-nachalo', category: 'Вайбкодинг', emoji: '💻', title: 'Вайбкодинг: как создать сайт для своего класса за 30 минут', date: '25 Марта 2026', readTime: '5 мин', views: '3.1k', type: 'video' },
  { slug: 'prompt-engineering-guide', category: 'Prompt Engineering', emoji: '✏️', title: 'Полный гайд по написанию промптов для образовательного контента', date: '20 Марта 2026', readTime: '12 мин', views: '6.8k', type: 'article' },
  { slug: 'ai-games-class', category: 'Игры', emoji: '🎮', title: 'Как создать QR-квиз для урока за 2 минуты с помощью ИИ', date: '18 Марта 2026', readTime: '4 мин', views: '2.9k', type: 'video' },
  { slug: 'ksp-generator', category: 'Планирование', emoji: '📋', title: 'КСП за 30 секунд: как использовать ИИ для автоматизации планирования', date: '15 Марта 2026', readTime: '6 мин', views: '5.4k', type: 'article' },
  { slug: 'ai-video-teacher', category: 'AI Видео', emoji: '🎥', title: 'Создай обучающее видео с AI-аватаром без камеры и студии', date: '10 Марта 2026', readTime: '8 мин', views: '3.7k', type: 'video' },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <div className={styles.hero}>
          <div className="container">
            <span className="badge badge-orange">✍️ Блог</span>
            <h1 className={styles.heroTitle}>
              Знания для <span className="gradient-text-orange">учителя будущего</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Статьи, видео и гайды по ИИ, вайбкодингу и современным методам обучения
            </p>
          </div>
        </div>

        <section className={styles.posts}>
          <div className="container">
            {/* Featured Post */}
            <div className={styles.featured}>
              <div className={styles.featuredBadge}>🔥 Рекомендуем</div>
              <div className={styles.featuredContent}>
                <span className={styles.featuredCategory}>ИИ для учителей</span>
                <h2 className={styles.featuredTitle}>
                  Как ИИ изменил преподавание: реальные истории казахстанских учителей
                </h2>
                <p className={styles.featuredDesc}>
                  Мы поговорили с 20 учителями из разных регионов Казахстана, которые уже используют ИИ в работе.
                  Вот что они рассказали о своём опыте и результатах...
                </p>
                <div className={styles.featuredMeta}>
                  <span>📅 30 Марта 2026</span>
                  <span>⏱ 15 мин чтения</span>
                  <span>👁 12.4k просмотров</span>
                </div>
              </div>
            </div>

            {/* Posts Grid */}
            <div className={styles.grid}>
              {posts.map((post) => (
                <article key={post.slug} className={styles.postCard}>
                  <div className={styles.postHeader}>
                    <span className={styles.postEmoji}>{post.emoji}</span>
                    <div className={styles.postMeta}>
                      <span className={styles.postCategory}>{post.category}</span>
                      <span className={`${styles.postType} ${post.type === 'video' ? styles.postTypeVideo : ''}`}>
                        {post.type === 'video' ? '▶ Видео' : '📄 Статья'}
                      </span>
                    </div>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <div className={styles.postFooter}>
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                    <span>👁 {post.views}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
