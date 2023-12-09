import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { User } from "../data/userInterface";
import { db } from "../firebaseConfig";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { signInWithGooglePopup } from "../firebaseConfig";

export interface LoginButtonProp {
  setLoginUser: (setLoginUser: User) => void;
  setLogin: (newLogin: boolean) => void;
}

export function LoginButton(prop: LoginButtonProp): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [value, CollegtionLoading, CollectionError] = useCollection(
    collection(db, "User")
  );
  let navigate = useNavigate();
  let DBUser: User;

  async function loginchecks(): Promise<void> {
    const response = await signInWithGooglePopup();
    console.log(response.user.uid);

    const FireBaseUser = value?.docs.find(
      (User): boolean => User.data().Email === response.user.email
    );
    value?.docs.map((obj) => console.log("DB Email " + obj.data().Email));
    console.log("Google Email " + response.user.email);
    if (FireBaseUser === undefined) {
      navigate("/register");
    } else {
      DBUser = {
        id: FireBaseUser.data().id,
        FullName: FireBaseUser.data().FullName,
        Email: FireBaseUser.data().Email,
        phoneNumber: FireBaseUser.data().phoneNumber,
        College: FireBaseUser.data().College,
        DOB: FireBaseUser.data().DOB,
        Location: FireBaseUser.data().Location,
        SavedJobs: FireBaseUser.data().SavedJobs,
      };
    }
    prop.setLoginUser(DBUser);

    prop.setLogin(true);
  }
  return <Button onClick={() => loginchecks()}>Login</Button>;
}
