import React, { useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { UserSingleton } from "../data/user";

interface EditLocationProp {
  userEmail: string;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export function EditLocation(prop: EditLocationProp): JSX.Element {
  const [Location, setLocation] = useState("");
  const [visible, setvisible] = useState(false);

  const handleUpdateClick = async () => {
    const userDoc = doc(db, "User", prop.userEmail);

    await updateDoc(userDoc, {
      location: Location,
    });
    let localUser = UserSingleton.getInstance();
    localUser.location = Location;
    prop.setRefresh(!prop.refresh);
    setvisible(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  };

  return (
    <div>
      {visible ? (
        <InputGroup className="mb-3">
          <Form.Control placeholder="Enter Location" onChange={handleChange} />
          <Button id="Location" onClick={handleUpdateClick}>
            Enter
          </Button>
        </InputGroup>
      ) : (
        <Button data-testid="Edit Location" onClick={() => setvisible(true)}>
          Edit Location
        </Button>
      )}
    </div>
  );
}
