import { Button } from "../components/Button/Button";
import { Toast } from "../components/Toast/Toast";
import { useEffect, useState } from "react";

export function ToastExamples() {
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showAutoToast, setShowAutoToast] = useState(false);
  const [customToast, setCustomToast] = useState<{
    message: string;
    type: "success" | "error" | "warning" | "info";
  } | null>(null);

  // Fechamento automático do segundo exemplo
  useEffect(() => {
    if (showAutoToast) {
      const timeout = setTimeout(() => {
        setShowAutoToast(false);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [showAutoToast]);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 48, padding: 24 }}
    >
      {/* Exemplo 1 – Sucesso simples */}
      <div>
        <h2>Example 1: Simple Success Toast</h2>
        <Button onClick={() => setShowSuccessToast(true)}>
          Show Success Toast
        </Button>
        {showSuccessToast && (
          <Toast
            message="Form submitted successfully!"
            type="success"
            onClose={() => setShowSuccessToast(false)}
          />
        )}
      </div>

      {/* Exemplo 2 – Erro com fechamento automático */}
      <div>
        <h2>Example 2: Auto-close Error Toast</h2>
        <Button onClick={() => setShowAutoToast(true)}>Show Error Toast</Button>
        {showAutoToast && (
          <Toast
            message="Something went wrong!"
            type="error"
            onClose={() => setShowAutoToast(false)}
          />
        )}
      </div>

      {/* Exemplo 3 – Múltiplos tipos */}
      <div>
        <h2>Example 3: Multiple Toast Types</h2>
        <div style={{ display: "flex", gap: 12 }}>
          <Button
            onClick={() =>
              setCustomToast({ message: "Saved!", type: "success" })
            }
          >
            Success
          </Button>
          <Button
            onClick={() =>
              setCustomToast({ message: "Be careful!", type: "warning" })
            }
          >
            Warning
          </Button>
          <Button
            onClick={() =>
              setCustomToast({ message: "Something failed", type: "error" })
            }
          >
            Error
          </Button>
          <Button
            onClick={() =>
              setCustomToast({ message: "FYI: All good", type: "info" })
            }
          >
            Info
          </Button>
        </div>

        {customToast && (
          <Toast
            message={customToast.message}
            type={customToast.type}
            onClose={() => setCustomToast(null)}
          />
        )}
      </div>
    </div>
  );
}
