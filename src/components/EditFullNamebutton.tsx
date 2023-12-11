import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { UserSingleton } from "../data/user";

interface EditFullNameProp {
  userEmail: string;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export function EditFullName(prop: EditFullNameProp): JSX.Element {
  const [fullName, setFullName] = useState("");
  const [visible, setvisible] = useState(false);

  const handleUpdateFullNameClick = async () => {
    const userDoc = doc(db, "User", prop.userEmail);

    await updateDoc(userDoc, {
      fullName: fullName,
    });
    let localUser = UserSingleton.getInstance();
    localUser.fullName = fullName;
    prop.setRefresh(!prop.refresh);
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
            data-testid="FullNameInput"
            placeholder="Enter Full Name"
            onChange={handleFullNameChange}
          />
          <Button id="EditFullName" onClick={handleUpdateFullNameClick}>
            Enter
          </Button>
        </InputGroup>
      ) : (
        <Button data-testid="Edit Full Name" onClick={() => setvisible(true)}>
          Edit Full Name
        </Button>
      )}
    </div>
  );
}
