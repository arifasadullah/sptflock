import React from "react";
import "./App.css";
import Slider from "./Slider";
import Slider2 from "./Slider2";
import Slider3 from "./Slider3";
import Slider4 from "./Slider4";
import Slider5 from "./Slider5";
import Slider6 from "./Slider6";
import Offering from "./components/Offering/Offering";
import Footer from "./components/Footer/Footer";
import Details from "./components/Details/Details";
import Blog from "./components/Blog/Blog";
import Features from "./components/Card_container/Features";
const App = () => {
  return (
    <div id="main">
      <Slider />
      <Slider2 />
      <Slider3 />
      <Slider4 />
      <Offering />
      <Features />
      <Slider5 />
      <Blog />
      <Slider6 />
      <Details />
      <Footer />
    </div>
  );
};

export default App;
