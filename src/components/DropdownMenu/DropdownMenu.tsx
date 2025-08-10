import { useState } from "react";
import "./DropdownMenu.css";
type DropdownItem =
  | {
      label: string;
      onClick: () => void;
      icon?: React.ReactNode;
      shortcut?: string;
    }
  | "divider";

type DropdownMenuProps = {
  label: string;
  items: DropdownItem[];
};

export function DropdownMenu({ label, items }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div>
      <button onClick={toggleMenu} className="dropdown-toggle">
        {label}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, idx) => {
            if (item === "divider") {
              return <hr key={idx} className="dropdown-divider" />;
            }
            return (
              <button
                key={idx}
                className="dropdown-item"
                onClick={() => {
                  item.onClick();
                  setIsOpen(false);
                }}
              >
                {/*Icon beside left (if there is)*/}

                {item.icon && (
                  <span className="dropdown-item-icon">{item.icon}</span>
                )}
                <span className="dropdown-item-label">{item.label}</span>
                {/*Icon beside right (If there is)*/}
                {item.shortcut && (
                  <span className="dropdown-item-shortcut">
                    {item.shortcut}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
