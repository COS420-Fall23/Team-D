import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { User } from "../data/userInterface";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth, db } from "../firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

export interface LoginButtonProp {
  setLoginUser: (setLoginUser: User) => void;
  setLogin: (newLogin: boolean) => void;
}

export function LoginButton(prop: LoginButtonProp): JSX.Element {
  const [signInWithGoogle, user] = useSignInWithGoogle(auth);
  const [value] = useCollection(collection(db, "User"));
  let navigate = useNavigate();
  let DBUser: User;

  async function loginchecks(): Promise<void> {
    await signInWithGoogle();

    const FireBaseUser = value?.docs.find(
      (User): boolean => User.data().Email === user?.user.email
    );

    if (FireBaseUser === undefined) {
      navigate("/register");
    } else {
      DBUser = {
        id: FireBaseUser.data().id,
        FirstName: FireBaseUser.data().FirstName,
        LastName: FireBaseUser.data().LastName,
        Email: FireBaseUser.data().Email,
        phoneNumber: FireBaseUser.data().phoneNumber,
        College: FireBaseUser.data().College,
        DOB: FireBaseUser.data().DOB,
        SavedJobs: FireBaseUser.data().SavedJobs,
      };
    }
    prop.setLoginUser(DBUser);

    prop.setLogin(true);
  }
  return <Button onClick={() => loginchecks()}>Login</Button>;
}
