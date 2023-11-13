import { Dropdown, DropdownDivider } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ProfileDropDownButton(): JSX.Element {
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
          ExampleName
        </Dropdown.Item>
        <Dropdown.Item disabled={true} style={{ color: "gray" }}>
          CollegeName
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
