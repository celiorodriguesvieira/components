import { Tag } from "../components/Tag/Tag";

export function TagExamples() {
  return (
    <div style={{ display: "flex", gap: 8 }}>
      <Tag>Default</Tag>
      <Tag color="green">Success</Tag>
      <Tag color="red">Error</Tag>
      <Tag color="blue">Info</Tag>
      <Tag color="gray">Neutral</Tag>
      <Tag outlined color="gray">
        Neutral
      </Tag>
      <Tag color="gray">Neutral</Tag>
      <Tag color="green">Success</Tag>
      <Tag outlined color="gray" onClose={() => alert("Tag closed!")}>
        Close Tag
      </Tag>
    </div>
  );
}
