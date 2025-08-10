import { Badge } from "../components/Badge/Badge";

export function BadgeExamples() {
  return (
    <>
      <Badge label="Ativo" variant="success"></Badge>
      <Badge label="Alerta" variant="warning"></Badge>
      <Badge label="Danger" variant="danger"></Badge>
      <Badge label="Info" variant="info"></Badge>
    </>
  );
}
