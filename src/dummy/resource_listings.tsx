import { ResourceListing } from "../data/resource_listing";

//function to list the resource listings that go to view and post on the resource page

export function getResourceListings(): ResourceListing[] {
  const listings: ResourceListing[] = [];

  // Listing with only interview questions
  listings.push({
    id: 1,
    company: "",
    title: "",
    description: "",
    interviewQuestions: [
      {
        title: "Link to indeed career guid page",
        link: "https://www.indeed.com/career-advice/interviewing/common-technical-interview-questions-and-answers",
      },
      {
        title: "geeksforgeeks",
        link: "https://www.geeksforgeeks.org/",
      },
    ],
    criteria: [],
  });

  // Listing with only job security links
  listings.push({
    id: 2,
    company: "",
    title: "Developer/IT Remote",
    description: "",
    jobSecurityLinks: [
      {
        title: "NCDIT",
        link: "https://it.nc.gov/resources/online-safety-privacy/tips-guidance/cybersecurity-while-working-remotely",
      },
      {
        title: "Navigate Remote Work Security",
        link: "https://www.linkedin.com/pulse/navigating-remote-work-security-challenges-solutions-isogent/",
      },
    ],
    criteria: [],
  });

  return listings;
}
