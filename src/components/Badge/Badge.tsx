import "./Badge.css";
import clsx from "clsx";

type BadgeProps = {
  children: React.ReactNode;
  variant?:
    | "success"
    | "warning"
    | "danger"
    | "info"
    | "male"
    | "female"
    | "neutral";
};

export function Badge({ children, variant = "info" }: BadgeProps) {
  return (
    <span
      className={clsx(
        "badge",
        {
          "badge-success": variant === "success",
          "badge-warning": variant === "warning",
          "badge-danger": variant === "danger",
          "badge-info": variant === "info",
        },
        {
          "badge-male": variant === "male",
          "badge-female": variant === "female",
          "badge-neutral": variant === "neutral",
        }
      )}
    >
      {children}
    </span>
  );
}
