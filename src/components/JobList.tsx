import { useState } from "react";
import { JobListing } from "../data/job_listing";
import { ListingView } from "./ListingView";

export function JobList({ listings }: { listings: JobListing[] }): JSX.Element {
  const [refresh, setRefresh] = useState(false);
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
