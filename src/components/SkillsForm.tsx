import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";
import { InputGroup, Button, Form, ButtonGroup } from "react-bootstrap";
import { UserSingleton } from "../data/UserSingleton";
import { RefreshProp } from "./Header";

export function Skills(prop: RefreshProp): JSX.Element {
  const [skill, setSkill] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState(UserSingleton.getInstance());

  const handleUpdateClick = async () => {
    const userDoc = doc(db, "User", user.email);
    await updateDoc(userDoc, {
      skills: arrayUnion(skill),
    });
    let localUser = UserSingleton.getInstance();
    localUser.skills.push(skill);
    prop.setRefresh(!prop.refresh);
  };
  const handleDeleteClick = async (DeleteSkill: string) => {
    const userDoc = doc(db, "User", user.email);

    await updateDoc(userDoc, {
      skills: arrayRemove(DeleteSkill),
    });
    let localUser = UserSingleton.getInstance();
    localUser.skills = localUser.skills.filter(
      (skill) => skill !== DeleteSkill
    );
    prop.setRefresh(!prop.refresh);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSkill(event.target.value);
  };

  return (
    <div className="skillsForm">
      <h1>Skills</h1>
      <InputGroup className="mb-3">
        <Form.Control placeholder="Enter New Skill" onChange={handleChange} />
        <Button id="Skill" onClick={handleUpdateClick}>
          Enter
        </Button>
      </InputGroup>
      {user.skills.map((skill: string) => (
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
