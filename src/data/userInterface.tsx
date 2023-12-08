import { JobListing } from "./job_listing";

export interface User {
  id: string;
  FirstName: string;
  LastName: string;
  Email: string;
  phoneNumber: string;
  College: string;
  DOB: string;
  SavedJobs: Array<JobListing>;
}
