import { User } from "../data/userInterface";

export function getDummyUsers(): User[] {
  const dummyUsers: User[] = [];

  // dummyUsers.push({
  //   id: "-1",
  //   FullName: "Kaleb Hannan",
  //   Email: "kaleb.hannan@maine.edu",
  //   phoneNumber: "(207)111-9999",
  //   College: "UMaine Orono",
  //   DOB: "N/A",
  //   SavedJobs: [],
  //   Location: "",
  // });

  // dummyUsers.push({
  //   id: "-2",
  //   FullName: "Austin Hannan",
  //   Email: "ahannan@gmail.com",
  //   phoneNumber: "(207)222-8888",
  //   College: "CMCC",
  //   DOB: "N/A",
  //   SavedJobs: [],
  //   Location: "",
  // });

  // dummyUsers.push({
  //   id: "-3",
  //   FullName: "John Dow",
  //   Email: "jDow123@gmail.com",
  //   phoneNumber: "(207)333-7777",
  //   College: "Harvard",
  //   DOB: "N/A",
  //   SavedJobs: [],
  //   Location: "",
  // });

  dummyUsers.push({
    //id: "-1",
    fullName: "Kaleb Hannan",
    email: "kaleb.hannan@maine.edu",
    phoneNumber: "(207)111-9999",
    college: "UMaine Orono",
    dob: "N/A",
    saved_jobs: [],
    location: "",
  });

  dummyUsers.push({
    //id: "-2",
    fullName: "Austin Hannan",
    email: "ahannan@gmail.com",
    phoneNumber: "(207)222-8888",
    college: "CMCC",
    dob: "N/A",
    saved_jobs: [],
    location: "",
  });

  dummyUsers.push({
    //id: "-3",
    fullName: "John Dow",
    email: "jDow123@gmail.com",
    phoneNumber: "(207)333-7777",
    college: "Harvard",
    dob: "N/A",
    saved_jobs: [],
    location: "",
  });

  return dummyUsers;
}
