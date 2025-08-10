import clsx from "clsx";
import "./Stepper.css";

type StepperProps = {
  steps: string[];
  currentStep: number;
};

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="stepper">
      {steps.map((step, index) => (
        <div
          key={index}
          className={clsx("step", {
            active: index === currentStep,
            completed: index < currentStep,
          })}
        >
          <div className="step-circle">{index + 1}</div>
          <span className="step-label">{step}</span>
          {index < steps.length - 1 && <div className="step-line" />}
        </div>
      ))}
    </div>
  );
}
