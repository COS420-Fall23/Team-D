import { useState } from "react";
import { auth } from "../firebaseConfig";
import { JobList } from "../components/JobList";
import { SearchAndFilter } from "../components/SearchAndFilter";
import { JobListing } from "../data/job_listing";
import { HomeProfileDropDownButton } from "../components/HomePageProfileDropdown";
import { LoginButton } from "../components/LoginButton";

export function HomePage({
  listings,
}: {
  listings: JobListing[];
}): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [refresh, setRefresh] = useState(false);

  const dummyListings = listings
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
      <header>
        <h1>College Jobs</h1>
        {auth.currentUser ? (
          <HomeProfileDropDownButton
            refresh={refresh}
            setRefresh={setRefresh}
          ></HomeProfileDropDownButton>
        ) : (
          <LoginButton refresh={refresh} setRefresh={setRefresh}></LoginButton>
        )}
      </header>

      <SearchAndFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        filterLocation={filterLocation}
        setFilterLocation={setFilterLocation}
      />

      <JobList listings={dummyListings} />
    </div>
  );
}
