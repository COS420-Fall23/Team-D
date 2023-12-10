import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ListingView } from "../components/ListingView";
import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { JobListing } from "../data/job_listing";
import { getDummyJobListings } from "../dummy/job_listing";
import { auth } from "../firebaseConfig";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";

export function HomePage(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLocation, setFilterLocation] = useState("");
  const [filterType, setFilterType] = useState("");

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

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

  return (
    <div>
      <header>
        <h1>College Jobs</h1>
        <ProfileDropDownButton userID={logdInUserID}></ProfileDropDownButton>
        <Button onClick={() => signInWithGoogle()}>Login</Button>
      </header>
      <div>
        <Link to="/resources">
          <Button>Resource Page</Button>
        </Link>
      </div>

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
