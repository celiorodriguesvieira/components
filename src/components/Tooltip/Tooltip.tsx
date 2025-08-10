import { useState } from "react";
import "./Tooltip.css";
import clsx from "clsx";

type TooltipProps = {
  content: string;
  children: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
};

export function Tooltip({ content, children, position }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="tooltip-wrapper"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onBlur={() => setIsVisible(false)}
      tabIndex={0}
    >
      {children}
      {isVisible && (
        <div className={clsx(`tooltip-box tooltip-${position}`)}>{content}</div>
      )}
    </div>
  );
}
