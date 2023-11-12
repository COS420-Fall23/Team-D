import { render, screen } from "@testing-library/react";
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
});
