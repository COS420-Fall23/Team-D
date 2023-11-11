import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function LoginButton(): JSX.Element {
    return (
        <span>
            <Link to={"/login"}>
                <Button
                    style={{
                        height: "50px",
                        width: "100px",
                        fontSize: "24px",
                        marginLeft: "900px",
                        marginBottom: "100px",
                    }}
                >
                    Login
                </Button>
            </Link>
        </span>
    );
}
