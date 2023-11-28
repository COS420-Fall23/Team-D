import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ListingPage } from "./pages/ListingPage";
import { AccountSettingsPage } from "./pages/AccoutSettingsPage";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/listing/:listingId" element={<ListingPage />} />
        <Route path="/settings" element={<AccountSettingsPage />} />
      </Routes>
    </Router>
  );
};
