import { JobListing } from "../data/job_listing";
import { ListingView } from "./ListingView";

export function JobList({ listings }: { listings: JobListing[] }): JSX.Element {
    return (
        <div className="feedBox">
            {listings.map(
                (listing: JobListing): JSX.Element => (
                    <ListingView key={listing.id} listing={listing} />
                )
            )}
        </div>
    );
}
