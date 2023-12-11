//componet data necissary to ensure the code works.
export enum ResourceCriteriaType {
  Location = "Location",
  EmploymentType = "Employment Type",
  Seniority = "Seniority",
  Industry = "Industry",
}

export interface ResourceCriteriaItem {
  field: ResourceCriteriaType;
  value: string;
}

export interface InterviewQuestion {
  title: string;
  link: string;
}

export interface JobSecurityLink {
  title: string;
  link: string;
}

export interface ResourceListing {
  id: number;
  company: string;
  title: string;
  description: string;
  criteria: ResourceCriteriaItem[];
  interviewQuestions: InterviewQuestion[];
  jobSecurityLinks: JobSecurityLink[];
}
