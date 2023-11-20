import { Button } from "react-bootstrap";
import { ListingView } from "../components/ListingView";
import { ProfileDropDownButton } from "../components/ProfileDropdown";
import { JobListing } from "../data/job_listing";
import { getDummyJobListings } from "../dummy/job_listing";
import { auth } from "../firebaseConfig";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

export function HomePage(): JSX.Element {
  const dummyListings = getDummyJobListings();
  const logdInUserID = -1;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <div>
      <header>
        <h1>College Jobs</h1>
        <ProfileDropDownButton userID={logdInUserID}></ProfileDropDownButton>
        <Button onClick={() => signInWithGoogle()}>Login</Button>
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
