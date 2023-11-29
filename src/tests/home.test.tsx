import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Simple tests for the home page", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<App />);
  });

  test("Home page display app title", () => {
    const appTitle = screen.getByText("College Jobs");
    expect(appTitle).toBeInTheDocument();
  });

  test("Login button is present", () => {
    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
  });

  test("At least one listing is present", () => {
    const listings = screen.getAllByText("See More");
    expect(listings.length).toBeGreaterThan(0);
  });

  test("Profile dropdown is present", () => {
    const ProfileDropdown = screen.getByTestId("profileDropdown");

    expect(ProfileDropdown).toBeInTheDocument();
  });

  test("Displays job listings based on search term", () => {
    const searchInput = screen.getByPlaceholderText(
      "Search by company or title"
    );

    fireEvent.change(searchInput, { target: { value: "IT ANALYST" } });

    const jobListingTitle = screen.getByText("IT ANALYST I");
    expect(jobListingTitle).toBeInTheDocument();
  });

  test("Filters job listings by location", () => {
    const filterLocationSelect = screen.getByLabelText("Filter by Location");

    fireEvent.change(filterLocationSelect, {
      target: { value: "Bangor, ME 04401" },
    });

    const jobListingLocation = screen.getByText("Bangor, ME 04401");
    expect(jobListingLocation).toBeInTheDocument();
  });

  test("Filters job listings by employment type", () => {
    const filterTypeSelect = screen.getByLabelText("Filter by Employment Type");

    fireEvent.change(filterTypeSelect, { target: { value: "Part-Time" } });

    const jobListingType = screen.getByText("Dummy Listing");
    expect(jobListingType).toBeInTheDocument();
  });
});
