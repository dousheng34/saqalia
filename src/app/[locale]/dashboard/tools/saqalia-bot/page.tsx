'use client';

import { useState, useRef, useEffect } from 'react';
import styles from './page.module.css';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  text: string;
  time: string;
}

const suggestions = [
  '📋 Создай КСП по математике для 5 класса',
  '🎮 Придумай QR-квиз по биологии "Клетка"',
  '✍️ Напиши промпт для генерации теста ЕНТ',
  '📖 Объясни тему "Дроби" простыми словами',
  '🖥️ Создай структуру презентации по истории',
];

const initialMessages: Message[] = [
  {
    id: 1,
    role: 'assistant',
    text: '👋 Привет! Я **Saqalia Bot** — твой AI-помощник для учителей.\n\nЯ могу помочь:\n• 📋 Составить КСП, КТП или карту урока\n• 🎮 Придумать интерактивные игры и квизы\n• ✍️ Написать идеальные промпты для ChatGPT\n• 📖 Объяснить сложные темы простым языком\n• 🖥️ Создать структуру презентации\n\nЧем могу помочь?',
    time: 'Сейчас',
  },
];

export default function SaqaliaBot() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = {
      id: Date.now(),
      role: 'user',
      text,
      time: new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Simulate AI response (replace with real API call)
    await new Promise((r) => setTimeout(r, 1200));

    const botMsg: Message = {
      id: Date.now() + 1,
      role: 'assistant',
      text: `✅ Понял! Работаю над запросом: **"${text}"**\n\n🚀 Для полной функциональности подключите OpenAI API ключ в настройках.\n\nВ реальной версии здесь будет полноценный AI-ответ, адаптированный для учителей Казахстана.`,
      time: new Date().toLocaleTimeString('ru', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, botMsg]);
    setLoading(false);
  };

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.botAvatar}>🤖</div>
        <div>
          <h1 className={styles.botName}>Saqalia Bot</h1>
          <div className={styles.botStatus}>
            <span className={styles.statusDot} />
            AI-помощник для учителей • онлайн
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className={styles.chatWrapper}>
        <div className={styles.chat}>
          {messages.map((msg) => (
            <div key={msg.id} className={`${styles.msg} ${msg.role === 'user' ? styles.msgUser : styles.msgBot}`}>
              {msg.role === 'assistant' && <div className={styles.msgAvatar}>🤖</div>}
              <div className={styles.msgBubble}>
                <div className={styles.msgText}>
                  {msg.text.split('\n').map((line, i) => (
                    <div key={i} dangerouslySetInnerHTML={{
                      __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    }} />
                  ))}
                </div>
                <div className={styles.msgTime}>{msg.time}</div>
              </div>
              {msg.role === 'user' && <div className={styles.msgAvatarUser}>АБ</div>}
            </div>
          ))}

          {loading && (
            <div className={`${styles.msg} ${styles.msgBot}`}>
              <div className={styles.msgAvatar}>🤖</div>
              <div className={styles.msgBubble}>
                <div className={styles.typing}>
                  <span /><span /><span />
                </div>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Suggestions */}
        {messages.length === 1 && (
          <div className={styles.suggestions}>
            {suggestions.map((s, i) => (
              <button key={i} className={styles.suggestion} onClick={() => sendMessage(s)}>
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input */}
        <div className={styles.inputArea}>
          <input
            className={styles.chatInput}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage(input)}
            placeholder="Спроси что-нибудь... (Enter для отправки)"
            id="bot-input"
          />
          <button
            className={styles.sendBtn}
            onClick={() => sendMessage(input)}
            disabled={!input.trim() || loading}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
