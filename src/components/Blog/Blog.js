import React from "react";
import "./Blog.css";
import Card from "../../UI/Card/Card";
import { BsCalendar } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <div className="heading_container">
        <div className="heading1">Spotflock's Spotlight</div>
        <h3 className="sub_heading">
          Trending On
          <br />
          Our <cite>Blog</cite>
        </h3>
        <div className="h-gap">
          <i></i>
        </div>
      </div>
      <div className="card_container">
        <Card className="card_wrapper">
          <img className="blog_img" src="images/react1.png" />
          <ul className="card_info_blog">
            <li>
              <BsCalendar className="icon_" />
              July 17, 2018
            </li>
            <li className="list">
              <FaUser className="icon_" />
              <i className="by">By </i>
              <a
                href="author/sridharseshadri.html"
                title="Posts by WebMaster Team"
                rel="author"
              >
                WebMaster Team
              </a>
            </li>
          </ul>
          <div className="h-gap">
            <i></i>
          </div>
          <h3 className="card_desc">
            Why is React Native a skill in demand in the industry?
          </h3>
        </Card>
        <Card className="card_wrapper">
          <img className="blog_img" src="images/server.png" />
          <ul className="card_info_blog">
            <li>
              <BsCalendar className="icon_" />
              July 17, 2018
            </li>
            <li>
              <FaUser className="icon_" />
              <i>By </i>
              <a
                href="author/sridharseshadri.html"
                title="Posts by WebMaster Team"
                rel="author"
              >
                WebMaster Team
              </a>
            </li>
          </ul>
          <div className="h-gap">
            <i></i>
          </div>
          <h3 className="card_desc">
            Sneak peek in to Serverless Architecture
          </h3>
        </Card>
      </div>
    </div>
  );
};

export default Blog;
