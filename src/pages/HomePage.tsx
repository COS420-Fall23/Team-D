import { useState } from "react";
import { Button } from "react-bootstrap";
import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { getDummyJobListings } from "../dummy/job_listing";
import { auth } from "../firebaseConfig";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { JobList } from "../components/JobList";
import { SearchAndFilter } from "../components/SearchAndFilter";

export function HomePage(): JSX.Element {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterLocation, setFilterLocation] = useState("");

    const dummyListings = getDummyJobListings()
        .filter(
            (listing) =>
                listing.company
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                listing.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .filter((listing) =>
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
