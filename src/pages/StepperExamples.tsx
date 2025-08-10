import { Stepper } from "../components/Stepper/Stepper";

export function StepperExamples() {
  return (
    <>
      <Stepper
        currentStep={1}
        steps={["Personal Info", "Address", "Payment", "Confirmation"]}
      />

      <Stepper
        currentStep={2}
        steps={["Cart", "Shipping", "Payment", "Confirmation"]}
      />

      <Stepper
        currentStep={0}
        steps={["Create Account", "Verify Email", "Complete Profile"]}
      />

      <Stepper
        currentStep={1}
        steps={["Welcome", "Set Preferences", "Start Using"]}
      />
    </>
  );
}
