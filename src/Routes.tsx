import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ListingPage } from "./pages/ListingPage";
import { AccountSettingsPage } from "./pages/AccoutSettingsPage";
import { RegisterPage } from "./pages/RegisterPage";
import { useState } from "react";

export const AppRouter = () => {
  const [isLogedIn, setLogin] = useState(false);
  const [logedinUser, setLoginUser] = useState<string>("");
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              userEmail={logedinUser}
              isLogedIn={isLogedIn}
              setLoginUser={setLoginUser}
              setLogin={setLogin}
            />
          }
        />
        <Route path="/listing/:listingId" element={<ListingPage />} />
        <Route
          path="/settings/:userEmail"
          element={
            <AccountSettingsPage
              logedInUser={logedinUser}
              setLoginUser={setLoginUser}
              setLogin={setLogin}
            />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
};
