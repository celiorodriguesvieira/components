import "./Badge.css";
import clsx from "clsx";

type BadgeProps = {
  label: string;
  variant?: "success" | "warning" | "danger" | "info";
};

export function Badge({ label, variant = "info" }: BadgeProps) {
  return (
    <span className={clsx("badge", variant && `badge-${variant}`)}>
      {label}
    </span>
  );
}
