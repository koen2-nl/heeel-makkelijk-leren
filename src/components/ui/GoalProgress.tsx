type GoalProgressProps = {
  label: string;
  value: string;
  progress: number;
};

export function GoalProgress({ label, value, progress }: GoalProgressProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-medium text-slate-600">{label}</p>
        <span className="text-sm font-bold text-primary">{value}</span>
      </div>
      <div className="mt-4 h-2.5 rounded-full bg-slate-100">
        <div className="h-full rounded-full bg-primary" style={{ width: `${progress}%` }} />
      </div>
      <p className="mt-2 text-xs text-slate-500">{progress}% voltooid</p>
    </div>
  );
}
