import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ButtonExamples } from "./pages/ButtonExamples";
import { InputExamples } from "./pages/InputExamples";
import { CardExamples } from "./pages/CardExamples";
import { BadgeExamples } from "./pages/BadgeExamples";
import { LoaderExamples } from "./pages/LoaderExamples";
import { ModalExamples } from "./pages/ModalExamples";
import { AvatarExamples } from "./pages/AvatarExamples";
import { AlertExamples } from "./pages/AlertExamples";
import { SwitchExamples } from "./pages/SwitchExamples";
import { TextAreaExamples } from "./pages/TextAreaExamples";
import { SelectExamples } from "./pages/SelectExamples";
import { TabsExamples } from "./pages/TabsExamples";
import { ToastExamples } from "./pages/ToastExamples";
import { AccordionExamples } from "./pages/AccordionExamples";
import { StepperExamples } from "./pages/StepperExamples";
import { TooltipExamples } from "./pages/TooltipExamples";
import { CalendarExamples } from "./pages/CalendarExamples";
import { DropdownMenuExamples } from "./pages/DropdownMenuExamples";
import { TagExamples } from "./pages/TagExamples";
import { NotificationCenterExamples } from "./pages/NotificationCenterExamples";
import { PaginationExamples } from "./pages/PaginationExample";
import { ProgressBarExamples } from "./pages/ProgressBarExamples";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          display: "grid",
          gap: 16,
          gridTemplateRows: 12,
          marginBottom: 24,
        }}
      >
        <Link to="buttons">Buttons</Link>
        <Link to="inputs">Inputs</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/badges">Badges</Link>
        <Link to="/loaders">Loaders</Link>
        <Link to="/modals">Modals</Link>
        <Link to="/avatar">Avatar</Link>
        <Link to="/alert">Alert</Link>
        <Link to="/switch">Switch</Link>
        <Link to="/textarea">TextArea</Link>
        <Link to="/select">Select</Link>
        <Link to="/tabs">Tabs</Link>
        <Link to="/toast">Toast</Link>
        <Link to="/accordion">Accordion</Link>
        <Link to="/stepper">Stepper</Link>
        <Link to="/tooltip">Tooltip</Link>
        <Link to="/calendar">Calendar</Link>
        <Link to="/dropdown">DropdownMenu</Link>
        <Link to="/tag">Tag</Link>
        <Link to="/notification">Notification Center</Link>
        <Link to="/pagination">Pagination</Link>
        <Link to="/progressbar">ProgressBar</Link>
      </nav>
      <Routes>
        <Route path="/buttons" element={<ButtonExamples />} />
        <Route path="/inputs" element={<InputExamples />} />
        <Route path="/cards" element={<CardExamples />} />
        <Route path="/badges" element={<BadgeExamples />} />
        <Route path="/loaders" element={<LoaderExamples />} />
        <Route path="/modals" element={<ModalExamples />} />
        <Route path="/avatar" element={<AvatarExamples />} />
        <Route path="/alert" element={<AlertExamples />} />
        <Route path="/switch" element={<SwitchExamples />} />
        <Route path="/textarea" element={<TextAreaExamples />} />
        <Route path="/select" element={<SelectExamples />} />
        <Route path="/tabs" element={<TabsExamples />} />
        <Route path="/toast" element={<ToastExamples />} />
        <Route path="accordion" element={<AccordionExamples />} />
        <Route path="/stepper" element={<StepperExamples />} />
        <Route path="/tooltip" element={<TooltipExamples />} />
        <Route path="/calendar" element={<CalendarExamples />} />
        <Route path="/dropdown" element={<DropdownMenuExamples />} />
        <Route path="/tag" element={<TagExamples />} />
        <Route path="/notification" element={<NotificationCenterExamples />} />
        <Route path="/pagination" element={<PaginationExamples />} />
        <Route path="/progressbar" element={<ProgressBarExamples />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
