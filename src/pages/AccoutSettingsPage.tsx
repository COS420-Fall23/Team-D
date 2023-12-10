import React from "react";
import { Button } from "react-bootstrap";
//import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { useCollection } from "react-firebase-hooks/firestore";
import { Query, QueryDocumentSnapshot, collection, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { Header } from "../components/Header";

export function AccountSettingsPage(): JSX.Element {
  const [user, setUser] = React.useState(null as QueryDocumentSnapshot | null);

  async function getUser() {
    if (auth.currentUser === null) {
      return;
    }
    const docSnap = await getDoc(doc(db, "User", auth.currentUser?.email as string));
    if (docSnap.exists()) {
      setUser(docSnap);
      console.log("Document data:", docSnap.data());
    }
    //setUser(docSnap.exists() ? docSnap : null);
  }

  getUser();

  return (
    <div>
      <Header></Header>
      <h1>Account Settings</h1>
      {/* <div data-testid="Email">Email {user?.data().Email} </div> */}
      <div data-testid="Email">Email {user !== null ? user.data().email : "Loading..."} </div>
      <div>
        Password <Button>ResetPassword</Button>
      </div>
      {/* <div data-testid="Phone">Phone {user?.data().phoneNumber}</div> */}
      <div data-testid="Phone">Phone {user !== null ? user.data().phoneNumber : "Loading..."}</div>
      <div>Site Filter</div>
      <div>Job Keywords</div>
    </div>
  );
}
