import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { EditFullName } from "../components/EditFullNamebutton";
import { EditPhonenumber } from "../components/EditPhoneNumer";
import { EditCollege } from "../components/EditCollege";
import { EditLocation } from "../components/EditLocationButton";

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
      <div data-testid="Email">
        <div>Email: {FireBaseUser?.data().Email}</div>{" "}
      </div>
      <div data-testid="FullName">
        <div>Full Name: {FireBaseUser?.data().Name}</div>
        <EditFullName userEmail={FireBaseUser?.data().Email}></EditFullName>
      </div>
      <div data-testid="Phone">
        <div>Phone: {FireBaseUser?.data().phoneNumber}</div>
        <EditPhonenumber
          userEmail={FireBaseUser?.data().Email}
        ></EditPhonenumber>
      </div>
      <div data-testid="College">
        <div>College: {FireBaseUser?.data().College}</div>
        <EditCollege userEmail={FireBaseUser?.data().Email}></EditCollege>
      </div>
      <div data-testid="Location">
        <div>Location: {FireBaseUser?.data().Location}</div>
        <EditLocation userEmail={FireBaseUser?.data().Email}></EditLocation>
      </div>
      <Form>
        <h2>Skills</h2>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Skills</Form.Label>
          <Form.Control type="text" placeholder="Enter Skill" />
        </Form.Group>
      </Form>
    </div>
  );
}
