import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import Hub from "./pages/Hub";
import Profile from "./pages/Profile";
import DetailedListingView from "./pages/DetailedListingView";
import SavedListings from "./pages/SavedListings";
import Favourites from "./pages/Favourites";

import RequireAuth from "./pages/util/AuthWrapper";

import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateListing from "./pages/CreateListing";

import NoPage from "./pages/NoPage";
import Logout from "./pages/util/Logout";
import VerifyingEmail from "./pages/util/VerifyEmail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/register" element={<Register />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hub" element={<Hub />} />
      <Route path="/verify-email" element={<VerifyingEmail />} />
      <Route path="/listing/:id" element={<DetailedListingView />} />

      <Route
        path="/create-listing"
        element={
          <RequireAuth>
            <CreateListing />
          </RequireAuth>
        }
      />
      <Route
        path="/saved-listings"
        element={
          <RequireAuth>
            <SavedListings />
          </RequireAuth>
        }
      />
      <Route
        path="/favourites"
        element={
          <RequireAuth>
            <Favourites />
          </RequireAuth>
        }
      />
      <Route
        path="/my-profile"
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />

      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
