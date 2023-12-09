import { useState } from "react";
import { Button } from "react-bootstrap";
import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { auth } from "../firebaseConfig";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { JobList } from "../components/JobList";
import { SearchAndFilter } from "../components/SearchAndFilter";
import { JobListing } from "../data/job_listing";

export function HomePage({
    listings,
}: {
    listings: JobListing[];
}): JSX.Element {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterLocation, setFilterLocation] = useState("");

    const dummyListings = listings
        .filter(
            (listing) =>
                searchTerm === "" ||
                listing.company
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                listing.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter(
            (listing) =>
                filterLocation === "" ||
                listing.location
                    .toLowerCase()
                    .includes(filterLocation.toLowerCase())
        );

    const logdInUserID = -1;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <div>
            <header>
                <h1>College Jobs</h1>
                <ProfileDropDownButton
                    userID={logdInUserID}
                ></ProfileDropDownButton>
                <Button onClick={() => signInWithGoogle()}>Login</Button>
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
