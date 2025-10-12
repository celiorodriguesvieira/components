import "./Badge.css";
import clsx from "clsx";

type BadgeProps = {
  label: string;
  variant?: "success" | "warning" | "danger" | "info";
};

export function Badge({ label, variant }: BadgeProps) {
  const isMale = label.toLocaleLowerCase() === "male";
  const isFemale = label.toLocaleLowerCase() === "female";

  return (
    <span
      className={clsx("badge", {
        "badge-success": variant === "success",
        "badge-warning": variant === "warning",
        "badge-danger": variant === "danger",
        "badge-info": variant === "info",
      })}
      style={{
        backgroundColor: isMale ? "#3B82F6" : isFemale ? "#EC4899" : undefined,
      }}
    >
      {label}
    </span>
  );
}
