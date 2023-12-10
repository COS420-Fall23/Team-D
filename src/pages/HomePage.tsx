import { useState } from "react";
import { auth } from "../firebaseConfig";
import { JobList } from "../components/JobList";
import { SearchAndFilter } from "../components/SearchAndFilter";
import { JobListing } from "../data/job_listing";
import { LoginButton } from "../components/LoginButton";
import { onAuthStateChanged } from "firebase/auth";
import { Header } from "../components/Header";

export function HomePage({
    listings,
}: {
    listings: JobListing[];
}): JSX.Element {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterLocation, setFilterLocation] = useState("");
    //const [refresh, setRefresh] = useState(false);

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
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log("user is signed in");
        } else {
            console.log("user is not signed in");
        }
    });
    
    return (
        <div>
            <Header></Header>
            
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
