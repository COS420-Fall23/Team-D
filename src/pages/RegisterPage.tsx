import { useState } from "react";
import "../register_page.css";
import { auth, db } from "../firebaseConfig";
import { collection, doc, setDoc } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { UserSingleton } from "../data/user";




export function RegisterPage(): JSX.Element {
    // This was generated using github copilot
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [college, setCollege] = useState("");
    const [dob, setDob] = useState("");
    const [location, setLocation] = useState("");
    const [isFormValid, setIsFormValid] = useState(false);
    let navigate = useNavigate(); // used to redirect to home page

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
        console.log("form submitted")
        // add the user to the database
        const payload = {
            fullName: fullName,
            phoneNumber: phoneNumber,
            college: college,
            dob: dob,
            location: location,
            email: auth.currentUser?.email,
            saved_jobs: [""]
        };
        let id = auth.currentUser?.email?.toString();
        if (id === undefined) {
            throw new Error("auth has no current user, which means auth is not initialized or no user logged in. This should not be possible");
        }
        setDoc(doc(db, "User", id), payload);
        console.log("user added to database");
        // update the user's info in the UserSingleton
        let localUser = UserSingleton.getInstance();
        localUser.fullName = fullName;  
        localUser.email = auth.currentUser?.email as string;
        localUser.phoneNumber = phoneNumber;
        localUser.college = college;
        localUser.dob = dob;
        localUser.location = location;
        localUser.saved_jobs = [];
        console.log("user added to UserSingleton");
        // redirect to home page
        navigate("/");
    };

    const validateForm = () => {
        setIsFormValid(fullName !== "");
    };

    // get the user's email from firebase auth, check if the user exists in the database, and redirect to home page if they do
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [value, loading, error] = useCollection(collection(db, "User"));
    const firebaseUser = value?.docs.find((doc) => doc.id === auth.currentUser?.email);
    if (firebaseUser !== undefined) {
        console.log("user found in database, redirecting to home page");
        navigate("/");
    }

    return (
        <div id="registerPage">
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