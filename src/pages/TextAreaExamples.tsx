import { useState } from "react";
import { TextArea } from "../components/TextArea/TextArea";

export function TextAreaExamples() {
  const [textArea, setTextArea] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [feedback, setFeedback] = useState("");

  return (
    <div style={{ width: "350px", marginLeft: "10px" }}>
      <TextArea
        id="desc"
        label="Send a message for us:"
        value={textArea}
        placeholder="Mensagem"
        onChange={(event) => setTextArea(event.target.value)}
        errorMessage={textArea.length < 1 ? "Minimum 1 character" : ""}
      />
      <p style={{ marginTop: 12 }}>
        {"You typed: "}
        <strong>{textArea}</strong>
      </p>
      <TextArea
        id="product-desc"
        label="Product description"
        placeholder="Write a short description..."
        value={productDesc}
        onChange={(e) => setProductDesc(e.target.value)}
        errorMessage={
          productDesc.length < 15 ? "Minimum 15 characters required" : undefined
        }
      />
      <TextArea
        id="user-bio"
        label="Your bio"
        value="Frontend developer who loves design systems."
        onChange={() => {}}
        disabled
      />

      <TextArea
        id="feedback"
        label="Your feedback"
        placeholder="Tell us what you think..."
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
    </div>
  );
}
