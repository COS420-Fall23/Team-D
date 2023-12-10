import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ListingPage } from "./pages/ListingPage";
import { AccountSettingsPage } from "./pages/AccoutSettingsPage";
import { RegisterPage } from "./pages/RegisterPage";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { JobListing } from "./data/job_listing";
import { useState } from "react";
import { ResourcePage } from "./pages/ResourcePage";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage listings={[]} />} />
        <Route
          path="/listing/:listingId"
          element={<ListingPage listings={[]} />}
        />
        <Route path="/settings" element={<AccountSettingsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/resources" element={<ResourcePage />} />
      </Routes>
    </Router>
  );
};
