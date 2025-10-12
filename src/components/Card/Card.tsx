import "./Card.css";
import clsx from "clsx";

export type CardProps = {
  title: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  actionLabel?: string;
  onActionClick?: () => void;
  variant?: "default" | "borderless" | "shadow";
  children?: React.ReactNode;
};

export function Card({
  title,
  children,
  variant = "default",
  imageSrc,
  actionLabel,
  onActionClick,
  subtitle,
  description,
}: CardProps) {
  return (
    <div
      className={clsx("card", {
        "card-borderless": variant === "borderless",
        "card-shadow": variant === "shadow",
      })}
    >
      {imageSrc && <img src={imageSrc} alt={title} className="card-image" />}

      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        {/* Novo: subtítulo */}
        {subtitle && <p className="card-subtitle">{subtitle}</p>}

        {/* Novo: descrição */}
        {description && <p className="card-description">{description}</p>}

        {/* Children continuam valendo */}
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
