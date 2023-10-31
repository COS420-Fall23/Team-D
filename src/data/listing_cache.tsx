import { JobListing } from "./job_listing";

export interface ListingCache {
    cachedListings: Map<number, JobListing>;
    ageLog: number[];
    maxCache: number;
}

export function createListingCache(maxCache: number): ListingCache {
    return { cachedListings: new Map(), ageLog: [], maxCache: maxCache };
}

export function cacheGetJobListing(
    cache: ListingCache,
    id: number
): JobListing | null {
    const result = cache.cachedListings.get(id);
    if (result != null) {
        // Update age log
        cache.ageLog.splice(cache.ageLog.indexOf(id), 1);
        cache.ageLog.splice(0, 0, id);
    }
    return result === undefined ? null : result;
}

export function cacheAddJobListing(cache: ListingCache, listing: JobListing) {
    cache.cachedListings.set(listing.id, listing);
    cache.ageLog.splice(0, 0, listing.id);
    if (cache.ageLog.length > cache.maxCache) {
        const toBeRemoved = cache.ageLog[cache.maxCache];
        cache.cachedListings.delete(toBeRemoved);
        cache.ageLog.splice(cache.maxCache, 1);
    }
}
