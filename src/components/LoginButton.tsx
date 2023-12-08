import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { User } from "firebase/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";

export interface LoginButtonProp {
    logedinUser: User;
    isLogedin : boolean
}

export function LoginButton({logedinUser, isLogedin}: LoginButtonProp): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);

  function loginchecks(): void {
    signInWithGoogle();
    if(/*user?.user.email is Not DB*/){
        //Rount to Registration page 
    }
    else{
        //get User from DB 
        let DBUser;
        logedinUser.setLoginUser(DBUser);
    }
    isLogedin.setLogin(true);
  }
  return <Button onClick={() => loginchecks()}>Login</Button>;
}