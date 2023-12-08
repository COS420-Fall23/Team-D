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
  let isInDB: boolean = false;
  let DBUser: User;
  async function loginchecks(): Promise<void> {
    await signInWithGoogle();

    value?.docs.map((obj) =>
      obj.data().Email === user?.user.email ? (isInDB = true) : null
    );
    if (isInDB === false) {
      navigate("/register");
    } else {
      value?.docs.map((obj) =>
        obj.data().Email === user?.user.email
          ? (DBUser = {
              id: obj.data().id,
              FirstName: obj.data().FirstName,
              LastName: obj.data().LastName,
              Email: obj.data().Email,
              phoneNumber: obj.data().phoneNumber,
              College: obj.data().College,
              DOB: obj.data().DOB,
              SavedJobs: obj.data().SavedJobs,
            })
          : null
      );
      prop.setLoginUser(DBUser);
    }
    prop.setLogin(true);
  }
  return <Button onClick={() => loginchecks()}>Login</Button>;
}
