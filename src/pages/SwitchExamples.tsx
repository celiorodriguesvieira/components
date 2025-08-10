import { useState } from "react";
import { Switch } from "../components/Switch/Switch";

export function SwitchExamples() {
  const [darkMode, setDarkMode] = useState(false);
  const [isStock, setInStock] = useState(true);
  const [notificationsEnable, setNotificationsEnabled] = useState(true);

  return (
    <div
      style={{
        marginLeft: "10px",
        display: "flex",
        alignItems: "start",
        flexDirection: "column",
        gap: 24,
      }}
    >
      <Switch
        checked={notificationsEnable}
        onChange={() => setNotificationsEnabled(!notificationsEnable)}
        label="Enable Notifications"
        size="small"
      />

      <Switch
        checked={isStock}
        onChange={() => setInStock(!isStock)}
        label={isStock ? "In stock" : "Out of stock"}
        size="medium"
      />

      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        label={darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        size="large"
      />
    </div>
  );
}
