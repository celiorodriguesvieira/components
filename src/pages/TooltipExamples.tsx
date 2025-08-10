import { Tooltip } from "../components/Tooltip/Tooltip";
export function TooltipExamples() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        margin: "10px",
        alignItems: "center",
      }}
    >
      <Tooltip content="Click to submit" position="bottom">
        <button>Submit</button>
      </Tooltip>

      <Tooltip content="Click to save changes" position="top">
        <button>Save</button>
      </Tooltip>

      <Tooltip
        content="Your password must be at least 8 character"
        position="right"
      >
        <span style={{ cursor: "help", fontWeight: "bold" }}>ℹ️</span>
      </Tooltip>

      <Tooltip content="This is the CEO of the company" position="bottom">
        <img
          src="https://randomuser.me/api/portraits/men/75.jpg"
          alt="CEO"
          style={{ width: 60, height: 60, borderRadius: "50%" }}
        ></img>
      </Tooltip>
    </div>
  );
}
