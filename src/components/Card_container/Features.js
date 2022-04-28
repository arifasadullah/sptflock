import React, { Fragment } from "react";
import Card from "../../UI/Card/Card";
import "./Features.css";
import { VscLayers } from "react-icons/vsc";
import { BsGear } from "react-icons/bs";
import { GiArcheryTarget } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";

const Features = () => {
  return (
    <Fragment className="cont">
      <div className="title__11">
        <div className="heading__1">Salient Features</div>
        <h3 class="sub_heading__1">Competitive Advantage </h3>
        <div class="h-gap">
          <i></i>
        </div>
      </div>
      <div className="card_container__1">
        <Card className="card_wrapper__1">
          <VscLayers className="icon__1" />
          <div>
            <h3 className="card_title__1">Best of Breed Platform</h3>
            <div className="desc__1">
              Request, Enable, Deploy from Any AI Platform Under Common Coding
              Standard
            </div>
          </div>
        </Card>

        <Card className="card_wrapper__1">
          <BsGear className="icon__1" />
          <div>
            <h3 className="card_title__1">Across the board learning</h3>
            <div className="desc__1">
              Spotflock Studio offers decentralised learning and models as a
              service - IBM Waston to H2O
            </div>
          </div>
        </Card>
        <Card className="card_wrapper__1">
          <GiArcheryTarget className="icon__1" />
          <div>
            <h3 className="card_title__1">Autonomy</h3>
            <div className="desc__1">
              Request, Enable, Deploy from Any AI Platform Under Common Coding
              Standard
            </div>
          </div>
        </Card>
        <Card className="card_wrapper__1">
          <RiTeamLine className="icon__1" />
          <div>
            <h3 className="card_title__1">Co-Development</h3>
            <div className="desc__1">
              Spotflock offers co-development services. Our Data Scientist work
              with team of clients to achieve the difficult.
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default Features;
