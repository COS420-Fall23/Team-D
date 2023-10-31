import { useState } from "react";
import { LoginForm } from "../components/LoginForm";
import { Button } from "react-bootstrap";

export interface LoginInfoProp {
    setEmail: (newEmail: string) => void;
    setPassword: (newPassword: string) => void;
}

export function LoginPage(): JSX.Element {
    const [Email, setEmail] = useState<string>("");
    const [Password, setPassword] = useState<string>("");
    return (
        <div className="LoginPage">
            <h1>Login</h1>
            <LoginForm
                setEmail={setEmail}
                setPassword={setPassword}
            ></LoginForm>
            <Button>Confirm</Button>
        </div>
    );
}
