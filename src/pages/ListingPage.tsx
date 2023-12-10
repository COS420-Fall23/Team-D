import { Link, useParams } from "react-router-dom";
import { JobListing } from "../data/job_listing";
import { Button, Col, Row } from "react-bootstrap";
import { Header } from "../components/Header";
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
    <div className="listing-page">
      <Header></Header>
      <div className="blue-left">
        <div className="home-button">
          <Link to="/">
            <Button variant="success">Home</Button>
          </Link>
        </div>
      </div>
      <div className="content">
        <h1>{jobListing.company}</h1>
        <h2>{jobListing.title}</h2>
        <p>{jobListing.description}</p>

        <Row>
          <Col>Location</Col>
          <Col>{jobListing.location}</Col>
        </Row>
        <div className="apply-button">
          <a href={jobListing.url}>
            <Button>Apply</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
