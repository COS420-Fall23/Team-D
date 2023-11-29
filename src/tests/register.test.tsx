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

import { fireEvent, render, screen } from "@testing-library/react";
import { RegisterPage } from "../pages/RegisterPage";

describe("Simple tests for the register page", () => {
    it("renders the register page correctly", () => {
        render(<RegisterPage />);
        expect(screen.getByText("Register")).toBeInTheDocument();
    });

    it("displays the full name field", () => {
        render(<RegisterPage />);
        expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    });

    it("displays the phone number field", () => {
        render(<RegisterPage />);
        expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    });

    it("displays the college field", () => {
        render(<RegisterPage />);
        expect(screen.getByLabelText("College")).toBeInTheDocument();
    });

    it("displays the DOB field", () => {
        render(<RegisterPage />);
        expect(screen.getByLabelText("DOB")).toBeInTheDocument();
    });

    it("displays the location field", () => {
        render(<RegisterPage />);
        expect(screen.getByLabelText("Location")).toBeInTheDocument();
    });

    /* TODO: this is a work in progress, and I need some sleep before I can fix this
    it("validates the full name field as mandatory", () => {
        render(<RegisterPage />);
        const submitButton = screen.getByText("Submit");
        expect(submitButton).toBeDisabled();

        // Enter a value in the full name field
        const fullNameInput = screen.getByLabelText("Full Name");
        fireEvent.change(fullNameInput, { target: { value: "John Doe" } });

        // Check if the submit button is enabled after entering a value in the full name field
        expect(submitButton).not.toBeDisabled();
    });

    it("submits the form successfully", () => {
        render(<RegisterPage />);

        // Enter a value in the full name field
        const fullNameInput = screen.getByLabelText("Full Name");
        fireEvent.change(fullNameInput, { target: { value: "John Doe" } });
        
        const submitButton = screen.getByText("Submit");
        expect(submitButton).not.toBeDisabled();

        // Add form submission test logic here 
    }); */
});