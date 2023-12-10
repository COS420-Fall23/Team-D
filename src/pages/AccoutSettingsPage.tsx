import React from "react";
<<<<<<< HEAD
import { Button, Form } from "react-bootstrap";
import { User } from "../data/userInterface";
=======
import { Button } from "react-bootstrap";
>>>>>>> c17c1d8f70d8c7d99ebf6e68ba5d2b30d8f7d5fc
import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";

export function AccountSettingsPage(): JSX.Element {
  const [value] = useCollection(collection(db, "User"));

  const FireBaseUser = value?.docs.find(
    (user): boolean => user.data().Email === auth.currentUser?.email
  );

  return (
    <div>
      <header>
        <h1>College Jobs</h1>
        <ProfileDropDownButton></ProfileDropDownButton>
      </header>
      <h1>Account Settings</h1>
      <div data-testid="Email">Email {logedInUser?.Email} </div>
      <div data-testid="Phone">Phone {logedInUser?.phoneNumber}</div>
      <div data-testid="College">College {logedInUser?.College}</div>
      <div data-testid="Location">Location {logedInUser?.Location}</div>
      <Form>
        <h2>Skills</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Skills</Form.Label>
          <Form.Control type="text" placeholder="Enter Skill" />
        </Form.Group>
      </Form>
      <div data-testid="Email">Email {FireBaseUser?.data().Email} </div>
      <div>
        Password <Button>ResetPassword</Button>
      </div>
      <div data-testid="Phone">Phone {FireBaseUser?.data().phoneNumber}</div>
      <div>Site Filter</div>
      <div>Job Keywords</div>
    </div>
  );
}
