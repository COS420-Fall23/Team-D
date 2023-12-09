// Uses firebase/auth to sign in with Google. This is a button that will be used in the header of the page. The button should be disabled if the user is already logged in. The button should be enabled if the user is not logged in. When the button is clicked, the user should be prompted to sign in with Google. If the user is already logged in, the button should not do anything. The button should be styled using Bootstrap. The button should be named "Login".

import { Button } from "react-bootstrap";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "../firebaseConfig";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";

export function LoginButton(): JSX.Element {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const provider = new GoogleAuthProvider();
    const [value, loading, error] = useCollection( collection(db, "users") );
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        

        signInWithPopup(auth, provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            if (credential === null) {
                throw new Error("credential is null");
            }
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // check if user exists in database
            // if not, redirect to register page
            
            const firebaseUser = value?.docs.find((doc) => doc.data().email === user.email);
            if (firebaseUser === undefined) {
                console.log("user not found in database");
                // redirect to register page
                
                navigate("/register");
            }
            console.log(firebaseUser);
            console.log("user signed in");
            console.log(user);
            console.log(user.email);

        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            console.log("error signing in");
            console.log(errorCode, errorMessage, email, credential);
        });
    }

    return (
        <Button onClick={() => signInWithGoogle()}>Login</Button>
    );
}