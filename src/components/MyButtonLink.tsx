import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // Import your styles

const MyButtonLink: React.FC<{ to: string; children: React.ReactNode }> = ({
  to,
  children,
}) => {
  return (
    <Link to={to} className="my-button-link">
      {children}
    </Link>
  );
};

export default MyButtonLink;
