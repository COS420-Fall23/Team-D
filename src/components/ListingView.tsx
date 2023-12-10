import { Link } from "react-router-dom";
import { JobListing } from "../data/job_listing";
import { Button } from "react-bootstrap";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebaseConfig";
import { collection } from "firebase/firestore";
import { useState } from "react";

export interface ListingViewProps {
  listing: JobListing;
}

export function ListingView({ listing }: ListingViewProps): JSX.Element {
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const [value] = useCollection(collection(db, "User"));

  const FireBaseUser = value?.docs.find(
    (user): boolean => user.data().Email === auth.currentUser?.email
  );

  FireBaseUser?.data().saved_jobs.forEach((savedjob: JobListing) => {
    if (
      savedjob.company === listing.company &&
      savedjob.title === listing.title &&
      savedjob.location === listing.location &&
      savedjob.description === listing.description
    ) {
      setIsSaved(true);
    }
  });

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
      {isSaved ? (
        <Button variant="danger">Unsave</Button>
      ) : (
        <Button onClick={() => setIsSaved(true)}>Save</Button>
      )}
    </div>
  );
}
