import { JobListing } from "../data/job_listing";

export function getDummyJobListings(): JobListing[] {
    const dummyListings: JobListing[] = [];

    dummyListings.push({
        id: -1,
        company: "Penobscot Indian Nation",
        title: "Information Technology Manager",
        description:
            "This Information Technology Manger is responsible for the overall planning, organization, and execution of all information technology within the Penobscot Nation. The position will provide and support the maintenance of existing applications and development of new technical solutions for the organization.",
        criteria: [
            {
                field: "Location",
                value: "Indian Island, ME 04468",
            },
            {
                field: "Employment Type",
                value: "Full-Time",
            },
        ],
    });

    dummyListings.push({
        id: -2,
        company: "VERSANT POWER",
        title: "IT ANALYST I",
        description:
            "The IT Analyst I is an entry-level technical position responsible for providing technology support, triage, configuration, testing and maintenance for the specified applications or services to the designated business owners within Versant Power.",
        criteria: [
            {
                field: "Location",
                value: "Bangor, ME 04401",
            },
            {
                field: "Employment Type",
                value: "Full-Time",
            },
        ],
    });

    dummyListings.push({
        id: -3,
        company: "Wabanaki Public Health and Wellness",
        title: "Client Computer Support Specialist",
        description:
            "The Computer Client Support Specialist provides technical support and assistance to computer users to include triage, ticket assignment, tier I issue resolution, account management, and systems monitoring. The individual also provides accurate and efficient tier I support for workstations and peripherals issues; recommends hardware; and schedules, receives, stores and distributes software, hardware and equipment according to company policy & procedures and asset tracking.",
        criteria: [
            {
                field: "Location",
                value: "Bangor, ME 04401",
            },
            {
                field: "Employment Type",
                value: "Full-Time",
            },
        ],
    });

    return dummyListings;
}
