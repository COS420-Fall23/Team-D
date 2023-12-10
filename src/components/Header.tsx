import { collection } from "firebase/firestore";
import { useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebaseConfig";
import { ProfileDropdown } from "./ProfileDropdown";
import { LoginButton } from "./LoginButton";

export interface RefreshProp  {
    refresh: boolean;
    setRefresh: (refresh: boolean) => void;
}

export function Header(): JSX.Element {
    const [refresh, setRefresh] = useState(false);
    const [value] = useCollection(collection(db, "User"));

    const FireBaseUser = value?.docs.find(
        (user): boolean => user.data().Email === auth.currentUser?.email
    );
    
    let email = auth.currentUser?.email;
    auth.onAuthStateChanged((user) => {
        if (email !== user?.email) {
            setRefresh(!refresh);
            console.log("refreshing header");
        }
    });

    return (
        <div>
            <header>
                <h1>College Jobs</h1>
                {auth.currentUser ? (
                    <ProfileDropdown
                        refresh={refresh}
                        setRefresh={setRefresh}
                    ></ProfileDropdown>
                ) : (
                    <LoginButton refresh={refresh} setRefresh={setRefresh}></LoginButton>
                )}
            </header>
        </div>
    );
}