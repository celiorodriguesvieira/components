import clsx from "clsx";
import "./Card.css";

type CardProps = {
  title: string;
  children: React.ReactNode;
  imageSrc?: string;
  actionLabel?: string;
  onActionClick?: () => void;
  variant?: "default" | "borderless" | "shadow" | "dark";
};

export function Card({
  title,
  children,
  imageSrc,
  actionLabel,
  onActionClick,
  variant = "default",
}: CardProps) {
  return (
    <div
      className={clsx("card", {
        "card-borderless": variant === "borderless",
        "card-shadow": variant === "shadow",
        "card-dark": variant === "dark",
      })}
    >
      {imageSrc && (
        <div className="card-image-wrapper">
          <img src={imageSrc} alt={title} className="card-image" />
        </div>
      )}

      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-content">{children}</div>

        {actionLabel && onActionClick && (
          <button className="card-action-button" onClick={onActionClick}>
            {actionLabel}
          </button>
        )}
      </div>
    </div>
  );
}
