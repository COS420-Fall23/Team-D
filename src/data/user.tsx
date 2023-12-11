import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebaseConfig";
import { JobListing } from "./job_listing";
import { User } from "./userInterface";

export function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function waitForUser(
  user: User,
  refresh: boolean,
  setRefresh: (refresh: boolean) => void,
  calledFrom: string = "",
  lateRefresh: boolean = true
) {
  await delay(100);
  let count = 0;
  if (user.email !== "") {
    console.log(
      `[waitForUser${
        calledFrom !== "" ? ` <- ${calledFrom}` : ""
      }] user is already ready`
    );
    return;
  }
  while (auth.currentUser === null) {
    if (count > 10) {
      console.log(
        `[waitForUser${
          calledFrom !== "" ? ` <- ${calledFrom}` : ""
        }] user is not logged in`
      );
      if (lateRefresh) {
        setRefresh(!refresh);
      }
      //setRefresh(!refresh);
      return;
    }
    count++;
    console.log(
      `[waitForUser${
        calledFrom !== "" ? ` <- ${calledFrom}` : ""
      }] waiting for user`
    );
    await delay(100);
  }
  while (user.email === "") {
    if (count > 10) {
      console.log(
        `[waitForUser${
          calledFrom !== "" ? ` <- ${calledFrom}` : ""
        }] user is not logged in`
      );
      if (lateRefresh) {
        setRefresh(!refresh);
      }
      //setRefresh(!refresh);
      return;
    }
    count++;
    console.log(
      `[waitForUser${
        calledFrom !== "" ? ` <- ${calledFrom}` : ""
      }] waiting for user data`
    );
    await delay(100);
  }
  console.log(
    `[waitForUser${calledFrom !== "" ? ` <- ${calledFrom}` : ""}] user is ready`
  );
  setRefresh(!refresh);
}

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
  if (user) {
    console.log("[user] user is signed in");
    let localUser = UserSingleton.getInstance();
    if (user.email !== localUser.email) {
      let docSnap = await getDBUser();
      if (docSnap) {
        // UserSingleton.setUserData(docSnap.data() as User);
        localUser.fullName = docSnap.data().fullName;
        localUser.email = docSnap.data().email;
        localUser.phoneNumber = docSnap.data().phoneNumber;
        localUser.college = docSnap.data().college;
        localUser.dob = docSnap.data().dob;
        localUser.location = docSnap.data().location;
        localUser.saved_jobs = docSnap.data().saved_jobs;
        localUser.skills = docSnap.data().skills;
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
    console.log("[user] user is not signed in, resetting signleton");
    UserSingleton.resetUserData();
  }
});

export class UserSingleton implements User {
  //id: string = "";
  fullName: string = "";
  email: string = "";
  phoneNumber: string = "";
  college: string = "";
  dob: string = "";
  location: string = "";
  saved_jobs: Array<JobListing> = [];
  skills: Array<string> = [];

  private static instance: UserSingleton;
  private constructor() {}

  public static getInstance(): UserSingleton {
    if (!UserSingleton.instance) {
      UserSingleton.instance = new UserSingleton();
    }

    return UserSingleton.instance;
  }

  public static setUserData(user: User) {
    console.log("[userSingleton] setUserData" + user.email);
    let localUser = UserSingleton.getInstance();
    localUser.fullName = user.fullName;
    localUser.email = user.email;
    localUser.phoneNumber = user.phoneNumber;
    localUser.college = user.college;
    localUser.dob = user.dob;
    localUser.location = user.location;
    localUser.saved_jobs = user.saved_jobs;
    localUser.skills = user.skills;
  }

  public static resetUserData(): User {
    let localUser = UserSingleton.getInstance();
    let user: User = {
      fullName: localUser.fullName,
      email: localUser.email,
      phoneNumber: localUser.phoneNumber,
      college: localUser.college,
      dob: localUser.dob,
      location: localUser.location,
      saved_jobs: localUser.saved_jobs,
      skills: localUser.skills,
    };
    localUser.fullName = "";
    localUser.email = "";
    localUser.phoneNumber = "";
    localUser.college = "";
    localUser.dob = "";
    localUser.location = "";
    localUser.saved_jobs = [];
    localUser.skills = [];
    return user;
  }
}
