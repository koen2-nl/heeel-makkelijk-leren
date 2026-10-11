'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { getStopwatchText, sampleQuestions } from '@/lib/quiz';

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setElapsedSeconds((value) => value + 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const question = sampleQuestions[currentIndex];
  const answeredCount = useMemo(() => sampleQuestions.filter((item) => item.correct === selected).length, [selected]);

  const goNext = () => {
    if (currentIndex < sampleQuestions.length - 1) {
      setCurrentIndex((value) => value + 1);
      setSelected(null);
      return;
    }

    window.location.href = '/results';
  };

  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Quiz</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Vraag {currentIndex + 1} van {sampleQuestions.length}</h1>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">{getStopwatchText(elapsedSeconds)}</div>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-xl font-bold text-slate-900">{question.prompt}</p>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {question.options.map((option) => {
          const isSelected = selected === option;
          return (
            <button
              key={option}
              className={`rounded-2xl border p-4 text-left transition ${
                isSelected ? 'border-primary bg-primary/5 text-primary' : 'border-slate-200 bg-white text-slate-700 hover:border-primary hover:text-primary'
              }`}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button className="btn btn-outline" onClick={() => currentIndex > 0 && setCurrentIndex((value) => value - 1)}>Vorige</button>
        <button className="btn btn-primary" onClick={goNext}>
          {currentIndex === sampleQuestions.length - 1 ? 'Bekijk resultaten' : 'Volgende'}
        </button>
      </div>

      <p className="mt-4 text-sm text-slate-500">Correct beantwoord: {answeredCount}</p>
      <Link href="/dashboard" className="mt-4 inline-block text-sm font-semibold text-primary">Terug naar dashboard</Link>
    </div>
  );
}
