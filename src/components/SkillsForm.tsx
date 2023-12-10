import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../firebaseConfig";
import { InputGroup, Button, Form, ButtonGroup } from "react-bootstrap";
import { useCollection } from "react-firebase-hooks/firestore";

export function Skills(): JSX.Element {
  const [skill, setSkill] = useState("");
  const userEmail = auth.currentUser?.email;
  if (userEmail === undefined || userEmail === null) {
    throw new Error("userEmail is undefined");
  }
  const handleUpdateClick = async () => {
    const userDoc = doc(db, "User", userEmail);

    await updateDoc(userDoc, {
      skills: arrayUnion(skill),
    });
  };
  const handleDeleteClick = async () => {
    const userDoc = doc(db, "User", userEmail);

    await updateDoc(userDoc, {
      skills: arrayRemove(skill),
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(event.target.value);
  };

  const [value] = useCollection(collection(db, "User"));

  const FireBaseUser = value?.docs.find(
    (user): boolean => user.data().Email === userEmail
  );

  return (
    <div>
      <h1>Skills</h1>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Enter New Skill" onChange={handleChange} />
        <Button id="Skill" onClick={handleUpdateClick}>
          Enter
        </Button>
      </InputGroup>
      {FireBaseUser?.data().Skills.map((skill: string) => (
        <ButtonGroup aria-label="Basic example">
          <Button active>{skill}</Button>
          <Button variant="Danger" onClick={handleDeleteClick}>
            X
          </Button>
        </ButtonGroup>
      ))}
    </div>
  );
}
