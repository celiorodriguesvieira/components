import { Accordion } from "../components/Accordion/Accordion";

export function AccordionExamples() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 18, padding: 24 }}
    >
      <Accordion style={{ gap: "8px" }} title="What is React.js?">
        <p>
          React is a JavaScript library for building user interfaces using
          components.
        </p>
      </Accordion>

      <Accordion title="Terms and Conditions">
        <ul style={{ paddingLeft: 16, marginTop: 8 }}>
          <li>You must be 18 years or older.</li>
          <li>Your data may be processed for service improvement.</li>
          <li>Violation of rules may result in account suspension.</li>
        </ul>
      </Accordion>
      <Accordion title="Product Details">
        <div>
          <p>
            <strong>Name:</strong>
            Smart TV 55'
          </p>
          <p>
            <strong>Resolution:</strong>
            4K Ultra HD
          </p>
          <p>
            <strong>Price:</strong>
            $699.99
          </p>
        </div>
      </Accordion>
    </div>
  );
}
