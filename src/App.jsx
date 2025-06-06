import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GetStarted from "./pages/GetStarted";
import Hub from "./pages/Hub";
import DetailedListingView from "./pages/DetailedListingView";

import Login from "./pages/Login";
import Register from "./pages/Register";
import CreateListing from "./pages/CreateListing";

import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/create-listing" element={<CreateListing />} />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/hub" element={<Hub />} />
      <Route path="/listing/:id" element={<DetailedListingView />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
