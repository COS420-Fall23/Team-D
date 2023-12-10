import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ListingView } from "../components/ListingView";
import { JobListing } from "../data/job_listing";
import { getDummyJobListings } from "../dummy/job_listing";
import { LoginButton } from "../components/LoginButton";
import { auth } from "../firebaseConfig";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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
      <div>
        <Link to="/resources">
          <Button>Resource Page</Button>
        </Link>
      </div>

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
