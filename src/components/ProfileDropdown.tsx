import { Dropdown, DropdownDivider } from "react-bootstrap";
import { Link } from "react-router-dom";
import { User } from "../data/userInterface";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebaseConfig";

export interface ProfileDropdownProp {
  logedInUser: string;
  setLoginUser: (setLoginUser: string) => void;
  setLogin: (newLogin: boolean) => void;
}

export function ProfileDropDownButton(prop: ProfileDropdownProp): JSX.Element {
  function logout(): void {
    prop.setLogin(false);
    prop.setLoginUser("");
    auth.signOut();
  }
  let logedInUser: User;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, CollegtionLoading, CollectionError] = useCollection(
    collection(db, "User")
  );

  const FireBaseUser = value?.docs.find(
    (User): boolean => User.data().Email === prop.logedInUser
  );
  if (FireBaseUser === undefined) {
    logedInUser = {
      id: "",
      FullName: "",
      Email: "",
      phoneNumber: "",
      College: "",
      DOB: "",
      SavedJobs: [],
      Location: "",
    };
  } else {
    logedInUser = {
      id: FireBaseUser?.data().id,
      FullName: FireBaseUser?.data().FullName,
      Email: FireBaseUser?.data().Email,
      phoneNumber: FireBaseUser?.data().phoneNumber,
      College: FireBaseUser?.data().College,
      DOB: FireBaseUser?.data().DOB,
      SavedJobs: FireBaseUser?.data().SavedJobs,
      Location: FireBaseUser?.data().Location,
    };
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
          {logedInUser.FullName}
        </Dropdown.Item>
        <Dropdown.Item disabled={true} style={{ color: "gray" }}>
          Student at {logedInUser.College}
        </Dropdown.Item>
        <DropdownDivider />
        <Dropdown.Item data-testid="settings">
          {<Link to={"/settings/" + logedInUser.Email}>Settings</Link>}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => logout}>Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
