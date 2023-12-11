// Uses firebase/auth to sign in with Google. This is a button that will be used in the header of the page. The button should be disabled if the user is already logged in. The button should be enabled if the user is not logged in. When the button is clicked, the user should be prompted to sign in with Google. If the user is already logged in, the button should not do anything. The button should be styled using Bootstrap. The button should be named "Login".

import { Button } from "react-bootstrap";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { RefreshProp } from "./Header";

export function LoginButton(prop: RefreshProp): JSX.Element {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [value, loading, error] = useCollection( collection(db, "User") );
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential === null) {
                throw new Error("credential is null");
            }

            // The signed-in user info.
            const gAuthUser = result.user;

            // check if user exists in database
            // if not, redirect to register page 
            const firebaseUser = value?.docs.find((doc) => doc.id === gAuthUser.email);
            console.log("[loginButton] !!db query!!")
            if (firebaseUser === undefined) {
                console.log("[loginButton] user not found in database");                    
                navigate("/register");
            }
            else {
                // refresh header if user is found in database
                console.log("[loginButton] user found in database");
                prop.setRefresh(!prop.refresh);
            }

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log("[loginButton] error signing in"); // DEBUG 
            console.log(errorCode, errorMessage, email, credential); // DEBUG
        });
    }

    return (
        <Button onClick={() => signInWithGoogle()}>Login</Button>
    );
}