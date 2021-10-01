import React from "react";
import "./UpperBodyLeft.css";
import cryptoIcons from "../../data/cryptoIcons";
import BottomLeft from "../BottomLeft/BottomLeft";
import BottomRight from "../BottomRight/BottomRight";
import BottomRightMarket from "../BottomRightMarket.js/BottomRightMarket";

const UpperBodyLeft = () => {
  return (
    <div className="upperBodyLeft">
      <h2>WELCOME TO DASHBOARD</h2>
      <div className="upperBodyLeft__icons">
        {cryptoIcons.map((data) => {
          const { id, icon } = data;
          return (
            <div key={id} className="upperBodyLeft__icon">
              {icon}
            </div>
          );
        })}
      </div>

      <p className="upperBodyLeft__overview">Overview</p>
      <div className="upperBodyLeft__bottom">
        <BottomLeft />
        <BottomRight />
        <BottomRightMarket />
      </div>
    </div>
  );
};

export default UpperBodyLeft;
