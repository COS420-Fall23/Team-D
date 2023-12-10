import { Link } from "react-router-dom";
import { JobListing } from "../data/job_listing";
import { Button } from "react-bootstrap";

export interface ListingViewProps {
  listing: JobListing;
}

export function ListingView({ listing }: ListingViewProps): JSX.Element {
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
    </div>
  );
}
