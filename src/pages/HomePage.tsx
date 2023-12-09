import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ListingView } from "../components/ListingView";
import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { JobListing } from "../data/job_listing";
import { getDummyJobListings } from "../dummy/job_listing";
import { auth } from "../firebaseConfig";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { LoginButton } from "../components/LoginButton";

export function HomePage(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterType, setFilterType] = useState("");
  const [refresh, setRefresh] = useState(false);

  const dummyListings = getDummyJobListings()
    .filter(
      (listing) =>
        listing.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        listing.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (listing) =>
        filterLocation === "" || listing.criteria[0].value === filterLocation
    )
    .filter(
      (listing) => filterType === "" || listing.criteria[1].value === filterType
    );

  const logdInUserID = -1;

  const getFilterOptions = (field: string): string[] => {
    const options = new Set<string>();
    getDummyJobListings().forEach((listing) => {
      listing.criteria.forEach((criteria) => {
        if (criteria.field === field) {
          options.add(criteria.value);
        }
      });
    });
    return Array.from(options);
  };
  console.log("home-page load. UserEmail=", auth.currentUser?.email);

  return (
    <div>
      <header>
        <h1>College Jobs</h1>
        {auth.currentUser?.email !== undefined && <ProfileDropDownButton userID={logdInUserID}></ProfileDropDownButton>}
        {/* update refresh state to force rerender when user logs in  */}
        <Button onClick={() => setRefresh(!refresh)}>Refresh</Button>
        {/* pass refresh and setRefresh to */}
        <LoginButton refresh={refresh} setRefresh={setRefresh} ></LoginButton>
      </header>

      <div className="searchAndFilter">
        <Form>
          <Form.Control
            type="text"
            placeholder="Search by company or title"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <Form.Control
            as="select"
            value={filterLocation}
            onChange={(event) => setFilterLocation(event.target.value)}
          >
            <option value="">Filter by Location</option>
            {getFilterOptions("Location").map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </Form.Control>
          <Form.Control
            as="select"
            value={filterType}
            onChange={(event) => setFilterType(event.target.value)}
          >
            <option value="">Filter by Employment Type</option>
            {getFilterOptions("Employment Type").map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </Form.Control>
        </Form>
      </div>

      <div className="feedBox">
        {dummyListings.map(
          (listing: JobListing): JSX.Element => (
            <ListingView key={listing.id} listing={listing} />
          )
        )}
      </div>
    </div>
  );
}
