import Navbar from '@/components/layout/Navbar/Navbar';
import Footer from '@/components/layout/Footer/Footer';
import styles from '../legal.module.css';

export const metadata = {
  title: 'Онлайн оплата — Saqalia',
  description: 'Информация об онлайн оплате на платформе Saqalia. Kaspi Pay, банковская карта, безопасность платежей.',
};

export default function PaymentPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.hero}>
          <div className="container">
            <span className="badge badge-primary">💳 Оплата</span>
            <h1 className={styles.title}>Онлайн оплата</h1>
            <p className={styles.subtitle}>Безопасные способы оплаты для казахстанских учителей</p>
          </div>
        </section>

        <section className={styles.content}>
          <div className={`container ${styles.contentInner}`}>
            <div className={styles.doc}>
              <div className={styles.section}>
                <h2>Доступные способы оплаты</h2>
                <ul>
                  <li><strong>Kaspi Pay</strong> — самый популярный способ. Мгновенная оплата без карты через приложение Kaspi.</li>
                  <li><strong>Банковская карта</strong> — Visa, Mastercard, UnionPay. Безопасная обработка через сертифицированный платёжный шлюз.</li>
                  <li><strong>Kaspi Gold</strong> — оплата с карты Kaspi Gold с кешбэком.</li>
                  <li><strong>Kaspi Рассрочка</strong> — оплата в рассрочку на 3, 6 или 12 месяцев (для тарифа Pro-Год).</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>Безопасность платежей</h2>
                <p>
                  Все платежи обрабатываются через сертифицированный платёжный шлюз, соответствующий стандарту PCI DSS.
                  Мы <strong>не храним</strong> данные банковских карт на своих серверах — вся платёжная информация
                  обрабатывается исключительно платёжным провайдером.
                </p>
                <p>
                  Соединение при оплате защищено протоколом SSL/TLS (128-bit шифрование).
                  В адресной строке браузера должен отображаться значок замка 🔒.
                </p>
              </div>

              <div className={styles.section}>
                <h2>Процесс оплаты</h2>
                <ul>
                  <li>Выберите тарифный план на странице <a href="/ru/pricing">Тарифы</a></li>
                  <li>Нажмите «Начать» и выберите способ оплаты</li>
                  <li>Введите данные карты или выберите Kaspi Pay</li>
                  <li>Подтвердите оплату — доступ открывается мгновенно</li>
                  <li>Квитанция об оплате отправляется на email</li>
                </ul>
              </div>

              <div className={styles.section}>
                <h2>Автоматическое продление</h2>
                <p>
                  Подписка автоматически продлевается в конце каждого периода (месяц или год).
                  За 3 дня до продления вы получите уведомление на email.
                </p>
                <p>
                  Вы можете отменить автопродление в любой момент в разделе <strong>Профиль → Подписка</strong>
                  в личном кабинете. Доступ к Pro-функциям сохраняется до конца оплаченного периода.
                </p>
              </div>

              <div className={styles.section}>
                <h2>Возврат средств</h2>
                <p>
                  Мы предоставляем возврат средств в течение <strong>7 calendar дней</strong> с даты оплаты,
                  если вы столкнулись с техническими неполадками, делающими невозможным использование Платформы.
                </p>
                <p>
                  Для запроса возврата напишите в поддержку: <a href="https://wa.me/77073138701">WhatsApp +7 707 313 8701</a> или
                  на <a href="mailto:support@saqalia.kz">support@saqalia.kz</a>.
                </p>
                <p>
                  Возврат обрабатывается в течение 5–10 рабочих дней в зависимости от банка.
                </p>
              </div>

              <div className={styles.section}>
                <h2>Оплата для школ и организаций</h2>
                <p>
                  Для школ, колледжей и образовательных организаций доступна оплата по безналичному расчёту
                  на основании договора и счёта-фактуры.
                </p>
                <p>
                  Свяжитесь с нами для оформления корпоративной подписки:<br />
                  WhatsApp: <a href="https://wa.me/77477757475">+7 747 775 7475</a><br />
                  Email: <a href="mailto:schools@saqalia.kz">schools@saqalia.kz</a>
                </p>
              </div>

              <div className={styles.section}>
                <h2>Вопросы и поддержка</h2>
                <p>
                  Если у вас возникли проблемы с оплатой, обращайтесь в нашу службу поддержки:
                </p>
                <ul>
                  <li>WhatsApp: <a href="https://wa.me/77073138701">+7 707 313 8701</a> (ответ в течение 30 минут)</li>
                  <li>Email: <a href="mailto:support@saqalia.kz">support@saqalia.kz</a></li>
                  <li>Работаем Пн–Пт: 9:00–18:00 (GMT+5, Алматы)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
