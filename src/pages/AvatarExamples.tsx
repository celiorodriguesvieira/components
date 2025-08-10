import { Avatar } from "../components/Avatar/Avatar";

export function AvatarExamples() {
  return (
    <>
      <Avatar name="Carlos Rodrigues" size="md" />
      <Avatar name="Maria Rosário" src="https://i.pravatar.cc/100" size="md" />
      <Avatar src="https://i.pravatar.cc" size="lg" />
      <Avatar src="https://i.pravatar.cc/300" size="xg" bordered />
    </>
  );
}
