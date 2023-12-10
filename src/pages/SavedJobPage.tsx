import { collection, doc, getDocs } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebaseConfig";
import { JobList } from "../components/JobList";
import { JobListing } from "../data/job_listing";
import { useState } from "react";

export function SavedJobsPage(): JSX.Element {
  const [value] = useCollection(collection(db, "User"));
  const [stateListings, setStateListings] = useState<JobListing[]>([]);

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

  const userDoc = doc(db, "User", userEmail);

  if (stateListings.length === 0) {
    const query = getDocs(collection(userDoc, "saved_jobs"));

    const listings: JobListing[] = [];
    query.then((snapshot) => {
      snapshot.forEach((doc) => {
        listings.push({
          id: doc.get("id"),
          url: doc.get("url"),
          company: doc.get("company"),
          title: doc.get("title"),
          description: doc.get("description"),
          location: doc.get("location"),
        });
        setStateListings(listings);
      });
    });
  }

  return (
    <div>
      {stateListings.length === 0 ? (
        <h1>No Saved Jobs</h1>
      ) : (
        <JobList listings={stateListings}></JobList>
      )}
    </div>
  );
}
