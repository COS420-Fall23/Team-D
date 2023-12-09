import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";
import { AccountSettingsPage } from "../pages/AccoutSettingsPage";
import { getDummyUsers } from "../dummy/Users";
import { User } from "../data/userInterface";

/*describe("Simple tests for Account Settings page", () => {
  test("Profile dropdown is present on home page", () => {
    render(<App />);
    const ProfileDropdown = screen.getByTestId("profileDropdown");

    expect(ProfileDropdown).toBeInTheDocument();
  });

  test("Profile dropdown is present on Account settings page", () => {
    render(<AccountSettingsPage />);
    const ProfileDropdown = screen.getByTestId("profileDropdown");

    expect(ProfileDropdown).toBeInTheDocument();
  });

  test("See if ResetPassword Button is on screen", () => {
    render(<AccountSettingsPage />);
    const password = screen.getByRole("button", { name: "ResetPassword" });

    expect(password).toBeInTheDocument();
  });

  /* test("Correct Email is Rendering", () => {
    render(<AccountSettingsPage />);
    const id = -1;
    const logedInUser = getDummyUsers().find(
      (value: User): boolean => value.id === id
    );
    expect(screen.getByText("Email " + logedInUser?.Email)).toBeInTheDocument();
  });

  test("Correct Phone numberis Rendering", () => {
    render(<AccountSettingsPage />);
    const id = -1;
    const logedInUser = getDummyUsers().find(
      (value: User): boolean => value.id === id
    );
    expect(
      screen.getByText("Phone " + logedInUser?.phoneNumber)
    ).toBeInTheDocument();
  });*/
//});
