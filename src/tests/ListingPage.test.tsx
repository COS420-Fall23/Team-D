import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { ListingPage } from "../pages/ListingPage";
import { getDummyJobListings } from "../dummy/job_listing";

describe("ListingPage", () => {
  test("renders job listing details correctly", () => {
    const jobListings = getDummyJobListings();
    const listingId = -1;
    const jobListing = jobListings.find((listing) => listing.id === listingId);
    if (jobListing === undefined) throw new Error("Job listing not found");

    render(
      <MemoryRouter initialEntries={[`/listing/${listingId}`]}>
        <Routes>
          <Route path="/listing/:listingId" element={<ListingPage listings={jobListings} />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(jobListing.company)).toBeInTheDocument();
    expect(screen.getByText(jobListing.title)).toBeInTheDocument();
    expect(screen.getByText(jobListing.description)).toBeInTheDocument();
    expect(screen.getByText(jobListing.location)).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "Apply" })).toHaveAttribute(
      "href",
      jobListing.url
    );
  });

  test("renders 'Not Found' when job listing is not found", () => {
    const listingId = 999; // Assuming this listing ID does not exist
    render(
      <MemoryRouter initialEntries={[`/listing/${listingId}`]}>
        <Routes>
          <Route path="/listing/:listingId" element={<ListingPage listings={jobListings} />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText("Not Found.")).toBeInTheDocument();
  });
});
