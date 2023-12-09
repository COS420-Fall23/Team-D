import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ListingPage } from "./pages/ListingPage";
import { AccountSettingsPage } from "./pages/AccoutSettingsPage";
import { RegisterPage } from "./pages/RegisterPage";
import { SavedJobsPage } from "./pages/SavedJobPage";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing/:listingId" element={<ListingPage />} />
        <Route path="/settings/:userEmail" element={<AccountSettingsPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/savedJobs/:userEmail" element={<SavedJobsPage />} />
      </Routes>
    </Router>
  );
};
