import { useState } from "react";
import { auth } from "../firebaseConfig";
import { JobList } from "../components/JobList";
import { SearchAndFilter } from "../components/SearchAndFilter";
import { JobListing } from "../data/job_listing";
import { onAuthStateChanged } from "firebase/auth";
import { Header } from "../components/Header";
import MyButtonLink from "../components/MyButtonLink";


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
            console.log("[home] user is signed in");
        } else {
            console.log("[home] user is not signed in");
        }
    });
    
    return (
        <div>
            <Header></Header>
            <h2>
              <div>
                <MyButtonLink to="/resources">Resource Page</MyButtonLink>
              </div>
            </h2>
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
