import React from "react";
import { fontWeight } from "tailwindcss/defaultTheme";

function ContactHeading() {
  return (
    <h1
      style={{
        marginTop: "30px",
        textAlign: "center",
        fontFamily: "sans-serif",
        fontWeight: "bold",
        fontSize: "revert",
        paddingTop: "65px",
      }}
    >
      Contact Us
    </h1>
  );
}

export default ContactHeading;
