import { Dropdown, DropdownDivider } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { auth, db } from "../firebaseConfig";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

export interface LoginButtonProp {
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

export function HomeProfileDropDownButton(prop: LoginButtonProp): JSX.Element {
  let navigate = useNavigate();

  function logout(): void {
    auth.signOut();
    prop.setRefresh(!prop.refresh);
    navigate("/");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, CollegtionLoading, CollectionError] = useCollection(
    collection(db, "User")
  );

  const FireBaseUser = value?.docs.find(
    (User): boolean => User.data().Email === auth.currentUser?.email
  );

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
          {FireBaseUser?.data().FullName}
        </Dropdown.Item>
        <Dropdown.Item disabled={true} style={{ color: "gray" }}>
          Student at {FireBaseUser?.data().College}
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
