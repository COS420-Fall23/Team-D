import React from "react";
import { Button } from "react-bootstrap";
import { User } from "../data/userInterface";
import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { useParams } from "react-router-dom";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "../firebaseConfig";

export interface AccountSettingsProp {
  logedInUser: string;
  setLoginUser: (setLoginUser: string) => void;
  setLogin: (newLogin: boolean) => void;
}

export function AccountSettingsPage(prop: AccountSettingsProp): JSX.Element {
  const params = useParams();
  const userEmail = params.userEmail;
  const [value] = useCollection(collection(db, "User"));

  const FireBaseUser = value?.docs.find(
    (user): boolean => user.data().Email === userEmail
  );
  const logedInUser: User = {
    id: FireBaseUser?.data().id,
    FullName: FireBaseUser?.data().FullName,
    Email: FireBaseUser?.data().Email,
    phoneNumber: FireBaseUser?.data().phoneNumber,
    College: FireBaseUser?.data().College,
    DOB: FireBaseUser?.data().DOB,
    SavedJobs: FireBaseUser?.data().SavedJobs,
    Location: FireBaseUser?.data().Location,
  };
  return (
    <div>
      <header>
        <h1>College Jobs</h1>
        <ProfileDropDownButton
<<<<<<< HEAD
          logedInUser={logedInUser.Email}
          setLoginUser={prop.setLoginUser}
          setLogin={prop.setLogin}
=======
          logedInUser={logedInUser}
>>>>>>> parent of 01aedcd (changed login to pass email throgh router)
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
