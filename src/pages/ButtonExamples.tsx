import { Button } from "../components/Button/Button";

export function ButtonExamples() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Button onClick={() => alert("Salvando...")} text="Enviar">
        {"Enviar"}
      </Button>

      <Button onClick={() => alert("Cancelado!")} text="Cancelar">
        {"Cancelar"}
      </Button>

      <Button text="Excluir">{"Excluir"}</Button>

      <Button text="Send" variant="secondary">
        {"Send"}
      </Button>

      <Button
        disabled
        text="Send"
        onClick={() => alert("Clicked!")}
        variant="danger"
      >
        {"Send"}
      </Button>
    </div>
  );
}
