import Link from 'next/link';

const quizQuestions = [
  { id: 1, prompt: 'Welke hoofdstad hoort bij Nederland?', options: ['Rotterdam', 'Amsterdam', 'Brussel', 'Utrecht'] },
  { id: 2, prompt: '2 + 2 = ?', options: ['3', '4', '5', '6'] },
  { id: 3, prompt: 'Een hond is een...', options: ['voedsel', 'dier', 'huis', 'boom'] },
];

export default function QuizPage() {
  return (
    <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Quiz</p>
          <h1 className="mt-2 text-3xl font-black text-slate-900">Vraag 1 van 3</h1>
        </div>
        <div className="rounded-full bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700">00:42</div>
      </div>

      <div className="rounded-2xl bg-slate-50 p-5">
        <p className="text-xl font-bold text-slate-900">{quizQuestions[0].prompt}</p>
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {quizQuestions[0].options.map((option) => (
          <button key={option} className="rounded-2xl border border-slate-200 bg-white p-4 text-left text-slate-700 transition hover:border-primary hover:text-primary">
            {option}
          </button>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <button className="btn btn-outline">Vorige</button>
        <Link href="/results" className="btn btn-primary">Volgende</Link>
      </div>
    </div>
  );
}
