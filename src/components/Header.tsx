import { useState } from "react";
import { auth } from "../firebaseConfig";
import { ProfileDropdown } from "./ProfileDropdown";
import { LoginButton } from "./LoginButton";

export interface RefreshProp {
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export function Header(): JSX.Element {
  const [refresh, setRefresh] = useState(false);

  console.log("[header] rendering header");

  return (
    <div>
      <header>
        <h1>College Jobs</h1>
        {auth.currentUser ? (
          <ProfileDropdown
            refresh={refresh}
            setRefresh={setRefresh}
          ></ProfileDropdown>
        ) : (
          <LoginButton refresh={refresh} setRefresh={setRefresh}></LoginButton>
        )}
      </header>
    </div>
  );
}
