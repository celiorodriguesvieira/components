import { useState } from "react";
import { Tabs } from "../components/Tabs/Tabs";
import { InputText } from "../components/InputText/InputText";
export function TabsExamples() {
  const [activeTab, setActiveTab] = useState(0);
  const [email, setEmail] = useState("");
  return (
    <>
      <div>
        <Tabs
          tabs={[
            { label: "Profile", content: <p>Name: Célio Rodrigues</p> },
            { label: "Settings", content: <p>Change Wallpaper</p> },
            {
              label: "Notifications",
              content: <p>Change your password here.</p>,
            },
            { label: "Volume", content: <p>Volume</p> },
          ]}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />
      </div>

      <Tabs
        tabs={[
          {
            label: "Login",
            content: (
              <div>
                <p>Welcome back</p>
                <InputText
                  id="email"
                  label="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Enter your email"
                />
              </div>
            ),
          },
          { label: "Register", content: <p>Create a new account here.</p> },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <Tabs
        tabs={[
          { label: "🖼 Gallery", content: <p>Here are your images.</p> },

          {
            label: "📁 Files",
            content: <p>You have 5 new documents.</p>,
          },

          { label: "📊Stats", content: <p>Check your usage reports.</p> },
        ]}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </>
  );
}
