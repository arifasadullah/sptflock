import React from "react";
import Contact from "../Contact/Contact";
import Form from "../Form/Form";
import "./Details.css";

const Details = () => {
  return (
    <div className="container">
      <h3 className="heading">Let's Work Together </h3>
      <div className="h-gap">
        <i></i>
      </div>
      <div className="sub-container">
        <Contact />
        <Form />
      </div>
    </div>
  );
};

export default Details;
