import React from "react";
import { Button } from "react-bootstrap";
import { Header } from "../components/Header";
import { UserSingleton, waitForUser } from "../data/user";

export function AccountSettingsPage(): JSX.Element {
  const [localUser, setLocalUser] = React.useState(UserSingleton.getInstance());
  const [refresh, setRefresh] = React.useState(false);

  waitForUser(localUser, refresh, setRefresh, "AccountSettingsPage");

  return (
    <div>
      <Header></Header>
      <h1>Account Settings</h1>
      {/* <div data-testid="Email">Email {user?.data().Email} </div> */}
      <div data-testid="Email">Email {localUser !== null ? localUser.email : "Loading..."} </div>
      <div>
        Password <Button>ResetPassword</Button>
      </div>
      {/* <div data-testid="Phone">Phone {user?.data().phoneNumber}</div> */}
      <div data-testid="Phone">Phone {localUser !== null ? localUser.phoneNumber : "Loading..."}</div>
      <div>Site Filter</div>
      <div>Job Keywords</div>
    </div>
  );
}
