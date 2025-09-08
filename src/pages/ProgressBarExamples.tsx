import { ProgressBar } from "../components/ProgressBar/ProgressBar";

export function ProgressBarExamples() {
  return (
    <div style={{ display: "grid", gap: 24 }}>
      {/*Here will put 3 examples */}
      <div>
        <h3> Monthly Goal</h3>
        <ProgressBar
          label="Goal Completion"
          value={45}
          color="blue"
          max={100}
        />
      </div>

      <div>
        <h3>Tasks</h3>
        <ProgressBar label="Completed" value={100} max={100} color="green" />
      </div>

      <div>
        <h3>Incidents</h3>
        <ProgressBar label="Open Incidents" value={7} max={10} color="red" />
      </div>
    </div>
  );
}
