import { DropdownMenu } from "../components/DropdownMenu/DropdownMenu";
import { Avatar } from "../components/Avatar/Avatar";
export function DropdownMenuExamples() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 40, padding: 24 }}
    >
      {/* Exemplo 1 */}
      <DropdownMenu
        label="Options"
        items={[
          { label: "Profile", onClick: () => alert("Profile") },
          { label: "Settings", onClick: () => alert("Settings") },
          { label: "Logout", onClick: () => alert("Logged out") },
        ]}
      />

      {/* Exemplo 2 – ícones + divisores */}
      <DropdownMenu
        label="Menu"
        items={[
          { label: "Profile", icon: "👤", onClick: () => alert("Profile") },
          { label: "Settings", icon: "⚙️", onClick: () => alert("Settings") },
          "divider",
          { label: "Logout", icon: "🚪", onClick: () => alert("Logout") },
        ]}
      />

      {/* Exemplo 3 – atalhos */}
      <DropdownMenu
        label="Actions"
        items={[
          {
            label: "Copy link",
            shortcut: "Ctrl + C",
            onClick: () => alert("Copied!"),
          },
          {
            label: "Delete",
            shortcut: "Del",
            onClick: () => alert("Deleted!"),
          },
        ]}
      />

      {/* Exemplo 4 – icons */}

      <DropdownMenu
        label="Menu"
        items={[
          {
            label: "Profile",
            onClick: () => alert("Profile"),
            icon: <Avatar name="Carlos Silva" size="sm" />,
          },
          {
            label: "Settings",
            onClick: () => alert("Settings"),
            icon: <Avatar name="Carlos Silva" size="sm" />,
          },
          {
            label: "Logout",
            onClick: () => alert("Bye"),
            icon: <Avatar name="Carlos Silva" size="sm" />,
          },
        ]}
      />
    </div>
  );
}
