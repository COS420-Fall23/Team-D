import React from "react";
import { ResourceListing } from "../data/resource_listing";
import { Link } from "react-router-dom";

//Makes the resource listings a prop

interface ResourceViewProps {
  listings: ResourceListing[];
}

const ResourceView: React.FC<ResourceViewProps> = ({ listings }) => {
  return (
    <div>
      <h1>Resource View</h1>
      {listings.map((listing) => (
        <div key={listing.id}>
          <Link to={`/resources/${listings}`}>
            {listing.company}
            {listing.title}
            {listing.description}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ResourceView;
