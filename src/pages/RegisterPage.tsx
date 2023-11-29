import { useState } from "react";
import "../register_page.css";

export function RegisterPage(): JSX.Element {
    // This was generated using github copilot
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [college, setCollege] = useState("");
    const [dob, setDob] = useState("");
    const [location, setLocation] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);

    const handleFullNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFullName(event.target.value);
        validateForm();
    };

    const handlePhoneNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhoneNumber(event.target.value);
        validateForm();
    };

    const handleCollegeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCollege(event.target.value);
        validateForm();
    };

    const handleDobChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDob(event.target.value);
        validateForm();
    };

    const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLocation(event.target.value);
        validateForm();
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Add form submission logic here
    };

    const validateForm = () => {
        setIsFormValid(fullName !== "");
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="fullName">Full Name</label>
                <input
                    type="text"
                    id="fullName"
                    value={fullName}
                    onChange={handleFullNameChange}
                />

                <label htmlFor="phoneNumber">Phone Number</label>
                <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                />

                <label htmlFor="college">College</label>
                <input
                    type="text"
                    id="college"
                    value={college}
                    onChange={handleCollegeChange}
                />

                <label htmlFor="dob">DOB</label>
                <input
                    type="text"
                    id="dob"
                    value={dob}
                    onChange={handleDobChange}
                />

                <label htmlFor="location">Location</label>
                <input
                    type="text"
                    id="location"
                    value={location}
                    onChange={handleLocationChange}
                />

                <button type="submit" disabled={!isFormValid}>
                    Submit
                </button>
            </form>
        </div>
    );
}