import React from "react";
import { Button } from "react-bootstrap";
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
