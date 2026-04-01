import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import styles from './page.module.css';

export const metadata = {
  title: 'Контакты — Saqalia',
  description: 'Свяжитесь с командой Saqalia. WhatsApp, Telegram, email. Алматы, Казахстан.',
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className="container">
            <span className="badge badge-cyan">📞 Контакты</span>
            <h1 className={styles.heroTitle}>
              Мы всегда на <span className="gradient-text">связи</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Есть вопросы о платформе, тарифах или партнёрстве? Напишите нам — ответим в течение 2 часов.
            </p>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className="container">
            <div className={styles.contactGrid}>
              {/* Contact Cards */}
              <div className={styles.contactCards}>
                {[
                  {
                    icon: '💬',
                    title: 'WhatsApp',
                    desc: 'Самый быстрый способ. Ответим в течение 30 минут.',
                    action: '+7 707 313 8701',
                    href: 'https://wa.me/77073138701',
                    color: 'green',
                    btnLabel: 'Написать в WhatsApp',
                  },
                  {
                    icon: '✈️',
                    title: 'Telegram',
                    desc: 'Подпишитесь на наш канал с новостями и советами.',
                    action: '@saqalia_ai',
                    href: 'https://t.me/saqalia_ai',
                    color: 'cyan',
                    btnLabel: 'Открыть Telegram',
                  },
                  {
                    icon: '📧',
                    title: 'Email',
                    desc: 'Для официальных запросов и партнёрства.',
                    action: 'hello@saqalia.kz',
                    href: 'mailto:hello@saqalia.kz',
                    color: 'purple',
                    btnLabel: 'Написать письмо',
                  },
                  {
                    icon: '📍',
                    title: 'Офис',
                    desc: 'Алматы, ул. Шевченко 165б, Офис 24',
                    action: 'Пн-Пт: 9:00–18:00',
                    href: 'https://maps.google.com',
                    color: 'orange',
                    btnLabel: 'Открыть карту',
                  },
                ].map((card, i) => (
                  <div key={i} className={`${styles.contactCard} ${styles[`card_${card.color}`]}`}>
                    <div className={styles.cardIcon}>{card.icon}</div>
                    <h3 className={styles.cardTitle}>{card.title}</h3>
                    <p className={styles.cardDesc}>{card.desc}</p>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`btn btn-secondary ${styles.cardBtn}`}
                    >
                      {card.btnLabel}
                    </a>
                  </div>
                ))}
              </div>

              {/* Form */}
              <form className={styles.form} id="contact-form">
                <h2 className={styles.formTitle}>Отправить сообщение</h2>
                <div className={styles.formRow}>
                  <label className={styles.formLabel} htmlFor="contact-name">Имя</label>
                  <input id="contact-name" type="text" className="input" placeholder="Ваше имя" required />
                </div>
                <div className={styles.formRow}>
                  <label className={styles.formLabel} htmlFor="contact-email">Email</label>
                  <input id="contact-email" type="email" className="input" placeholder="teacher@school.kz" required />
                </div>
                <div className={styles.formRow}>
                  <label className={styles.formLabel} htmlFor="contact-subject">Тема</label>
                  <select id="contact-subject" className="input">
                    <option>Вопрос о платформе</option>
                    <option>Тарифы и оплата</option>
                    <option>Техническая помощь</option>
                    <option>Партнёрство</option>
                    <option>Другое</option>
                  </select>
                </div>
                <div className={styles.formRow}>
                  <label className={styles.formLabel} htmlFor="contact-message">Сообщение</label>
                  <textarea
                    id="contact-message"
                    className={`input ${styles.textarea}`}
                    placeholder="Расскажите нам чем можем помочь..."
                    rows={5}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                  Отправить сообщение
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
