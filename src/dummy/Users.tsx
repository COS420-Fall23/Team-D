import { User } from "../data/userInterface";

export function getDummyUsers(): User[] {
  const dummyUsers: User[] = [];

  dummyUsers.push({
    id: -1,
    name: "Kaleb Hannan",
    Email: "kaleb.hannan@maine.edu",
    phoneNumber: "(207)111-9999",
    College: "UMaine Orono",
    DOB: "N/A",
    Location: "Gray",
  });

  dummyUsers.push({
    id: -2,
    name: "Austin Hannan",
    Email: "ahannan@gmail.com",
    phoneNumber: "(207)222-8888",
    College: "CMCC",
    DOB: "N/A",
    Location: "Auburn",
  });

  dummyUsers.push({
    id: -3,
    name: "John Dow",
    Email: "jDow123@gmail.com",
    phoneNumber: "(207)333-7777",
    College: "Harvard",
    DOB: "N/A",
    Location: "Boston",
  });

  return dummyUsers;
}
