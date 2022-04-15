import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import MyCarousel from "./MyCarousel";
import Card from "./Card";
import "flowbite";
import Footer from "./Footer";
import Contact from "./Contact";
import AboutHeading from "./AboutHeading";
import ContactHeading from "./ContactHeading";
import Pagination from "./Pagination";
import CardHeading from "./CardHeading";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MyCarousel />
    <AboutHeading />
    <CardHeading />
    <Card />
    <ContactHeading />
    <Contact />
    <Pagination />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
