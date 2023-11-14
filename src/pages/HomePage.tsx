import { ListingView } from "../components/ListingView";
import { LoginButton } from "../components/LoginButton";
import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { JobListing } from "../data/job_listing";
import { getDummyJobListings } from "../dummy/job_listing";

export function HomePage(): JSX.Element {
  const dummyListings = getDummyJobListings();
  const logdInUserID = -1;

  return (
    <div>
      <header>
        <h1>College Jobs</h1>
        <ProfileDropDownButton userID={logdInUserID}></ProfileDropDownButton>
        <LoginButton></LoginButton>
      </header>

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
