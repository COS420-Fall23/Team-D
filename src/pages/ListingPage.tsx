import { Link, useParams } from "react-router-dom";
import { JobListing } from "../data/job_listing";
import { Button, Col, Row } from "react-bootstrap";
export function ListingPage({
    listings,
}: {
    listings: JobListing[];
}): JSX.Element {
  const params = useParams();
  const listingId = Number(params.listingId);

  const jobListing = listings.find(
    (value: JobListing): boolean => value.id === listingId
  );

  if (jobListing === undefined) {
    return <div>Not Found.</div>;
  }

  return (
    <div>
      <header>
        <h1>College Jobs</h1>
        <Link to="/">
          <Button variant="success">Home</Button>
        </Link>
      </header>
      <h1>{jobListing.company}</h1>
      <h2>{jobListing.title}</h2>
      <p>{jobListing.description}</p>
       <Row>
                <Col>Location</Col>
                <Col>{jobListing.location}</Col>
            </Row>
      <a href={jobListing.url}>
        <Button>Apply</Button>
      </a>
    </div>
  );
}
