import React from "react";
import "./UpperBodyLeft.css";
import cryptoIcons from "../../data/cryptoIcons";
import BottomLeft from "../BottomLeft/BottomLeft";
import BottomRight from "../BottomRight/BottomRight";
import BottomRightMarket from "../BottomRightMarket.js/BottomRightMarket";
import Search from "../Search/Search";

const UpperBodyLeft = () => {
  return (
    <div className="upperBodyLeft">
      <div className="upperBodyLeft__allInfo">
        <div className="upperBodyLeft__info">
          <h2 className="upperBodyLeft__infoHeadLine">WELCOME TO DASHBOARD</h2>
          <div className="upperBodyLeft__icons">
            {cryptoIcons.map((data) => {
              const { id, icon } = data;
              return (
                <div key={id} className="upperBodyLeft__icon">
                  <p className="upperBodyLeft__innerIcon">
                    <p className="upperBodyLeft__ico">{icon}</p>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <Search />
      </div>

      <h3 className="upperBodyLeft__overview">OVERVIEW</h3>
      <div className="upperBodyLeft__bottom">
        <BottomLeft />
        <BottomRight />
        <BottomRightMarket />
      </div>
    </div>
  );
};

export default UpperBodyLeft;
