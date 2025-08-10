import clsx from "clsx";
import "./Switch.css";

type SwitchProps = {
  checked: boolean;
  onChange: () => void;
  label?: string;
  className?: string;
  size?: "small" | "medium" | "large";
};

export function Switch({
  checked,
  onChange,
  label,
  className,
  size = "medium",
}: SwitchProps) {
  const switchClass = clsx(
    "switch-track",
    `switch--${size}`,
    { "switch--on": checked },
    className
  );

  const thumbClass = clsx("switch-thumb", `thumb--${size}`, {
    "switch-thumb--on": checked,
  });

  return (
    <label className="switch-wrapper">
      <div className={switchClass} onClick={onChange}>
        <div className={thumbClass} />
      </div>
      {label && <span className="switch-label">{label}</span>}
    </label>
  );
}
