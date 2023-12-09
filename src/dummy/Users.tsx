import { User } from "../data/userInterface";

export function getDummyUsers(): User[] {
  const dummyUsers: User[] = [];

  dummyUsers.push({
    id: "-1",
    FirstName: "Kaleb",
    LastName: "Hannan",
    Email: "kaleb.hannan@maine.edu",
    phoneNumber: "(207)111-9999",
    College: "UMaine Orono",
    DOB: "N/A",
    SavedJobs: [],
    Location: "",
  });

  dummyUsers.push({
    id: "-2",
    FirstName: "Austin",
    LastName: "Hannan",
    Email: "ahannan@gmail.com",
    phoneNumber: "(207)222-8888",
    College: "CMCC",
    DOB: "N/A",
    SavedJobs: [],
    Location: "",
  });

  dummyUsers.push({
    id: "-3",
    FirstName: "John",
    LastName: "Dow",
    Email: "jDow123@gmail.com",
    phoneNumber: "(207)333-7777",
    College: "Harvard",
    DOB: "N/A",
    SavedJobs: [],
    Location: "",
  });

  return dummyUsers;
}
