import { Link } from "react-router-dom";
import { JobListing } from "../data/job_listing";
import { Button } from "react-bootstrap";
import { auth, db } from "../firebaseConfig";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";

export interface ListingViewProps {
  listing: JobListing;
  isSaved: boolean;
}

async function saveJobClick(listing: JobListing): Promise<void> {
  const userEmail = auth.currentUser?.email;
  if (userEmail === null || userEmail === undefined) {
    return;
  }
  const userDoc = doc(db, "User", userEmail);
  const userDocData = await getDoc(userDoc);

  await updateDoc(userDoc, {
    saved_jobs: arrayUnion(listing),
  });
  console.log(userDocData.data()?.saved_jobs);
}

async function unsaveJobClick(listing: JobListing): Promise<void> {
  const userEmail = auth.currentUser?.email;
  if (userEmail === null || userEmail === undefined) {
    return;
  }
  const userDoc = doc(db, "User", userEmail);
  await updateDoc(userDoc, { saved_jobs: arrayRemove(listing) });
}

export function ListingView({
  listing,
  isSaved,
}: ListingViewProps): JSX.Element {
  return (
    <div className="listing">
      <h3>{listing.company}</h3>
      <h4>{listing.title}</h4>
      <p>
        {listing.description.length > 150
          ? listing.description.substring(0, 147) + "..."
          : listing.description}
      </p>
      <Link to={"/listing/" + listing.id}>
        <Button>See More</Button>
      </Link>
      <Link to={listing.url}>
        <Button>Apply</Button>
      </Link>
      <div>
        {!isSaved ? (
          <Button onClick={() => saveJobClick(listing)}>Save</Button>
        ) : (
          <Button variant="danger" onClick={() => unsaveJobClick(listing)}>
            Unsave
          </Button>
        )}
      </div>
    </div>
  );
}
