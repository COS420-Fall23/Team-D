import { User } from "../data/userInterface";
import { JobListing } from "../data/job_listing";
import { ListingView } from "../components/ListingView";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebaseConfig";
import { useParams } from "react-router-dom";

export function SavedJobsPage(): JSX.Element {
  const params = useParams();
  const userEmail = params.userEmail;
  const [value] = useCollection(collection(db, "User"));

  const FireBaseUser = value?.docs.find(
    (user): boolean => user.data().Email === userEmail
  );
  const logedInUser: User = {
    id: FireBaseUser?.data().id,
    FullName: FireBaseUser?.data().FullName,
    Email: FireBaseUser?.data().Email,
    phoneNumber: FireBaseUser?.data().phoneNumber,
    College: FireBaseUser?.data().College,
    DOB: FireBaseUser?.data().DOB,
    SavedJobs: FireBaseUser?.data().SavedJobs,
    Location: FireBaseUser?.data().Location,
  };
  return (
    <div>
      {logedInUser.SavedJobs.length === 0 ? (
        <h1>No Saved Jobs</h1>
      ) : (
        logedInUser.SavedJobs.map(
          (listing: JobListing): JSX.Element => (
            <ListingView key={listing.id} listing={listing} />
          )
        )
      )}
    </div>
  );
}
