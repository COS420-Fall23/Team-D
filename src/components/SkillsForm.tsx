import {
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";
import { InputGroup, Button, Form, ButtonGroup } from "react-bootstrap";
import { useCollection } from "react-firebase-hooks/firestore";

interface SkillsFormProp {
  userEmail: string;
}

export function Skills(prop: SkillsFormProp): JSX.Element {
  const [skill, setSkill] = useState("");

  const handleUpdateClick = async () => {
    const userDoc = doc(db, "User", prop.userEmail);
    await updateDoc(userDoc, {
      skills: arrayUnion(skill),
    });
    setSkill("");
  };
  const handleDeleteClick = async (DeleteSkill: string) => {
    const userDoc = doc(db, "User", prop.userEmail);

    await updateDoc(userDoc, {
      skills: arrayRemove(DeleteSkill),
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(event.target.value);
  };

  const [value] = useCollection(collection(db, "User"));

  const FireBaseUser = value?.docs.find(
    (user): boolean => user.data().Email === prop.userEmail
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
      {FireBaseUser?.data().skills.map((skill: string) => (
        <ButtonGroup aria-label="Basic example">
          <Button active>{skill}</Button>
          <Button variant="danger" onClick={() => handleDeleteClick(skill)}>
            X
          </Button>
        </ButtonGroup>
      ))}
    </div>
  );
}
