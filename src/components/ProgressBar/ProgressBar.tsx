import "./ProgressBar.css";

type ProgressBarProps = {
  value: number;
  max?: number;
  label: string;
  color?: "blue" | "green" | "red" | "gray";
};

export function ProgressBar({
  value,
  max = 100,
  label,
  color = "blue",
}: ProgressBarProps) {
  const safe = Math.max(0, Math.min(value, max));
  const percent = (safe / max) * 100;

  return (
    <div className="progress-bar">
      {label && <div className="progressbar-label">{label}</div>}

      <div>
        <div
          className={`progress-fill progressbar-${color}`}
          style={{ width: `${percent}%` }}
        >
          <div className="progressbar-caption">{Math.round(percent)}%</div>
        </div>
      </div>
    </div>
  );
}
