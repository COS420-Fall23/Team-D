import { useState } from "react";
import { auth } from "../firebaseConfig";
import { ProfileDropdown } from "./ProfileDropdown";
import { LoginButton } from "./LoginButton";
import { useNavigate } from "react-router-dom";
import MyButtonLink from "./MyButtonLink";

export interface RefreshProp {
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export function Header(): JSX.Element {
  const [refresh, setRefresh] = useState(false);
  let navigate = useNavigate();

  console.log("[header] rendering header");

  function handleHomeClick(): void {
    // if we are not already on the home page, navigate to it
    if (window.location.pathname !== "/") {
      navigate("/");
    }
  }

  return (
    <div>
      <header>
        <h1 onClick={handleHomeClick}>College Jobs</h1>
        <div>
          <MyButtonLink to="/resources">Resource Page</MyButtonLink>
          {auth.currentUser ? (
            <ProfileDropdown
              refresh={refresh}
              setRefresh={setRefresh}
            ></ProfileDropdown>
          ) : (
            <LoginButton refresh={refresh} setRefresh={setRefresh}></LoginButton>
          )}
        </div>
      </header>
    </div>
  );
}
