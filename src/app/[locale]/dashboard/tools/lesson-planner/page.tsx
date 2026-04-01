'use client';

import { useState } from 'react';
import styles from './page.module.css';

const gradeOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
const subjectOptions = ['Математика', 'Физика', 'Химия', 'Биология', 'История Казахстана', 'Литература', 'Русский язык', 'Казахский язык', 'Английский язык', 'Информатика', 'География'];
const langOptions = ['Русский', 'Казахский', 'Английский'];

interface Plan {
  topic: string;
  objectives: string[];
  materials: string[];
  stages: { name: string; duration: string; activity: string }[];
  assessment: string;
}

export default function LessonPlannerPage() {
  const [form, setForm] = useState({ subject: 'Математика', grade: '5', topic: '', lang: 'Русский' });
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<Plan | null>(null);

  const generate = async () => {
    if (!form.topic.trim()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1800));

    // Mock generated plan
    setPlan({
      topic: form.topic,
      objectives: [
        `Познакомить учащихся с понятием "${form.topic}"`,
        'Развить навыки логического мышления и решения задач',
        'Воспитать интерес к предмету через практические задания',
      ],
      materials: ['Учебник', 'Интерактивная доска', 'Рабочие листы', 'QR-карточки', 'Маркеры'],
      stages: [
        { name: 'Организационный момент', duration: '3 мин', activity: 'Приветствие, проверка готовности, постановка целей урока' },
        { name: 'Актуализация знаний', duration: '7 мин', activity: 'Блиц-опрос по предыдущей теме, разминка в парах' },
        { name: 'Изучение нового материала', duration: '15 мин', activity: `Объяснение темы "${form.topic}" с примерами на доске, работа с учебником` },
        { name: 'Закрепление', duration: '12 мин', activity: 'Решение задач в группах, взаимопроверка, QR-квиз' },
        { name: 'Рефлексия и оценивание', duration: '3 мин', activity: 'Метод "Светофор", домашнее задание, подведение итогов' },
      ],
      assessment: 'Формативное: наблюдение, устный опрос, взаимооценка. Суммативное: мини-тест на 5 минут.',
    });
    setLoading(false);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>📋 Планировщик уроков</h1>
        <p className={styles.subtitle}>КСП и технологическая карта урока за 30 секунд</p>
      </div>

      {/* Form */}
      <div className={styles.formCard}>
        <div className={styles.formRow}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="pl-subject">Предмет</label>
            <select id="pl-subject" className="input" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}>
              {subjectOptions.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="pl-grade">Класс</label>
            <select id="pl-grade" className="input" value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })}>
              {gradeOptions.map((g) => <option key={g}>{g} класс</option>)}
            </select>
          </div>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="pl-lang">Язык</label>
            <select id="pl-lang" className="input" value={form.lang} onChange={(e) => setForm({ ...form, lang: e.target.value })}>
              {langOptions.map((l) => <option key={l}>{l}</option>)}
            </select>
          </div>
        </div>
        <div className={styles.field} style={{ flex: 1 }}>
          <label className={styles.label} htmlFor="pl-topic">Тема урока</label>
          <input
            id="pl-topic"
            className="input"
            placeholder="Например: Умножение дробей, Клетка — единица жизни..."
            value={form.topic}
            onChange={(e) => setForm({ ...form, topic: e.target.value })}
            onKeyDown={(e) => e.key === 'Enter' && generate()}
          />
        </div>
        <button
          className={`btn btn-primary ${styles.generateBtn}`}
          onClick={generate}
          disabled={!form.topic.trim() || loading}
        >
          {loading ? (
            <>
              <span className={styles.spinner} />
              Генерирую КСП...
            </>
          ) : (
            <>⚡ Создать КСП за 30 сек</>
          )}
        </button>
      </div>

      {/* Result */}
      {plan && (
        <div className={styles.result}>
          <div className={styles.resultHeader}>
            <div>
              <h2 className={styles.resultTitle}>Технологическая карта урока</h2>
              <p className={styles.resultMeta}>{form.subject} • {form.grade} класс • {form.lang}</p>
            </div>
            <div className={styles.resultActions}>
              <button className="btn btn-secondary" style={{ fontSize: 'var(--text-sm)', padding: '0.5rem 1rem' }}>
                📋 Копировать
              </button>
              <button className="btn btn-primary" style={{ fontSize: 'var(--text-sm)', padding: '0.5rem 1rem' }}>
                📥 Скачать .docx
              </button>
            </div>
          </div>

          <div className={styles.planBody}>
            {/* Topic */}
            <div className={styles.planSection}>
              <h3 className={styles.sLabel}>📌 Тема урока</h3>
              <p className={styles.planTopic}>{plan.topic}</p>
            </div>

            {/* Objectives */}
            <div className={styles.planSection}>
              <h3 className={styles.sLabel}>🎯 Цели и задачи</h3>
              <ul className={styles.planList}>
                {plan.objectives.map((o, i) => <li key={i}>{o}</li>)}
              </ul>
            </div>

            {/* Materials */}
            <div className={styles.planSection}>
              <h3 className={styles.sLabel}>📦 Необходимые материалы</h3>
              <div className={styles.tags}>
                {plan.materials.map((m, i) => <span key={i} className={styles.matTag}>{m}</span>)}
              </div>
            </div>

            {/* Stages */}
            <div className={styles.planSection}>
              <h3 className={styles.sLabel}>🕐 Этапы урока (40 мин)</h3>
              <div className={styles.stages}>
                {plan.stages.map((s, i) => (
                  <div key={i} className={styles.stageRow}>
                    <div className={styles.stageIdx}>{i + 1}</div>
                    <div className={styles.stageInfo}>
                      <div className={styles.stageName}>{s.name} <span className={styles.stageDur}>({s.duration})</span></div>
                      <div className={styles.stageAct}>{s.activity}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment */}
            <div className={styles.planSection}>
              <h3 className={styles.sLabel}>📊 Оценивание</h3>
              <p className={styles.planText}>{plan.assessment}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
