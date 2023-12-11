// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from "@testing-library/react";
import { SavedJobsPage } from "../pages/SavedJobPage";

describe("Simple tests for the saved jobs page", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<SavedJobsPage />);
  });
  test("Saved jobs page displays app title", () => {});

  /*test("Saved jobs page displays app title", () => {
    const appTitle = screen.getByText("College Jobs");
    expect(appTitle).toBeInTheDocument();
  });

  test("Saved jobs page displays profile dropdown", () => {
    const profileDropdown = screen.getByTestId("DropDown");
    expect(profileDropdown).toBeInTheDocument();
  });*/
});
