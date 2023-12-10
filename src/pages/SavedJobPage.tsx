import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebaseConfig";
import { JobListing } from "../data/job_listing";
import { ListingView } from "../components/ListingView";
import { ProfileDropDownButton } from "../components/ProfileDropdown";

export function SavedJobsPage(): JSX.Element {
  const [value] = useCollection(collection(db, "User"));

  const FireBaseUser = value?.docs.find(
    (user): boolean => user.data().Email === auth.currentUser?.email
  );
  const userEmail = auth.currentUser?.email;
  if (
    FireBaseUser === undefined ||
    userEmail === null ||
    userEmail === undefined
  ) {
    return <h1>Error</h1>;
  }
  return (
    <div>
      <header>
        <h1>College Jobs</h1>
        <ProfileDropDownButton></ProfileDropDownButton>
      </header>
      {FireBaseUser.data()?.saved_jobs.length === 0 ? (
        <h1>No Saved Jobs</h1>
      ) : (
        FireBaseUser.data()?.saved_jobs.map((listing: JobListing) => (
          <ListingView listing={listing} isSaved={true}></ListingView>
        ))
      )}
    </div>
  );
}
