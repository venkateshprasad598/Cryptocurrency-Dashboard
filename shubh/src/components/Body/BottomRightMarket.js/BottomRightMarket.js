import React from "react";
import market from "../../data/marketData";
import "./BottomRightMarket.css";

const BottomRightMarket = () => {
  // COMMENT - CALLING DATA FROM data AND DISPLAYING FIVE COMPANIES MARKET VALUE
  return (
    <div className="bottomRightMarket">
      {market.map((data) => {
        const { id, img, name, category, price, time, color } = data;
        return (
          <div className="bottomRightMarket__allInfo" key={id}>
            <div className="bottomRightMarket__info">
              <img
                src={img}
                alt="markey_img"
                className="bottomRightMarket__img"
              />
              <div className="bottomRightMarket__name">
                <h3 className="name">{name}</h3>
                <p className="nameUnderLine">{category}</p>
              </div>
            </div>
            <div className="bottomRightMarket__price">
              <h3 className="name" style={{ color: color }}>
                {price}
              </h3>
              <p className="nameUnderLine">{time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BottomRightMarket;
