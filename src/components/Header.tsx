import { useState } from "react";
import { auth } from "../firebaseConfig";
import { ProfileDropdown } from "./ProfileDropdown";
import { LoginButton } from "./LoginButton";
import { useNavigate, useLocation } from "react-router-dom";
import MyButtonLink from "./MyButtonLink";
import { UserSingleton } from "../data/UserSingleton";

export interface RefreshProp {
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export function Header(): JSX.Element {
  const [refresh, setRefresh] = useState(false);
  let navigate = useNavigate();
  let location = useLocation();

  console.log("[header] rendering header");

  function handleHomeClick(): void {
    // if we are not already on the home page, navigate to it
    if (location.pathname !== "/") {
      navigate("/");
    }
  }

  UserSingleton.getInstance().addListener(refresh, setRefresh, "Header");

  return (
    <div>
      <header>
        <h1 onClick={handleHomeClick}>College Jobs</h1>
        <div>
          { /* link to resource page unless on resource page, then link to home page */}
          {location.pathname !== "/resources" ? <MyButtonLink to="/resources">Resource Page</MyButtonLink> : <MyButtonLink to="/">Home Page</MyButtonLink>}
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
