import "./Avatar.css";
import clsx from "clsx";

type AvatarProps = {
  src?: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | "xg";
  bordered?: boolean;
  className?: string;
};

function getInitials(name?: string) {
  if (!name) return "?";

  const words = name.trim().split(" ");
  console.log(words);

  const first = words[0]?.[0] ?? "";
  const second = words[1]?.[0] ?? "";

  return (first + second).toUpperCase() || "?";
}

function getBackgroundColor(name?: string): string {
  if (!name) return "#d1d5db";
  const hash = name.charCodeAt(0) + name.length;
  const colors = ["#f59e0b", "#10b981", "#3b82f6", "#8b5cf6", "#ec4899"];
  return colors[hash % colors.length];
}

export function Avatar({
  src,
  alt,
  name,
  size = "md",
  bordered = false,
  className,
}: AvatarProps) {
  const initials = getInitials(name);

  const avatarClass = clsx(
    "avatar",
    `avatar--${size}`,
    bordered && "avatar--bordered",
    className
  );

  return (
    <div
      className={avatarClass}
      style={{ backgroundColor: !src ? getBackgroundColor(name) : undefined }}
    >
      {src ? (
        <img className="avatar-image" src={src} alt={alt ?? name} />
      ) : (
        <span className="avatar-initials">{initials}</span>
      )}
    </div>
  );
}
