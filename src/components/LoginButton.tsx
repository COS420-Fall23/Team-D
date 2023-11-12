import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function LoginButton(): JSX.Element {
    return (
        <span>
            <Link to={"/login"}>
                <Button>
                    Login
                </Button>
            </Link>
        </span>
    );
}
