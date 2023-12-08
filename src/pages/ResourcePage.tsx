import React from "react";
import { Link } from "react-router-dom";
import { ResourceListing } from "../data/resource_listing";
import { getDummyResourceListings } from "../dummy/resource_listings";

//Main build of the page. will need to be formated to a css file. This shows the listings that it pulls from the other files.

export function ResourcePage(): JSX.Element {
  const dummyListings: ResourceListing[] = getDummyResourceListings();

  if (!dummyListings) {
    // Handle the case where dummyListings is undefined
    return <div>No listings available.</div>;
  }

  return (
    <div>
      <h1>Resource Page</h1>
      <div>
        <Link to="/">Back to Home Page</Link>
      </div>

      {dummyListings.map((listing) => (
        <div key={listing.id}>
          <div>
            <h3>Helpful Interview Questions</h3>
            <ul>
              {listing.interviewQuestions.map((question, index) => (
                <li key={index}>
                  <a
                    href={question.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {question.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Job Security Links</h3>
            <ul>
              {listing.jobSecurityLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} target="_blank" rel="noopener noreferrer">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <h3>Resource Criteria</h3>
          <ul>
            {listing.criteria.map((criteria, index) => (
              <li key={index}>
                {criteria.field}: {criteria.value}
              </li>
            ))}
          </ul>

          <hr />
        </div>
      ))}
    </div>
  );
}
