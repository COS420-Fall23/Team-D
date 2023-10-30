import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function LoginForm(): JSX.Element {
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");

  function updateEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function updatePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <div>
      <Form.Group className="mb-3" controlId="EnterEmail">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" onChange={updateEmail} placeholder="Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="EnterEmail">
        <Form.Label>Enter Password</Form.Label>
        <Form.Control
          type="text"
          onChange={updatePassword}
          placeholder="Password"
        />
      </Form.Group>
    </div>
  );
}
