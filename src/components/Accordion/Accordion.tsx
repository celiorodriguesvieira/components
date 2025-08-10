import { useState } from "react";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
  style?: React.CSSProperties;
};

export function Accordion({
  title,
  children,
  isOpen = false,
  style,
}: AccordionProps) {
  const [isExpanded, setIsExpanded] = useState(isOpen);

  function toggleAccordion() {
    setIsExpanded((event) => !event);
  }

  return (
    <div style={style} className="accordion">
      <button className="accordion-header" onClick={toggleAccordion}>
        <span>{title}</span>
        <span>{isExpanded ? "_" : "+"}</span>
      </button>
      {isExpanded && <div className="accordion-content">{children}</div>}
    </div>
  );
}
