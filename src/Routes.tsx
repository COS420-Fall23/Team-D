import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ListingPage } from "./pages/ListingPage";
import { AccountSettingsPage } from "./pages/AccoutSettingsPage";
import { RegisterPage } from "./pages/RegisterPage";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { JobListing } from "./data/job_listing";
import { useState } from "react";

export const AppRouter = () => {
    const [stateListings, setStateListings] = useState<JobListing[]>([]);
    if (stateListings.length === 0) {
        const query = getDocs(collection(db, "JobListing"));

        const listings: JobListing[] = [];
        query.then((snapshot) => {
            snapshot.forEach((doc) => {
                listings.push({
                    id: doc.get("id"),
                    url: doc.get("url"),
                    company: doc.get("company"),
                    title: doc.get("title"),
                    description: doc.get("description"),
                    location: doc.get("location"),
                });
                setStateListings(listings);
            });
        });
    }

    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<HomePage listings={stateListings} />}
                />
                <Route
                    path="/listing/:listingId"
                    element={<ListingPage listings={stateListings} />}
                />
                <Route path="/settings" element={<AccountSettingsPage />} />
                <Route path="/register" element={<RegisterPage />} />
            </Routes>
        </Router>
    );
};
