import { Link, useParams } from "react-router-dom";
import { getDummyJobListings } from "../dummy/job_listing";
import { JobCriteriaItem, JobListing } from "../data/job_listing";
import { Button, Col, Row } from "react-bootstrap";

export function ListingPage(): JSX.Element {
  const params = useParams();
  const listingId = Number(params.listingId);

  const jobListing = getDummyJobListings().find(
    (value: JobListing): boolean => value.id === listingId
  );
  // TODO pull listings from firebase
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
      {jobListing.criteria.map((criteria: JobCriteriaItem): JSX.Element => {
        return (
          <Row>
            <Col>{criteria.field}</Col>
            <Col>{criteria.value}</Col>
          </Row>
        );
      })}
      <a href={jobListing.url}>
        <Button>Apply</Button>
      </a>
    </div>
  );
}
