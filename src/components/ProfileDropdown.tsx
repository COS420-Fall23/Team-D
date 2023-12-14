import { Dropdown, DropdownDivider } from "react-bootstrap";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { RefreshProp } from "./Header";
import { UserSingleton } from "../data/UserSingleton";
import { useState } from "react";

export function ProfileDropdown(prop: RefreshProp): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [user, setUser] = useState(UserSingleton.getInstance());
  const navigate = useNavigate();

  function logout(): void {
    auth.signOut();
    navigate("/");
  }

  function handleSettingsClick(): void {
    // if we are not already on the settings page, navigate to it
    if (window.location.pathname !== "/settings") {
      navigate("/settings");
    }
  }
  function handleSaveJobsClick(): void {
    // if we are not already on the Saved Jobs page, navigate to it
    if (window.location.pathname !== "/savedJobs") {
      navigate("/savedJobs");
    }
  }

  return (
    <Dropdown data-testid="profileDropdown">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Profile
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item
          disabled={true}
          style={{ color: "black", fontWeight: "bold" }}
        >
          {user?.fullName ? user.fullName : "Loading..."}
          {/* {firebaseUser?.exists() ? firebaseUser.data().FullName : "Loading..."} */}
          {/* {fullName} */}
        </Dropdown.Item>
        <Dropdown.Item disabled={true} style={{ color: "gray" }}>
          Student at {user?.college ? user.college : "Loading..."}
          {/* Student at {firebaseUser?.exists() ? firebaseUser.data().College : "Loading..."} */}
          {/* Student at {college} */}
        </Dropdown.Item>
        <DropdownDivider />
        <Dropdown.Item data-testid="savedJobs" onClick={handleSaveJobsClick}>
          Saved Jobs
        </Dropdown.Item>
        <Dropdown.Item data-testid="settings" onClick={handleSettingsClick}>
          Settings
        </Dropdown.Item>
        <Dropdown.Item onClick={() => logout()}>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
