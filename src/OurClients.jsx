import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Container } from "postcss";
import "./OurClients.css";

function OurClients() {
  return (
    <div className="container">
      <OwlCarousel
        className="owl-theme"
        loop
        margin={12}
        nav
        items={6}
        style={{ marginLeft: "198px" }}
      >
        <div className="item">
          <img src="/images/disney.png" alt="" style={{ width: "100px" }} />
        </div>

        <div className="item">
          <img src="/images/addidas.png" alt="" style={{ width: "100px" }} />
        </div>
        <div className="item">
          <img src="/images/boss.png" alt="" style={{ width: "100px" }} />
        </div>
        <div className="item">
          <img src="/images/gucci.png" alt="" style={{ width: "100px" }} />
        </div>
        <div className="item">
          <img src="/images/addidas.png" alt="" style={{ width: "100px" }} />
        </div>
        <div className="item">
          <img src="/images/addidas.png" alt="" style={{ width: "100px" }} />
        </div>
        <div className="item">
          <img src="/images/addidas.png" alt="" style={{ width: "100px" }} />
        </div>
        <div className="item">
          <img src="/images/addidas.png" alt="" style={{ width: "100px" }} />
        </div>
        <div className="item">
          <img src="/images/addidas.png" alt="" style={{ width: "100px" }} />
        </div>
        <div className="item">
          <img src="/images/addidas.png" alt="" style={{ width: "90px" }} />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default OurClients;
