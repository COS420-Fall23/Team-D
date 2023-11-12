export type JobCriteriaType =
    | "Location"
    | "Employment Type"
    | "Seniority"
    | "Industry";

export interface JobCriteriaItem {
    field: JobCriteriaType;
    value: string;
}

export interface JobListing {
    id: number;
    company: string;
    title: string;
    description: string;
    criteria: JobCriteriaItem[];
}
