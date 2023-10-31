import { JobListing } from "../data/job_listing";
import {
    ListingCache,
    cacheAddJobListing,
    cacheGetJobListing,
    createListingCache,
} from "../data/listing_cache";
import { getDummyJobListings } from "../dummy/job_listing";

describe("Test listing cache", () => {
    const dummyListings: JobListing[] = getDummyJobListings();

    test("Cache creation and import", () => {
        const cache: ListingCache = createListingCache(2);

        cacheAddJobListing(cache, dummyListings[0]);

        expect(cacheGetJobListing(cache, dummyListings[0].id)).toEqual(
            dummyListings[0]
        );
    });

    test("Cache filling and emptying", () => {
        const cache: ListingCache = createListingCache(2);

        cacheAddJobListing(cache, dummyListings[0]);
        cacheAddJobListing(cache, dummyListings[1]);
        cacheAddJobListing(cache, dummyListings[2]);

        expect(cache.cachedListings.size).toEqual(2);
        expect(cacheGetJobListing(cache, dummyListings[0].id)).toBeNull();
    });

    test("Cache properly disposes of oldest entry", () => {
        const cache: ListingCache = createListingCache(2);

        cacheAddJobListing(cache, dummyListings[0]);
        cacheAddJobListing(cache, dummyListings[1]);
        // Reaches max capacity
        // Reference ID of job listing 0, so it moves to front of age log
        cacheGetJobListing(cache, dummyListings[0].id);
        // Then go over the limit
        cacheAddJobListing(cache, dummyListings[2]);

        // Jobs in the cache should be 0 and 2
        expect(cacheGetJobListing(cache, dummyListings[0].id)).toEqual(
            dummyListings[0]
        );
        expect(cacheGetJobListing(cache, dummyListings[1].id)).toBeNull();
        expect(cacheGetJobListing(cache, dummyListings[2].id)).toEqual(
            dummyListings[2]
        );
    });
});
