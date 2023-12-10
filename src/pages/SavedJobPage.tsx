import {
  DocumentData,
  DocumentSnapshot,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebaseConfig";
import { JobList } from "../components/JobList";
import { JobListing } from "../data/job_listing";
import { useState } from "react";
import { ListingView } from "../components/ListingView";

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
