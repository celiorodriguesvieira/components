import clsx from "clsx";
import "./Alert.css";

type AlertProps = {
  message: string;
  variant: "success" | "error" | "warning" | "info";
  className?: string;
};

export function Alert({ message, variant, className }: AlertProps) {
  const alertClass = clsx("", `alert--${variant}`, className);

  return <div className={alertClass}>{message}</div>;
}
