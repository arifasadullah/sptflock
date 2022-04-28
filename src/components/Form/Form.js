import React from "react";
import "./Form.css";

const Form = () => {
  return (
    <form className="container">
      <label for="fname">Your Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your Name" />
      <label for="lname">Your email address</label>
      <input type="email" placeholder="Your email address" />
      <label for="lname">Subject</label>
      <input type="text" placeholder="Subject" />
      <textarea name="textarea" rows="10" cols="50">
        Your message
      </textarea>

      <input type="submit" value="Submit" />
    </form>
  );
};

export default Form;
