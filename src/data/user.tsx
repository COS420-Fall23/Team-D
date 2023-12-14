import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { UserSingleton } from "./UserSingleton";

async function getDBUser() {
  if (auth.currentUser === null) {
    console.log(
      "[user] getDBUser has been called and user is not signed in. This should be impossible."
    );
    return null;
  }
  console.log("[user] getDBUser !!db query!!");
  const docSnap = await getDoc(
    doc(db, "User", auth.currentUser?.email as string)
  );
  if (docSnap.exists()) {
    console.log("[user] getDBUser db query success");
    return docSnap;
  }
  console.log("[user] getDBUser db query failed");
  return null;
}

auth.onAuthStateChanged(async (user) => {
  console.log("[user] AuthStateChanged");
  let localUser = UserSingleton.getInstance();
  if (user) {
    console.log("[user] user is signed in");
    if (user.email !== localUser.email) {
      console.log("[user] UserSingleton is empty, getting user from db");
      let docSnap = await getDBUser();
      console.log("[user] db call returned");
      if (docSnap) {
        console.log("[user] user is in db");
        // UserSingleton.setUserData(docSnap.data() as User);
        localUser.fullName = docSnap.data().fullName;
        localUser.email = docSnap.data().email;
        localUser.phoneNumber = docSnap.data().phoneNumber;
        localUser.college = docSnap.data().college;
        localUser.dob = docSnap.data().dob;
        localUser.location = docSnap.data().location;
        localUser.saved_jobs = docSnap.data().saved_jobs;
        localUser.skills = docSnap.data().skills;
        console.log("[user] user added to UserSingleton");
        localUser.notifyListeners(); // This is what was missing!
      } else {
        console.log("[user] user is not in db");
        // cannot use react router here because this is not a component
      }
    } else {
      console.log(
        "[user] AuthStateChanged and user is already in UserSingleton"
      );
    }
  } else {
    console.log("[user] user is not signed in");
    if (localUser.email !== "") {
      console.log("[user] userSingleton is not empty, resetting");
      UserSingleton.resetUserData();
    } else {
      console.log("[user] userSingleton is empty");
    }
  }
});

export { UserSingleton };

