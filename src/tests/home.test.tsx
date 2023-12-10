import { fireEvent, render, screen } from "@testing-library/react";
import { getDummyJobListings } from "../dummy/job_listing";
import { HomePage } from "../pages/HomePage";

describe("Simple tests for the home page", () => {
    beforeEach(() => {
        // eslint-disable-next-line testing-library/no-render-in-setup
        render(<HomePage listings={getDummyJobListings()}/>);
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
});
