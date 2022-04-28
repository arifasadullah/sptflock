import React from "react";
import Card from "../../UI/Card/Card";
import "./Offering.css";

const Offering = () => {
  return (
    <div className="card_container">
      <div className="card_wrapper">
        <div className="small_cicle">
          <p className="number">1</p>
        </div>
        <div className="circle"> </div>
        <div className="semi_circle"></div>
        <img
          className="offer_card_img"
          src="images/spotflock.png"
          alt="images"
        />

        <div>
          <h3 className="title">SPOTFLOCK STUDIO </h3>
          <div>
            <p className="title_desc">
              Artificial Intelligence, IoT,
              <br /> Blockchain Studio For Entreprises.
            </p>
          </div>
        </div>
      </div>
      <div className="card_wrapper">
        <div className="small_cicle">
          <p className="number">2</p>
        </div>
        <div className="circle"> </div>
        <div className="semi_circle"></div>
        <img
          className="offer_card_img"
          src="images/goflocker.png"
          alt="images"
        />

        <div>
          <h3 className="title">GOFLOCKER </h3>
          <div>
            <p className="title_desc">
              A platform to connect individuals to experts and support groups.
              Power packed with content, technology and self help tools.
            </p>
          </div>
        </div>
      </div>
      <div className="card_wrapper">
        <div className="small_cicle">
          <p className="number">3</p>
        </div>
        <div className="circle"> </div>
        <div className="semi_circle"></div>
        <img className="offer_card_img" src="images/aayu.png" />

        <div>
          <h3 className="title">AAYU AI </h3>
          <div>
            <p className="title_desc">
              Powered by Spotflock Studio. Aayu.ai has prognosis capabilities
              powered by math models of Spotflock Studio which takes in 37
              parameters from blood tests and additional 7 urine test parameters
              along with spo2, BP and ECG data to provide meaningful insights
            </p>
          </div>
        </div>
      </div>
      <div className="card_wrapper">
        <div className="small_cicle">
          <p className="number">4</p>
        </div>
        <div className="circle"> </div>
        <div className="semi_circle"></div>
        <img className="offer_card_img" src="images/coin_2x.png" />

        <div>
          <h3 className="title">COLLABORATIVE SERVICES</h3>
          <div>
            <p className="title_desc">
              We collaborate with ambitious brands and people; we’d love to
              build something great together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offering;
