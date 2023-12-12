import React from "react";
import { Link } from "react-router-dom";
import { ResourceListing } from "../data/resource_listing";
import { getResourceListings } from "../dummy/resource_listings";
//Main build of the page. will need to be formated to a css file. This shows the listings that it pulls from the other files.

export function ResourcePage(): JSX.Element {
  const listings: ResourceListing[] = getResourceListings();

  if (!listings) {
    console.log("No listings available.");
    // Handle the case where listings is undefined
    return <div>No listings available.</div>;
  }

  return (
    <div id="resource-page">
      <h1>Resource Page</h1>
      <div>
        <Link to="/">Back to Home Page</Link>
      </div>

      {listings.map((listing) => (
        <div key={listing.id}>
          <h2>{listing.company}</h2>
          <p>{listing.description}</p>

          {listing.interviewQuestions && (
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
          )}

          {/* Render Job Security Links if they exist */}
          {listing.jobSecurityLinks && (
            <div>
              <h3>Job Security Links</h3>
              <ul>
                {listing.jobSecurityLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Render Resource Criteria */}
        </div>
      ))}
    </div>
  );
}
