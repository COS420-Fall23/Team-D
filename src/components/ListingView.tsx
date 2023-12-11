import { Link } from "react-router-dom";
import { JobListing } from "../data/job_listing";
import { Button, Alert } from "react-bootstrap";
import { auth, db } from "../firebaseConfig";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { UserSingleton } from "../data/user";

export interface ListingViewProps {
  listing: JobListing;
  //flag so I can use the component on the saved jobs page and the Home page
  isSaved: boolean;
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}

//Button click to save a job to the user's profile
async function saveJobClick(
  listing: JobListing,
  setShow: (show: boolean) => void
): Promise<void> {
  const userEmail = auth.currentUser?.email;
  const user = UserSingleton.getInstance();
  if (userEmail === null || userEmail === undefined) {
    return;
  }
  const userDoc = doc(db, "User", userEmail);
  const userDocData = await getDoc(userDoc);

  await updateDoc(userDoc, {
    saved_jobs: arrayUnion(listing),
  });
  user.saved_jobs.push(listing);
  console.log(userDocData.data()?.saved_jobs);
  setShow(true);
}

//Button click to unsave a job from a user profile
async function unsaveJobClick(
  listing: JobListing,
  setRefresh: (show: boolean) => void,
  refresh: boolean
): Promise<void> {
  const user = UserSingleton.getInstance();
  const userEmail = auth.currentUser?.email;
  if (userEmail === null || userEmail === undefined) {
    return;
  }
  const userDoc = doc(db, "User", userEmail);

  await updateDoc(userDoc, { saved_jobs: arrayRemove(listing) });

  user.saved_jobs = user.saved_jobs.filter((job) => job !== listing);
  setRefresh(!refresh);
}

export function ListingView({
  listing,
  isSaved,
  refresh,
  setRefresh,
}: ListingViewProps): JSX.Element {
  const [show, setShow] = useState(false);
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
        <Alert
          show={show}
          variant="info"
          onClose={() => setShow(false)}
          dismissible
        >
          <Alert.Heading>Job Saved</Alert.Heading>
        </Alert>
        {auth.currentUser ? (
          !isSaved ? (
            <Button onClick={() => saveJobClick(listing, setShow)}>Save</Button>
          ) : (
            <Button
              variant="danger"
              onClick={() => unsaveJobClick(listing, setRefresh, refresh)}
            >
              Unsave
            </Button>
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
