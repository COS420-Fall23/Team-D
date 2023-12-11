// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { render, screen } from "@testing-library/react";
import { SavedJobsPage } from "../pages/SavedJobPage";
import { MemoryRouter } from "react-router-dom";

describe("Simple tests for the saved jobs page", () => {
  test("Saved jobs page displays app title", () => {
    render(
      <MemoryRouter>
        <SavedJobsPage />
      </MemoryRouter>
    );
    const appTitle = screen.getByText("College Jobs");
    expect(appTitle).toBeInTheDocument();
  });

  test("Saved jobs page displays profile dropdown", () => {
    render(
      <MemoryRouter>
        <SavedJobsPage />
      </MemoryRouter>
    );
    const LoginButton = screen.getByText("Login");
    expect(LoginButton).toBeInTheDocument();
  });
});
