import "./Tabs.css";
import { clsx } from "clsx";

type TabItem = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: TabItem[];
  activeTab: number;
  onTabChange: (index: number) => void;
  className?: string;
};

export function Tabs({ tabs, activeTab, onTabChange, className }: TabsProps) {
  return (
    <div className={clsx("tabs-container", className)}>
      <div className="tabs-header">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={clsx("tab-button", { active: index === activeTab })}
            onClick={() => onTabChange(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tabs-content">{tabs[activeTab]?.content}</div>
    </div>
  );
}
