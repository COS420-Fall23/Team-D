import React from "react";
import { render, screen } from "@testing-library/react";
import { AccountSettingsPage } from "../pages/AccoutSettingsPage";

describe("Simple tests for Account Settings page", () => {
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
});
