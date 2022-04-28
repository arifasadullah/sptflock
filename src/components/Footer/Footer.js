import React from "react";
import "./footer.css";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="bottom-footer">
        <div className="container_footer">
          <div className="row">
            <div className="bottom-copyright">
              <p>© 2018 &#8211; 2020 SPOTFLOCK&#8482; 🇮🇳</p>
            </div>
            <div className="bottom-social">
              <label>Follow us:</label>
              <a href="https://www.facebook.com/spotflock" target="_blank">
                <FaFacebookSquare />
              </a>
              <a href="https://twitter.com/spotflock" target="_blank">
                <FaTwitterSquare />
              </a>
              <a
                href="https://in.linkedin.com/company/spotflock"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="https://instagram.com/spotflock" target="_blank">
                <FaInstagram />
              </a>
              <a
                href="https://www.youtube.com/channel/UCaT8rT_sEoDLAA4m1-IBaNg"
                target="_blank"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
