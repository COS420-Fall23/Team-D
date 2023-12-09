import { Dropdown, DropdownDivider } from "react-bootstrap";
import { Link } from "react-router-dom";
import { User } from "../data/userInterface";

export interface ProfileDropdownProp {
  logedInUser: User;
}

export function ProfileDropDownButton(prop: ProfileDropdownProp): JSX.Element {
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
          {prop.logedInUser?.FullName}
        </Dropdown.Item>
        <Dropdown.Item disabled={true} style={{ color: "gray" }}>
          Student at {prop.logedInUser?.College}
        </Dropdown.Item>
        <DropdownDivider />
        <Dropdown.Item data-testid="settings">
          {<Link to={"/settings/" + prop.logedInUser.Email}>Settings</Link>}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => <div>this will change</div>}>
          Sign Out
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
