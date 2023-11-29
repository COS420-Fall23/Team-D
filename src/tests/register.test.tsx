/*
    Tests for the register page
    register page will have form with the following fields from the user model:
    - Full Name (mandatory)
    - Phone Number
    - College
    - DOB
    - Location

*/

import { render, screen } from "@testing-library/react";
import App from "../App";
import { RegisterPage } from "../pages/RegisterPage";

