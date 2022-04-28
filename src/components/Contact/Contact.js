import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div>
        <h3 className="address">
          Plot No. 20, 3rd Floor, Image Gardens Rd,
          <br />
          VIP Hills, Silicon Valley,
          <br />
          Madhapur, Hyderabad,
          <br />
          Telangana 500081
        </h3>
      </div>
      <div className="h-gap">
        <i></i>
      </div>
      <div class="contact-info">
        <span className="email_phone">Email:</span> connect@spotflock.com
        <br />
        <span className="email_phone">Phone:</span> +91 40 6814 4531
      </div>
      <div class="wpb_wrapper">
        <p>
          Having trouble? Find the answer to your query here. Don’t hesitate to
          contact us!
        </p>
      </div>
    </div>
  );
};

export default Contact;
