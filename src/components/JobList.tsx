import { useState } from "react";
import { JobListing } from "../data/job_listing";
import { ListingView } from "./ListingView";
import { UserSingleton, waitForUser } from "../data/user";
import { auth } from "../firebaseConfig";

export function JobList({ listings }: { listings: JobListing[] }): JSX.Element {
  const [refresh, setRefresh] = useState(false);

  waitForUser(UserSingleton.getInstance(), refresh, setRefresh, "JobList");

  auth.onAuthStateChanged((user) => {
    waitForUser(UserSingleton.getInstance(), refresh, setRefresh, "JobList");
  });

  return (
    <div className="feedBox">
      {listings.map(
        (listing: JobListing): JSX.Element => (
          <ListingView
            key={listing.id}
            listing={listing}
            isSaved={false}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        )
      )}
    </div>
  );
}
