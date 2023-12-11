/*
        Tests for the register page
        register page will have form with the following fields from the user model:
        - Full Name (mandatory)
        - Phone Number
        - College
        - DOB
        - Location
        The code below was generated using github copilot
*/

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

import { RegisterPage } from "../pages/RegisterPage";

describe("Simple tests for the register page", () => {
    it("renders the register page correctly", () => {
        render(
            <MemoryRouter> {/* Wrap the component with MemoryRouter */}
                <RegisterPage />
            </MemoryRouter>
        );
        expect(screen.getByText("Register")).toBeInTheDocument();
    });

    it("displays the full name field", () => {
        render(
            <MemoryRouter> {/* Wrap the component with MemoryRouter */}
                <RegisterPage />
            </MemoryRouter>
        );
        expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    });

    it("displays the phone number field", () => {
        render(
            <MemoryRouter> {/* Wrap the component with MemoryRouter */}
                <RegisterPage />
            </MemoryRouter>
        );
        expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    });

    it("displays the college field", () => {
        render(
            <MemoryRouter> {/* Wrap the component with MemoryRouter */}
                <RegisterPage />
            </MemoryRouter>
        );
        expect(screen.getByLabelText("College")).toBeInTheDocument();
    });

    it("displays the DOB field", () => {
        render(
            <MemoryRouter> {/* Wrap the component with MemoryRouter */}
                <RegisterPage />
            </MemoryRouter>
        );
        expect(screen.getByLabelText("DOB")).toBeInTheDocument();
    });

    it("displays the location field", () => {
        render(
            <MemoryRouter> {/* Wrap the component with MemoryRouter */}
                <RegisterPage />
            </MemoryRouter>
        );
        expect(screen.getByLabelText("Location")).toBeInTheDocument();
    });
});