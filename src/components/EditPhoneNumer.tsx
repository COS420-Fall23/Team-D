import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

interface EditPhonenumberProp {
  userEmail: string;
}

export function EditPhonenumber(prop: EditPhonenumberProp): JSX.Element {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [visible, setvisible] = useState(false);

  const handleUpdatePhoneNumberClick = async () => {
    const userDoc = doc(db, "User", prop.userEmail);

    await updateDoc(userDoc, {
      phoneNumber: phoneNumber,
    });
    setvisible(false);
  };

  const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div>
      {visible ? (
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Enter Phone Number"
            onChange={handlePhoneChange}
          />
          <Button id="EditPhonenumber" onClick={handleUpdatePhoneNumberClick}>
            Enter
          </Button>
        </InputGroup>
      ) : (
        <Button onClick={() => setvisible(true)}>Edit Phone Number</Button>
      )}
    </div>
  );
}
