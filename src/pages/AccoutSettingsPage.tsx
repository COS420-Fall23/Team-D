import React from "react";
import { Button, Form } from "react-bootstrap";
import { User } from "../data/userInterface";
import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { getDummyUsers } from "../dummy/Users";

export function AccountSettingsPage(): JSX.Element {
  // eslint-disable-next-line no-lone-blocks
  {
    /* temp will get changed*/
  }
  const id = -1;
  const logedInUser = getDummyUsers().find(
    (value: User): boolean => value.id === id
  );
  return (
    <div>
      <header>
        <h1>College Jobs</h1>
        <ProfileDropDownButton userID={id}></ProfileDropDownButton>
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
    </div>
  );
}
