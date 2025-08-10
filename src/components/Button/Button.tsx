import "./Button.css";
import clsx from "clsx";

type ButtonProps = {
  children?: React.ReactNode;
  text?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  style?: React.CSSProperties;
};

export function Button({
  children,
  onClick,
  variant = "primary",
  disabled,
}: ButtonProps) {
  return (
    <button className={clsx("button", variant, { disabled })} onClick={onClick}>
      {children}
    </button>
  );
}
