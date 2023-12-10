import { Dropdown, DropdownDivider } from "react-bootstrap";
import { auth, db } from "../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { Link, useNavigate } from "react-router-dom";
import { RefreshProp } from "./Header";
import { useState } from "react";

export function ProfileDropdown(prop: RefreshProp): JSX.Element {
  const [fullName, setFullName] = useState("Loading...");
  const [college, setCollege] = useState("Loading...");

  function logout(): void {
    auth.signOut();
    prop.setRefresh(!prop.refresh);
  }

  async function getUser() {
    if (auth.currentUser === null) {
      return;
    }
    const docSnap = await getDoc(doc(db, "User", auth.currentUser?.email as string));
    setFullName(docSnap.exists() ? docSnap.data().fullName : "Error");
    setCollege(docSnap.exists() ? docSnap.data().college : "Error");
  }

  getUser();

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
          {/* {firebaseUser?.exists() ? firebaseUser.data().FullName : "Loading..."} */}
          {fullName}
        </Dropdown.Item>
        <Dropdown.Item disabled={true} style={{ color: "gray" }}>
          {/* Student at {firebaseUser?.exists() ? firebaseUser.data().College : "Loading..."} */}
          Student at {college}
        </Dropdown.Item>
        <DropdownDivider />
        <Dropdown.Item data-testid="settings">
          {<Link to={"/settings"}>Settings</Link>}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => logout()}>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
