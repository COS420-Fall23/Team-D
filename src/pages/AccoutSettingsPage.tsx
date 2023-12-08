import React from "react";
import { Button } from "react-bootstrap";
import { User } from "../data/userInterface";
import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { useParams } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

export function AccountSettingsPage(): JSX.Element {
  const params = useParams();
  const userEmail = params.listingId;
  const [value] = useCollection(collection(db, "User"));

  const FireBaseUser = value?.docs.find(
    (user): boolean => user.data().Email === userEmail
  );
  const logedInUser: User = {
    id: FireBaseUser?.data().id,
    FirstName: FireBaseUser?.data().FirstName,
    LastName: FireBaseUser?.data().LastName,
    Email: FireBaseUser?.data().Email,
    phoneNumber: FireBaseUser?.data().phoneNumber,
    College: FireBaseUser?.data().College,
    DOB: FireBaseUser?.data().DOB,
    SavedJobs: FireBaseUser?.data().SavedJobs,
  };
  return (
    <div>
      <header>
        <h1>College Jobs</h1>
        <ProfileDropDownButton
          logedInUser={logedInUser}
        ></ProfileDropDownButton>
      </header>
      <h1>Account Settings</h1>
      <div data-testid="Email">Email {logedInUser?.Email} </div>
      <div>
        Password <Button>ResetPassword</Button>
      </div>
      <div data-testid="Phone">Phone {logedInUser?.phoneNumber}</div>
      <div>Site Filter</div>
      <div>Job Keywords</div>
    </div>
  );
}
