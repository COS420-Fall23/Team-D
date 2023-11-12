import { ListingView } from "../components/ListingView";
import { LoginButton } from "../components/LoginButton";
import { JobListing } from "../data/job_listing";
import { getDummyJobListings } from "../dummy/job_listing";

export function HomePage(): JSX.Element {
    const dummyListings = getDummyJobListings();

    return (
        <div>
            <header>
                <h1>College Jobs</h1>
                <LoginButton></LoginButton>
            </header>

            <div className="feedBox">
                {dummyListings.map(
                    (listing: JobListing): JSX.Element => (
                        <ListingView key={listing.id} listing={listing} />
                    )
                )}
            </div>
        </div>
    );
}
