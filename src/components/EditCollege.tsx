import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { UserSingleton } from "../data/user";

interface EditCollegeProp {
  userEmail: string;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export function EditCollege(prop: EditCollegeProp): JSX.Element {
  const [College, setCollege] = useState("");
  const [visible, setvisible] = useState(false);

  const handleUpdateClick = async () => {
    const userDoc = doc(db, "User", prop.userEmail);

    await updateDoc(userDoc, {
      college: College,
    });
    let localUser = UserSingleton.getInstance();
    localUser.college = College;
    setvisible(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCollege(event.target.value);
  };

  return (
    <div>
      {visible ? (
        <InputGroup className="mb-3">
          <Form.Control placeholder="Enter College" onChange={handleChange} />
          <Button id="College" onClick={handleUpdateClick}>
            Enter
          </Button>
        </InputGroup>
      ) : (
        <Button data-testid="Edit College" onClick={() => setvisible(true)}>
          Edit College
        </Button>
      )}
    </div>
  );
}
