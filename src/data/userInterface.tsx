import { JobListing } from "./job_listing";

export interface User {
  id: string;
  FullName: string;
  Email: string;
  phoneNumber: string;
  College: string;
  DOB: string;
  Location: string;
  SavedJobs: Array<JobListing>;
}

// export interface User {
//   //id: string;
//   fullName: string;
//   //Email: string;
//   phoneNumber: string;
//   college: string;
//   dob: string;
//   location: string;
//   saved_jobs: Array<JobListing>;
// }