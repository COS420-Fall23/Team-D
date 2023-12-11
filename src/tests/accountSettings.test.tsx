import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AccountSettingsPage } from "../pages/AccoutSettingsPage";
import { UserSingleton } from "../data/user";

describe("Simple tests for Account Settings page", () => {
  test("See if ResetPassword Button is on screen", () => {
    render(
      <MemoryRouter>
        <AccountSettingsPage />
      </MemoryRouter>
    );
    const password = screen.getByRole("button", { name: "ResetPassword" });

    expect(password).toBeInTheDocument();
  });
});
