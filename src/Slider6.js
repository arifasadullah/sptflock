import React from "react";
import "./Slider6.css";
import image1 from "./01.jpeg";
import image2 from "./2.png";
import image3 from "./3.png";
import image4 from "./4.jpeg";
import image5 from "./5.png";

const Slider6 = () => {
  return (
    <div className="slider6">
      <div className="heading_client">
        <h1 className="black-line">Delighted Clients</h1>
        <div className="dash"></div>
      </div>
      <div className="image-slider">
        <img src={image1} alt="img1" />
        <img src={image2} alt="img2" />
        <img src={image3} alt="img3" />
        <img src={image4} alt="img4" />
        <img src={image5} alt="img5" />
      </div>
    </div>
  );
};

export default Slider6;
