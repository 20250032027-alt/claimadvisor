interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export default function ProgressBar({ current, total, label }: ProgressBarProps) {
  const pct = Math.round((current / total) * 100);
  return (
    <div className="mb-7">
      <div className="flex justify-between text-xs font-semibold mb-2.5" style={{ color: "var(--gray-400)" }}>
        <span style={{ color: "var(--gray-600)" }}>{label || `Step ${current} of ${total}`}</span>
        <span>{pct}%</span>
      </div>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
