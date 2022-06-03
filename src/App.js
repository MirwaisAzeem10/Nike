import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import React from "react";
// import ReactDOM from "react-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import MyCarousel from "./MyCarousel";
import Card from "./Card";
import "flowbite";
import Footer from "./Footer";
import Contact from "./Contact";
import AboutHeading from "./AboutHeading";
import ContactHeading from "./ContactHeading";
// import Pagination from "./Pagination";
import CardHeading from "./CardHeading";
import OurClients from "./OurClients";
import OurHeading from "./OurHeading";
import ThankYou from "./ThankYou";
import Error from "./Error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Header" element={<Header />} />
        <Route path="/MyCarousel" element={<MyCarousel />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/AboutHeading" element={<AboutHeading />} />
        <Route path="/ContactHeading" element={<ContactHeading />} />
        <Route path="/OurClients" element={<OurClients />} />
        <Route path="/OurHeading" element={<OurHeading />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/CardHeading" element={<CardHeading />} />
        <Route path="/ThankYou" element={<ThankYou />} />
        <Route path="*" element={<Error />} />

        {/* <Redirect to="/thankyou" element={ThankYou} /> */}
      </Routes>
    </Router>
  );
}

export default App;
