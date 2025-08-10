import { useState } from "react";
import { Select } from "../components/Select/Select";

export function SelectExamples() {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("all");
  return (
    <div style={{ marginLeft: "10px" }}>
      <Select
        id="category"
        label="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        options={[
          { value: "", label: "Select a category" },
          { value: "tech", label: "Technology" },
          { value: "health", label: "Health" },
          { value: "sports", label: "Sports" },
        ]}
      />

      <Select
        id="country"
        label="Country"
        value="BR"
        onChange={() => {}}
        options={[
          { value: "BRA", label: "Brazil" },
          { value: "USA", label: "United States" },
          { value: "DEU", label: "Germany" },
        ]}
      />

      <Select
        id="status"
        label="Filter status"
        value={status}
        onChange={(event) => setStatus(event.target.value)}
        options={[
          { value: "all", label: "All" },
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
        ]}
      ></Select>
    </div>
  );
}
