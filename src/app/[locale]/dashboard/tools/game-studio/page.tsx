'use client';

import { useState } from 'react';
import styles from './page.module.css';

const gameTypes = [
  { id: 'quiz', icon: '❓', label: 'QR-Квиз', desc: 'Интерактивный опрос со сканированием' },
  { id: 'crossword', icon: '✏️', label: 'Кроссворд', desc: '10–20 слов на любую тему' },
  { id: 'memory', icon: '🃏', label: 'Игра в памятку', desc: 'Карточки для запоминания' },
  { id: 'kahoot', icon: '🎯', label: 'Kahoot-квиз', desc: 'Соревнование в реальном времени' },
];

interface GameResult {
  type: string;
  questions: { q: string; options: string[]; answer: number }[];
}

export default function GameStudioPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selected, setSelected] = useState('quiz');
  const [form, setForm] = useState({ topic: '', count: '5', grade: '7', lang: 'Русский' });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GameResult | null>(null);

  const generate = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setResult({
      type: selected,
      questions: [
        { q: `Что изучает раздел "${form.topic}"?`, options: ['Природу', 'Числа', 'Историю', 'Клетки'], answer: 1 },
        { q: `Выберите правильный пример по теме "${form.topic}"`, options: ['Вариант A', 'Вариант B', 'Вариант C', 'Вариант D'], answer: 2 },
        { q: 'Какое утверждение верно?', options: ['Первое', 'Второе', 'Третье', 'Четвёртое'], answer: 0 },
        { q: 'Выберите правильный ответ:', options: ['Да', 'Нет', 'Иногда', 'Всегда'], answer: 1 },
        { q: 'Итоговый вопрос по теме:', options: ['Ответ 1', 'Ответ 2', 'Ответ 3', 'Ответ 4'], answer: 3 },
      ].slice(0, parseInt(form.count)),
    });
    setLoading(false);
    setStep(3);
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>🎮 AI Game Studio</h1>
        <p className={styles.subtitle}>Создай интерактивную игру для урока за 60 секунд</p>
      </div>

      {/* Steps */}
      <div className={styles.steps}>
        {[1, 2, 3].map((s) => (
          <div key={s} className={`${styles.step} ${step >= s ? styles.stepActive : ''}`}>
            <div className={styles.stepCircle}>{step > s ? '✓' : s}</div>
            <span className={styles.stepLabel}>
              {s === 1 && 'Тип игры'}
              {s === 2 && 'Настройки'}
              {s === 3 && 'Готово!'}
            </span>
          </div>
        ))}
      </div>

      {/* Step 1: Choose game type */}
      {step === 1 && (
        <div className={styles.typesGrid}>
          {gameTypes.map((g) => (
            <button
              key={g.id}
              className={`${styles.typeCard} ${selected === g.id ? styles.typeCardActive : ''}`}
              onClick={() => setSelected(g.id)}
            >
              <div className={styles.typeIcon}>{g.icon}</div>
              <div className={styles.typeLabel}>{g.label}</div>
              <div className={styles.typeDesc}>{g.desc}</div>
              {selected === g.id && <div className={styles.typeCheck}>✓</div>}
            </button>
          ))}
          <button className="btn btn-primary" style={{ gridColumn: '1 / -1' }} onClick={() => setStep(2)}>
            Продолжить →
          </button>
        </div>
      )}

      {/* Step 2: Settings */}
      {step === 2 && (
        <div className={styles.settingsCard}>
          <h2 className={styles.settingsTitle}>Настройте игру</h2>
          <div className={styles.settingsGrid}>
            <div className={styles.field}>
              <label className={styles.fLabel} htmlFor="gs-topic">Тема урока</label>
              <input
                id="gs-topic"
                className="input"
                placeholder="Например: Дроби, Клетка, Вторая мировая война..."
                value={form.topic}
                onChange={(e) => setForm({ ...form, topic: e.target.value })}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.fLabel} htmlFor="gs-count">Количество вопросов</label>
              <select id="gs-count" className="input" value={form.count} onChange={(e) => setForm({ ...form, count: e.target.value })}>
                {['3', '5', '7', '10'].map((n) => <option key={n}>{n}</option>)}
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.fLabel} htmlFor="gs-grade">Класс</label>
              <select id="gs-grade" className="input" value={form.grade} onChange={(e) => setForm({ ...form, grade: e.target.value })}>
                {['5', '6', '7', '8', '9', '10', '11'].map((g) => <option key={g}>{g}</option>)}
              </select>
            </div>
            <div className={styles.field}>
              <label className={styles.fLabel} htmlFor="gs-lang">Язык</label>
              <select id="gs-lang" className="input" value={form.lang} onChange={(e) => setForm({ ...form, lang: e.target.value })}>
                {['Русский', 'Казахский', 'Английский'].map((l) => <option key={l}>{l}</option>)}
              </select>
            </div>
          </div>
          <div className={styles.settingsBtns}>
            <button className="btn btn-secondary" onClick={() => setStep(1)}>← Назад</button>
            <button
              className="btn btn-primary"
              onClick={generate}
              disabled={!form.topic || loading}
            >
              {loading ? '⚡ Генерирую...' : '🎮 Создать игру'}
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Result */}
      {step === 3 && result && (
        <div className={styles.resultCard}>
          <div className={styles.resultHeader}>
            <div className={styles.resultBadge}>🎉 Игра готова!</div>
            <h2 className={styles.resultTitle}>{gameTypes.find(g => g.id === result.type)?.label} • {form.topic}</h2>
            <p className={styles.resultMeta}>{result.questions.length} вопросов • {form.grade} класс • {form.lang}</p>
          </div>

          <div className={styles.questions}>
            {result.questions.map((q, i) => (
              <div key={i} className={styles.qCard}>
                <div className={styles.qNum}>В{i + 1}</div>
                <div className={styles.qBody}>
                  <div className={styles.qText}>{q.q}</div>
                  <div className={styles.qOptions}>
                    {q.options.map((opt, j) => (
                      <div key={j} className={`${styles.qOpt} ${j === q.answer ? styles.qOptCorrect : ''}`}>
                        {String.fromCharCode(65 + j)}. {opt}
                        {j === q.answer && <span className={styles.correctBadge}>✓</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.resultActions}>
            <button className="btn btn-secondary" onClick={() => setStep(1)}>
              🔄 Создать другую
            </button>
            <button className="btn btn-primary">
              📤 Экспортировать
            </button>
            <button className="btn btn-orange">
              📱 QR-код для класса
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
