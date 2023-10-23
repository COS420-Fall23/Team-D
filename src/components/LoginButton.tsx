import React from "react";
import { Button } from "react-bootstrap";

export function LoginButton(): JSX.Element {
    return (
        <span>
            <Button style={{height:"50px", width:"100px",fontSize:"24px", marginLeft:"900px", marginBottom:"750px"}}>Login</Button>
        </span>
    );
}