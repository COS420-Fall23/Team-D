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
