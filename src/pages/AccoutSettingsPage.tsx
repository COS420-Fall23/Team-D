import { EditFullName } from "../components/EditFullNamebutton";
import { EditPhonenumber } from "../components/EditPhoneNumer";
import { EditCollege } from "../components/EditCollege";
import { EditLocation } from "../components/EditLocationButton";
import { Skills } from "../components/SkillsForm";
import React from "react";
import { Header } from "../components/Header";
import { UserSingleton, waitForUser } from "../data/user";

export function AccountSettingsPage(): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [localUser, setLocalUser] = React.useState(UserSingleton.getInstance());
  const [refresh, setRefresh] = React.useState(false);

  waitForUser(localUser, refresh, setRefresh, "AccountSettingsPage");

  return (
    <div>
      <Header></Header>
      <h1>Account Settings</h1>
      <div data-testid="Email">
        <div>Email: {localUser.email}</div>{" "}
      </div>
      <div data-testid="FullName">
        <div>Full Name: {localUser.fullName}</div>
        <EditFullName
          userEmail={localUser.email}
          refresh={refresh}
          setRefresh={setRefresh}
        ></EditFullName>
      </div>
      <div data-testid="Phone">
        <div>Phone: {localUser.phoneNumber}</div>
        <EditPhonenumber
          userEmail={localUser.email}
          refresh={refresh}
          setRefresh={setRefresh}
        ></EditPhonenumber>
      </div>
      <div data-testid="College">
        <div>College: {localUser.college}</div>
        <EditCollege
          userEmail={localUser.email}
          refresh={refresh}
          setRefresh={setRefresh}
        ></EditCollege>
      </div>
      <div data-testid="Location">
        <div>Location: {localUser.location}</div>
        <EditLocation
          userEmail={localUser.email}
          refresh={refresh}
          setRefresh={setRefresh}
        ></EditLocation>
      </div>
      {<Skills refresh={refresh} setRefresh={setRefresh}></Skills>}
    </div>
  );
}
