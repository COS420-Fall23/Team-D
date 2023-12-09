import { useParams } from "react-router-dom";
import { getDummyJobListings } from "../dummy/job_listing";
import { JobListing } from "../data/job_listing";
import { Col, Row } from "react-bootstrap";

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
            <h1>{jobListing.company}</h1>
            <h2>{jobListing.title}</h2>
            <p>{jobListing.description}</p>
            <Row>
                <Col>Location</Col>
                <Col>{jobListing.location}</Col>
            </Row>
        </div>
    );
}
