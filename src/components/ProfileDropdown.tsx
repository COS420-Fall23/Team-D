import { Dropdown, DropdownDivider } from "react-bootstrap";
import { Link } from "react-router-dom";
import { User } from "../data/userInterface";
import { getDummyUsers } from "../dummy/Users";

export interface ProfileDropdownProp {
  userID: number;
}

export function ProfileDropDownButton(
  userID: ProfileDropdownProp
): JSX.Element {
  const logedInUser = getDummyUsers().find(
    (value: User): boolean => value.id === userID.userID
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
          {logedInUser?.name}
        </Dropdown.Item>
        <Dropdown.Item disabled={true} style={{ color: "gray" }}>
          Student at {logedInUser?.College}
        </Dropdown.Item>
        <DropdownDivider />
        <Dropdown.Item data-testid="settings">
          {<Link to={"/settings"}>Settings</Link>}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => <div>this will change</div>}>
          Sign Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
