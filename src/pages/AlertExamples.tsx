import { Alert } from "../components/Alert/Alert";
export function AlertExamples() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Alert message="Success! Your account was created." variant="success" />
        <Alert message="Error! Soothing went wrong!" variant="error" />
        <Alert message="Warning! Please check your input." variant="warning" />
        <Alert message="Info! You can. try again later." variant="info" />
        <Alert
          message="✅ Your profile has been update successfully!"
          variant="success"
        />
        <Alert
          message="❌ Invalid email or password. Please try again"
          variant="error"
        />

        <Alert
          message="ℹ️ We will notify you once your report is ready."
          variant="info"
          className="custom-shadow"
        />
      </div>
    </>
  );
}
