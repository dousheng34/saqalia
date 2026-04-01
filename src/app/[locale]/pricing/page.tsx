import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import PricingSection from '@/components/sections/PricingSection/PricingSection';
import styles from './page.module.css';

export const metadata = {
  title: 'Тарифы — Saqalia | Начни бесплатно',
  description: 'Выберите подходящий тариф Saqalia. Бесплатный план, Pro 25,000₸/мес или план для школ. Оплата через Kaspi.',
};

const faqs = [
  { q: 'Что входит в бесплатный план?', a: '5 КСП, 3 презентации, 5 QR-квизов в месяц и 20 запросов к Saqalia Bot. Достаточно, чтобы оценить платформу.' },
  { q: 'Можно ли отменить подписку в любой момент?', a: 'Да. Вы можете отменить подписку в личном кабинете в любой момент. Доступ сохраняется до конца оплаченного периода.' },
  { q: 'Как оплатить через Kaspi?', a: 'При оформлении подписки выберите Kaspi Pay. Оплата проходит мгновенно без необходимости карты.' },
  { q: 'Есть ли скидка для школ?', a: 'Да, для школьных коллективов (от 5 учителей) мы предоставляем индивидуальные условия. Напишите нам в WhatsApp.' },
  { q: 'Можно ли сменить план?', a: 'Да, вы можете повысить или понизить план в любое время из личного кабинета.' },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingSection />
        <section className={styles.faqSection}>
          <div className="container">
            <h2 className={styles.faqTitle}>
              Часто задаваемые <span className="gradient-text-primary">вопросы</span>
            </h2>
            <div className={styles.faqList}>
              {faqs.map((faq, i) => (
                <details key={i} className={styles.faqItem}>
                  <summary className={styles.faqQuestion}>
                    {faq.q}
                    <span className={styles.faqChevron}>›</span>
                  </summary>
                  <p className={styles.faqAnswer}>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
