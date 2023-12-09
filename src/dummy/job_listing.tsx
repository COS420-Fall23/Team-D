import { JobListing } from "../data/job_listing";

export function getDummyJobListings(): JobListing[] {
    const dummyListings: JobListing[] = [];

    dummyListings.push({
        id: -1,
        company: "Penobscot Indian Nation",
        title: "Information Technology Manager",
        url: "",
        description:
            "This Information Technology Manger is responsible for the overall planning, organization, and execution of all information technology within the Penobscot Nation. The position will provide and support the maintenance of existing applications and development of new technical solutions for the organization.",
        location: "Indian Island, ME 04468",
    });

    dummyListings.push({
        id: -2,
        company: "VERSANT POWER",
        title: "IT ANALYST I",
        url: "",
        description:
            "The IT Analyst I is an entry-level technical position responsible for providing technology support, triage, configuration, testing and maintenance for the specified applications or services to the designated business owners within Versant Power.",
        location: "Bangor, ME 04401",
    });

    dummyListings.push({
        id: -3,
        company: "Wabanaki Public Health and Wellness",
        title: "Client Computer Support Specialist",
        url: "",
        description:
            "The Computer Client Support Specialist provides technical support and assistance to computer users to include triage, ticket assignment, tier I issue resolution, account management, and systems monitoring. The individual also provides accurate and efficient tier I support for workstations and peripherals issues; recommends hardware; and schedules, receives, stores and distributes software, hardware and equipment according to company policy & procedures and asset tracking.",
        location: "Bangor, ME 04401",
    });

    dummyListings.push({
        id: -4,
        company: "Seth's Tests Inc.",
        title: "Dummy Listing",
        url: "",
        description: "Using this to test search and filter options.",
        location: "Make-believe, Dummy Location",
    });

    return dummyListings;
}
