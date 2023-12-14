import { useState } from "react";
import { JobListing } from "../data/job_listing";
import { ListingView } from "./ListingView";
import { UserSingleton } from "../data/UserSingleton";

export function JobList({ listings }: { listings: JobListing[] }): JSX.Element {
  const [refresh, setRefresh] = useState(false);

  UserSingleton.addListener(refresh, setRefresh, "JobList");

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
