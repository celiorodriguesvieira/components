import { InputText } from "../components/InputText/InputText";
import { useState } from "react";

export function InputExamples() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <InputText
        id="name"
        label="Your name:"
        onChange={(event) => setName(event.target.value)}
        placeholder={"Name"}
        type={"text"}
        value={name}
      />
      <InputText
        id="email"
        label="Email"
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(event) => setEmail(event.target.value)}
        errorMassage={email.length === 0 ? "Email is required!" : undefined}
      />
      <InputText
        id="username"
        label="username"
        value="Célio Rodrigues"
        onChange={() => {}}
        disable
      />
      <InputText
        id="names"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        errorMassage={name.length === 0 ? "Name is required" : undefined}
      />
      <InputText
        id="emails"
        label="Email"
        value="email@example.com"
        onChange={() => {}}
        placeholder="Enter your email"
        disable
      />
      <InputText
        id="password"
        label="Password"
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="••••••"
        errorMassage={password.length < 6 ? "Passwors is required" : undefined}
      />
    </>
  );
}
