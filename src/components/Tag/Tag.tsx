import type { ReactNode } from "react";
import "./Tag.css";
import clsx from "clsx";

type TagProps = {
  children: ReactNode;
  color?: "gray" | "blue" | "green" | "red";
  rounded?: boolean;
  outlined?: boolean;
  onClose?: () => void;
};

export function Tag({ children, color, rounded, outlined, onClose }: TagProps) {
  return (
    <span
      className={clsx(
        "tag",
        `tag-${color} ${rounded ? "tag-rounded" : ""} ${
          outlined ? "tag-outlined" : ""
        } ${onClose}`
      )}
    >
      {children}
      {onClose && (
        <button className="tag-close-button" onClick={onClose}>
          x
        </button>
      )}
    </span>
  );
}
