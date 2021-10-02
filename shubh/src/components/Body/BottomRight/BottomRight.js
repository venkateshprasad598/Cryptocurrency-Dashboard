import React from "react";
import TrendingCoins from "../../data/TrendingCoins";
import "./BottomRight.css";

const BottomRight = () => {
  return (
    <div className="bottomRight">
      {TrendingCoins.map((data) => {
        const { id, name, price, backgroundColor, icon } = data;
        return (
          <div
            className="bottomRight__coins"
            key={id}
            style={{ backgroundColor: backgroundColor }}
          >
            <p className="bottomRight__coinsName">{name}</p>
            <div className="bottomRight__coinPrice">
              <h2>{price}</h2>
              {icon}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BottomRight;
