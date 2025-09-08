import "./ChangeComparison.css";

type ChangeComparisonProps = {
  value: number;
  type: "positive" | "negative" | "neutral";
  label?: string;
};

export function ChangeComparison({
  value,
  type,
  label,
}: ChangeComparisonProps) {
  return (
    <div className="change-comparison">
      <span className={`change-value ${type}`}>
        {value > 0 ? `+${value}%` : `${value}%`}
      </span>
      {label && <span className="change-label">{label}</span>}
    </div>
  );
}
