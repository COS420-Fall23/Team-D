import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface EditFullNameProp {
  userEmail: string;
}

export function EditFullName(prop: EditFullNameProp): JSX.Element {
  const [fullName, setFullName] = useState("");
  const [visible, setvisible] = useState(false);

  const handleUpdateFullNameClick = async () => {
    const userDoc = doc(db, "User", prop.userEmail);

    await updateDoc(userDoc, {
      FullName: fullName,
    });
    setvisible(false);
  };

  const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  return (
    <div>
      {visible ? (
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter Full Name"
            onChange={handleFullNameChange}
          />
          <Button id="EditFullName" onClick={handleUpdateFullNameClick}>
            Enter
          </Button>
        </InputGroup>
      ) : (
        <Button onClick={() => setvisible(true)}>Edit Full Name</Button>
      )}
    </div>
  );
}
