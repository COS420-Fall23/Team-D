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

    public static addListener(state: any, setState: (state: any) => void, id: string) {
        // add listener to array, and overwrite if id already exists
        let localUser = UserSingleton.getInstance();
        let index = localUser.listeners.findIndex((listener) => listener.id === id);
        if (index !== -1) {
            localUser.listeners[index] = { state, setState, id };
            return;
        }
        localUser.listeners.push({ state, setState, id });
    }
    public static removeListener(id: string) {
        let localUser = UserSingleton.getInstance();
        localUser.listeners = localUser.listeners.filter((listener) => listener.id !== id);
    }
    public static notifyListeners() {
        let localUser = UserSingleton.getInstance();
        localUser.listeners.forEach((listener) => {
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
        UserSingleton.notifyListeners();
    }

    public static setField(fieldName: string, field: string) {
        console.log("[userSingleton] setField");
        let localUser = UserSingleton.getInstance();
        switch (fieldName) {
            case "fullName":
                localUser.fullName = field;
                break;
            // email is not allowed to be changed because we are using firebase auth and it is the id
            // case "email": 
            //     localUser.email = field;
            //     break;
            case "phoneNumber":
                localUser.phoneNumber = field;
                break;
            case "college":
                localUser.college = field;
                break;
            case "dob":
                localUser.dob = field;
                break;
            case "location":
                localUser.location = field;
                break;
            default:
                console.log("[userSingleton] setField: invalid field name");
                break;
        }
        UserSingleton.notifyListeners();
    }

    public static setFullName(fullName: string) { UserSingleton.getInstance().fullName = fullName; UserSingleton.notifyListeners(); }
    //public static setEmail(email: string) { UserSingleton.getInstance().email = email; UserSingleton.getInstance().notifyListeners(); }
    public static setPhoneNumber(phoneNumber: string) { UserSingleton.getInstance().phoneNumber = phoneNumber; UserSingleton.notifyListeners(); }
    public static setCollege(college: string) { UserSingleton.getInstance().college = college; UserSingleton.notifyListeners(); }
    public static setDob(dob: string) { UserSingleton.getInstance().dob = dob; UserSingleton.notifyListeners(); }
    public static setLocation(location: string) { UserSingleton.getInstance().location = location; UserSingleton.notifyListeners(); }
    public static setSavedJobs(saved_jobs: Array<JobListing>) { UserSingleton.getInstance().saved_jobs = saved_jobs; UserSingleton.notifyListeners(); }
    public static setSkills(skills: Array<string>) { UserSingleton.getInstance().skills = skills; UserSingleton.notifyListeners(); }
    public static addSavedJob(job: JobListing) { UserSingleton.getInstance().saved_jobs.push(job); UserSingleton.notifyListeners(); }
    public static removeSavedJob(job: JobListing) { UserSingleton.getInstance().saved_jobs = UserSingleton.getInstance().saved_jobs.filter((savedJob) => savedJob !== job); UserSingleton.notifyListeners(); }
    public static addSkill(skill: string) { UserSingleton.getInstance().skills.push(skill); UserSingleton.notifyListeners(); }
    public static removeSkill(skill: string) { UserSingleton.getInstance().skills = UserSingleton.getInstance().skills.filter((savedSkill) => savedSkill !== skill); UserSingleton.notifyListeners(); }

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
        UserSingleton.notifyListeners();
        return user;
    }
}
