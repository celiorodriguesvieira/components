import { ChangeComparison } from "../components/ChangeComparison/ChangeComparison";
export function ChangeComparisonExamples() {
  return (
    <>
      <ChangeComparison value={12} type="positive" label="vs last month" />
      <ChangeComparison value={-8} type="negative" label="vs last year" />
      <ChangeComparison value={0} type="neutral" label="vs last week" />
    </>
  );
}
