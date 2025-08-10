import "./Card.css";
import clsx from "clsx";

type CardProps = {
  title: string;
  children: React.ReactNode;
  variant?: "default" | "borderless" | "shadow";
  imageSrc?: string;
  actionLabel?: string;
  onActionClick?: () => void;
};

export function Card({
  title,
  children,
  variant = "default",
  imageSrc,
  actionLabel,
  onActionClick,
}: CardProps) {
  return (
    <>
      <div
        className={clsx("card", {
          "card-borderless": variant === "borderless",
          "card-shadow": variant === "shadow",
        })}
      >
        {imageSrc && <img src={imageSrc} alt="" className="card-image"></img>}
        <h2 className="card-title">{title}</h2>
        <div className="card-content">{children}</div>
        {actionLabel && onActionClick && (
          <button className="card-action-button" onClick={onActionClick}>
            {actionLabel}
          </button>
        )}
      </div>
    </>
  );
}
