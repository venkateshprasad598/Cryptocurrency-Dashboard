import React from "react";
import TrendingCoins from "../../data/TrendingCoins";
import "./BottomRight.css";

const BottomRight = () => {
  return (
    // CCOMMENT - CALLING ALL DATA FROM data FOLDER AND DISPLAYING FOUR TRENDING COINS.
    <div className="bottomRight">
      {TrendingCoins.map((data) => {
        const { id, name, price, backgroundColor, icon } = data;
        return (
          <div
            className="bottomRight__coins"
            key={id}
            style={{ backgroundColor: backgroundColor }}
            key={id}
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
