type StatCardProps = {
  label: string;
  value: string;
  delta?: string;
};

export function StatCard({ label, value, delta }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
      <p className="text-sm text-slate-500">{label}</p>
      <div className="mt-3 flex items-end justify-between">
        <p className="text-2xl font-bold text-slate-900">{value}</p>
        {delta ? <span className="text-xs font-semibold text-success">{delta}</span> : null}
      </div>
    </div>
  );
}
