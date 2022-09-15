import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import "./infocards.css";
import Income from "../revenue.png";
import Spending from "../spending.png";
import Profit from "../assets.png";
import Users from "../man.png";
const InfoCards = () => {
  return (
    <div className="InfoCards">
      <div className="InfoItem">
        <div className="InfoIcon">
          <img src={Income} className="InfoImg" />
        </div>
        <div className="InfoText">
          <p>Total Income</p>
          <h3>5,60,000</h3>
        </div>
      </div>
      <div className="InfoItem">
        <div className="InfoIcon">
          <img src={Spending} className="InfoImg" />
        </div>
        <div className="InfoText">
          <p>Costs</p>
          <h3>3,00,000</h3>
        </div>
      </div>
      <div className="InfoItem">
        <div className="InfoIcon">
          <img src={Profit} className="InfoImg" />
        </div>
        <div className="InfoText">
          <p>Profit</p>
          <h3>2,60,000</h3>
        </div>
      </div>
      <div className="InfoItem">
        <div className="InfoIcon">
          <img src={Users} className="InfoImg" />
        </div>
        <div className="InfoText">
          <p>User Base </p>
          <h3>100,000</h3>
        </div>
      </div>
    </div>
  );
};

export default InfoCards;
