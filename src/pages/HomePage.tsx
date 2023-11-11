import { ListingView } from "../components/ListingView";
import { LoginButton } from "../components/LoginButton";
import { JobListing } from "../data/job_listing";
import { getDummyJobListings } from "../dummy/job_listing";

export function HomePage(): JSX.Element {
    const dummyListings = getDummyJobListings();

    return (
        <div>
            <h1>College Jobs</h1>
            <LoginButton></LoginButton>

            <div>
                {dummyListings.map(
                    (listing: JobListing): JSX.Element => (
                        <ListingView listing={listing} />
                    )
                )}
            </div>
        </div>
    );
}
