'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function DashboardProfilePage() {
  const [activeTab, setActiveTab] = useState<'info' | 'security' | 'notifications'>('info');

  return (
    <div className={styles.page}>
      {/* Profile Header */}
      <div className={styles.profileHeader}>
        <div className={styles.avatarLarge}>АБ</div>
        <div className={styles.profileInfo}>
          <h1 className={styles.profileName}>Айгерим Бекова</h1>
          <p className={styles.profileRole}>Учитель математики • Школа №45, Алматы</p>
          <div className={styles.profileStats}>
            <div className={styles.pStat}><span className={styles.pStatVal}>12</span><span className={styles.pStatLabel}>Уроков</span></div>
            <div className={styles.pStat}><span className={styles.pStatVal}>8</span><span className={styles.pStatLabel}>Игр</span></div>
            <div className={styles.pStat}><span className={styles.pStatVal}>47ч</span><span className={styles.pStatLabel}>Сэкономлено</span></div>
            <div className={styles.pStat}><span className={styles.pStatVal}>Free</span><span className={styles.pStatLabel}>Тариф</span></div>
          </div>
        </div>
        <button className="btn btn-primary">✨ Улучшить до Pro</button>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {(['info', 'security', 'notifications'] as const).map((tab) => (
          <button
            key={tab}
            className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'info' && '👤 Профиль'}
            {tab === 'security' && '🔐 Безопасность'}
            {tab === 'notifications' && '🔔 Уведомления'}
          </button>
        ))}
      </div>

      {/* Content */}
      {activeTab === 'info' && (
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Личная информация</h2>
          <div className={styles.formGrid}>
            {[
              { label: 'Имя', val: 'Айгерим', id: 'p-name' },
              { label: 'Фамилия', val: 'Бекова', id: 'p-surname' },
              { label: 'Email', val: 'aigerim@school45.kz', id: 'p-email' },
              { label: 'Телефон', val: '+7 707 313 8701', id: 'p-phone' },
              { label: 'Школа', val: 'Школа №45', id: 'p-school' },
              { label: 'Предмет', val: 'Математика', id: 'p-subject' },
              { label: 'Город', val: 'Алматы', id: 'p-city' },
              { label: 'Стаж', val: '12 лет', id: 'p-exp' },
            ].map((f) => (
              <div key={f.id} className={styles.formField}>
                <label className={styles.fieldLabel} htmlFor={f.id}>{f.label}</label>
                <input id={f.id} className="input" defaultValue={f.val} />
              </div>
            ))}
          </div>
          <button className="btn btn-primary" style={{ marginTop: 'var(--space-6)' }}>
            Сохранить изменения
          </button>
        </div>
      )}

      {activeTab === 'security' && (
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Безопасность аккаунта</h2>
          <div className={styles.securityItems}>
            {[
              { icon: '🔑', label: 'Пароль', desc: 'Последнее изменение: 30 дней назад', action: 'Изменить' },
              { icon: '📱', label: 'Двухфакторная аутентификация', desc: 'Не включена', action: 'Включить' },
              { icon: '🌐', label: 'Активные сессии', desc: '1 активная сессия (Windows, Алматы)', action: 'Управлять' },
            ].map((item, i) => (
              <div key={i} className={styles.securityItem}>
                <span className={styles.secItemIcon}>{item.icon}</span>
                <div className={styles.secItemInfo}>
                  <div className={styles.secItemLabel}>{item.label}</div>
                  <div className={styles.secItemDesc}>{item.desc}</div>
                </div>
                <button className="btn btn-secondary" style={{ fontSize: 'var(--text-sm)', padding: '0.5rem 1rem' }}>
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'notifications' && (
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Настройки уведомлений</h2>
          <div className={styles.notifList}>
            {[
              { label: 'Новые курсы', desc: 'Уведомить когда выйдет новый курс' },
              { label: 'Советы по ИИ', desc: 'Еженедельные советы и лайфхаки' },
              { label: 'Email рассылка', desc: 'Новости платформы и обновления' },
              { label: 'WhatsApp уведомления', desc: 'Важные напоминания в WhatsApp' },
            ].map((item, i) => (
              <div key={i} className={styles.notifItem}>
                <div>
                  <div className={styles.notifLabel}>{item.label}</div>
                  <div className={styles.notifDesc}>{item.desc}</div>
                </div>
                <label className={styles.toggle}>
                  <input type="checkbox" defaultChecked={i < 2} />
                  <span className={styles.toggleSlider} />
                </label>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
