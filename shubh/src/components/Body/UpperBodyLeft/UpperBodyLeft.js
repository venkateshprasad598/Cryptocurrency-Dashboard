import React from "react";
import "./UpperBodyLeft.css";
import cryptoIcons from "../../data/cryptoIcons";
import BottomLeft from "../BottomLeft/BottomLeft";
import BottomRight from "../BottomRight/BottomRight";
import BottomRightMarket from "../BottomRightMarket.js/BottomRightMarket";
import Search from "../Search/Search";

const UpperBodyLeft = () => {
  return (
    //THIS INCLUDES WELCOME TO DASHBOARD DATA, SEARCH COMPONENT AND OVERVIEW
    <div className="upperBodyLeft">
      {/* COMMENT - WELCOME TO DASHBOARD AND SEARCH COMPONENT */}
      <div className="upperBodyLeft__allInfo">
        <div className="upperBodyLeft__info">
          <h2 className="upperBodyLeft__infoHeadLine">WELCOME TO DASHBOARD</h2>
          <div className="upperBodyLeft__icons">
            {/* COMMENT - DATA ARE BEING FETCHED FROM data FOLDER */}
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

      {/* COMMENT - DOWN HERE INCLUDES 3 COMPONENTS OF OVERVIEW 1) BOTTOM LEFT - CRYPTO IMAGE AND 2 SMALL SUB COMPONENT 2 ) BOTTOM RIGHT - WHICH SHOWS ALL FOUR TRENDING CRYPTOS 3 ) BOTTOM RIGHT MARKET - SHOWS 5 COMPANIES MARKET VALUE  */}

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
