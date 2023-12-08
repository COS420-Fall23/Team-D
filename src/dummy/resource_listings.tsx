import {
  ResourceCriteriaType,
  ResourceListing,
} from "../data/resource_listing";

//function to list the resource listings that go to view and post on the resource page

export function getDummyResourceListings(): ResourceListing[] {
  const dummyListings: ResourceListing[] = [];

  dummyListings.push({
    id: 1,
    company: "Computer Science helpful websites",
    title: "Common interview questions and helpful Site",
    description:
      "Common technical interview questions and answers you can review to better yourself.",
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
    jobSecurityLinks: [
      {
        title: "Indeed IT Job Security tips",
        link: "https://uk.indeed.com/career-advice/finding-a-job/it-job-security",
      },
      {
        title: "Job Security for Developers",
        link: "https://simpleprogrammer.com/job-security-software-developers/",
      },
    ],
    //the critera might not be needed in all honesty
    criteria: [
      { field: ResourceCriteriaType.Location, value: "Some Location near you" },
      { field: ResourceCriteriaType.EmploymentType, value: "Part-time" },
      // Add more criteria as needed
    ],
  });

  dummyListings.push({
    id: 2,
    company: "Freelance work",
    title: "Developer/IT Remote",
    description: "Interview tips for remote work along with job security tips",
    interviewQuestions: [
      {
        title: "Linked In ralent Blog",
        link: "https://www.linkedin.com/business/talent/blog/talent-acquisition/interview-questions-for-remote-positions",
      },
      {
        title: "upwork",
        link: "https://www.upwork.com/resources/remote-interview-questions",
      },
    ],
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
    //the critera might not be needed in all honesty
    criteria: [
      { field: ResourceCriteriaType.Location, value: "At Home" },
      {
        field: ResourceCriteriaType.EmploymentType,
        value: "Contract, full-time",
      },
      // Add more criteria as needed
    ],
  });

  // Changed from a dummy listing to actual listings

  return dummyListings;
}
