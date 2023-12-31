import { useState } from "react";
import { JobList } from "../components/JobList";
import { SearchAndFilter } from "../components/SearchAndFilter";
import { JobListing } from "../data/job_listing";
import { Header } from "../components/Header";

export function HomePage({
  listings,
}: {
  listings: JobListing[];
}): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const filteredListings = listings
    .filter(
      (listing) =>
        searchTerm === "" ||
        listing.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (listing) =>
        filterLocation === "" ||
        listing.location.toLowerCase().includes(filterLocation.toLowerCase())
    );

  return (
    <div>
      <Header></Header>
      
      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterLocation={filterLocation}
        setFilterLocation={setFilterLocation}
      />
      <JobList listings={filteredListings} />
    </div>
  );
}
