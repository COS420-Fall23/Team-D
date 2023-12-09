import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { User } from "../data/userInterface";
import { db } from "../firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { signInWithGooglePopup } from "../firebaseConfig";

export interface LoginButtonProp {
  setLoginUser: (setLoginUser: string) => void;
  setLogin: (newLogin: boolean) => void;
}

export function LoginButton(prop: LoginButtonProp): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, CollegtionLoading, CollectionError] = useCollection(
    collection(db, "User")
  );
  let navigate = useNavigate();

  async function loginchecks(): Promise<void> {
    const response = await signInWithGooglePopup();

    const FireBaseUser = value?.docs.find(
      (User): boolean => User.data().Email === response.user.email
    );

    if (FireBaseUser === undefined) {
      navigate("/register");
    } else {
      prop.setLoginUser(FireBaseUser.data().Email);
    }

    prop.setLogin(true);
  }
  return <Button onClick={() => loginchecks()}>Login</Button>;
}
