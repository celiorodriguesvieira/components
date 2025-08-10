import { Loader } from "../components/Loader/Loader";
import { Card } from "../components/Card/Card";

export function LoaderExamples() {
  return (
    <>
      <Loader size="small" />
      <Loader />
      <Loader size="large" />
      <Card title="User data">
        <Loader />
        <p style={{ marginTop: 12, fontSize: 14, color: "6b7280" }}>
          Loading user information.
        </p>
      </Card>
    </>
  );
}
