import React from "react";
import { act, render, screen } from "@testing-library/react";
import App from "../App";
import { LoginPage } from "../pages/LoginPage";

describe("Simple tests for login page", () => {
  test("Login button is present", () => {
    render(<App />);

    const loginButton = screen.getByRole("button", { name: "Login" });

    expect(loginButton).toBeInTheDocument();
  });

  test("Login button redirects to the login page", () => {
    render(<App />);

    const loginButton = screen.getByRole("button", { name: "Login" });
    act(() => {
      loginButton.click();
    });

    expect(document.location.pathname).toEqual("/login");
  });

  test("Login page displays a form for email and password", () => {
    render(<LoginPage />);

    const emailBox = screen.getByPlaceholderText("Email");
    const passwordBox = screen.getByPlaceholderText("Password");

    expect(emailBox).toBeInTheDocument();
    expect(passwordBox).toBeInTheDocument();
  });
});
