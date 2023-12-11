import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AccountSettingsPage } from "../pages/AccoutSettingsPage";
import { UserSingleton } from "../data/user";

describe("Simple tests for Account Settings page", () => {
  test("Profile dropdown is present on Account settings page", () => {
    render(<AccountSettingsPage />);
    const profileDropdown = screen.getByTestId("profileDropdown");

    expect(profileDropdown).toBeInTheDocument();
  });

  test("Email to be on Account settings page", () => {
    render(<AccountSettingsPage />);
    const Email = screen.getByText("Email:");

    expect(Email).toBeInTheDocument();
  });

  test("Phone Number to be on Account settings page", () => {
    render(<AccountSettingsPage />);
    const PhoneNumber = screen.getByText("Phone:");

    expect(PhoneNumber).toBeInTheDocument();
  });

  test("Full Name to be on Account settings page", () => {
    render(<AccountSettingsPage />);
    const FullName = screen.getByText("Full Name:");

    expect(FullName).toBeInTheDocument();
  });

  test("College to be on Account settings page", () => {
    render(<AccountSettingsPage />);
    const College = screen.getByText("College:");

    expect(College).toBeInTheDocument();
  });

  test("Location to be on Account settings page", () => {
    render(<AccountSettingsPage />);
    const Location = screen.getByText("Location:");

    expect(Location).toBeInTheDocument();
  });

  test("Skills to be on Account settings page", () => {
    render(<AccountSettingsPage />);
    const Skills = screen.getByText("Skills");

    expect(Skills).toBeInTheDocument();
  });

  test("Edit Full Name button is present on Account settings page", () => {
    render(<AccountSettingsPage />);
    const EditFullName = screen.getByTestId("Edit Full Name");
    expect(EditFullName).toBeInTheDocument();
  });

  test("Edit Phone Number button is present on Account settings page", () => {
    render(<AccountSettingsPage />);
    const EditPhoneNumber = screen.getByTestId("Edit Phone Number");
    expect(EditPhoneNumber).toBeInTheDocument();
  });

  test("Edit College button is present on Account settings page", () => {
    render(<AccountSettingsPage />);
    const EditCollege = screen.getByTestId("Edit College");
    expect(EditCollege).toBeInTheDocument();
  });

  test("Edit Location button is present on Account settings page", () => {
    render(<AccountSettingsPage />);
    const EditLocation = screen.getByTestId("Edit Location");
    expect(EditLocation).toBeInTheDocument();
  });
});
