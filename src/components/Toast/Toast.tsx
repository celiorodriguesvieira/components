import clsx from "clsx";
import "./Toast.css";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  onClose: () => void;
};

export function Toast({ message, type = "info", onClose }: ToastProps) {
  return (
    <div className={clsx("toast", `toast-${type}`)}>
      <span>{message}</span>
      <button className="toast-close" onClick={onClose}>
        x
      </button>
    </div>
  );
}
