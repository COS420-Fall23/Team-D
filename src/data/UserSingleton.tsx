import { JobListing } from "./job_listing";
import { User } from "./userInterface";

export interface StateListener {
    state: boolean;
    setState: (state: any) => void;
    id: string;
}

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

    listeners: Array<StateListener> = [];

    public addListener(state: any, setState: (state: any) => void, id: string) {
        // add listener to array, and overwrite if id already exists
        let index = this.listeners.findIndex((listener) => listener.id === id);
        if (index !== -1) {
            this.listeners[index] = { state, setState, id };
            return;
        }
        this.listeners.push({ state, setState, id });
    }
    public removeListener(id: string) {
        this.listeners = this.listeners.filter((listener) => listener.id !== id);
    }
    public notifyListeners() {
        this.listeners.forEach((listener) => {
            console.log("[userSingleton] notifying listener " + listener.id);
            listener.setState(!listener.state);
        });
    }

    private static instance: UserSingleton;
    private constructor() {}

    public static getInstance(): UserSingleton {
        if (!UserSingleton.instance) {
            UserSingleton.instance = new UserSingleton();
        }

        return UserSingleton.instance;
    }

    public static getUserData(): User {
        console.log("[userSingleton] getUserData");
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
        return user;
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
        localUser.notifyListeners();
    }

    public static resetUserData(): User {
        console.log("[userSingleton] resetUserData");
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
        localUser.notifyListeners();
        return user;
    }
}
