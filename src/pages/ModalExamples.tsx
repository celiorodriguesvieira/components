import { Modal } from "../components/Modal/Modal";
import { InputText } from "../components/InputText/InputText";
import { Button } from "../components/Button/Button";
import { useState } from "react";

export function ModalExamples() {
  const [email, setEmail] = useState("");
  const [openModal, setOpenModal] = useState<
    null | "delete" | "subscribe" | "details"
  >(null);

  return (
    <>
      {/* Botões para abrir modais*/}
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Button onClick={() => setOpenModal("delete")}>
          Open Delete Modal
        </Button>
        <Button onClick={() => setOpenModal("subscribe")}>
          Open Subscribe Modal
        </Button>
        <Button onClick={() => setOpenModal("details")}>
          Open Product Details
        </Button>
      </div>

      {/*Delete Modal */}
      <Modal
        isOpen={openModal === "delete"}
        onClose={() => setOpenModal(null)}
        title="Delete item"
      >
        <div>This action cannot be undone. Are you sure?</div>
        <Button onClick={() => alert("Deleted!")}>Yes, delete</Button>
        <Button onClick={() => setOpenModal(null)}>Cancel</Button>
      </Modal>

      {/*Subscribe Modal */}
      <Modal
        isOpen={openModal === "subscribe"}
        onClose={() => setOpenModal(null)}
        title="Subscribe to newsletter"
      >
        <InputText
          id="email"
          label="Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
        />
        <Button
          onClick={() => alert(`Subscribe with ${email}`)}
          style={{ marginTop: 12 }}
        >
          Subscribe
        </Button>
      </Modal>

      {/* Product Details Modal */}
      <Modal
        isOpen={openModal === "details"}
        onClose={() => setOpenModal(null)}
        title="Product Details"
      >
        <p>
          <strong>Name:</strong>
          Wireless Headphones
        </p>
        <p>
          <strong>Price:</strong>
          $199.90
        </p>
        <p>
          <strong>Description:</strong>
          High-quality noise cancelling headphones.
        </p>
      </Modal>
    </>
  );
}
