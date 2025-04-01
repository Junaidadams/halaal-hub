import "./index.css";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Faq from "./pages/Faq";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import NoPage from "./pages/NoPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
};

export default App;
