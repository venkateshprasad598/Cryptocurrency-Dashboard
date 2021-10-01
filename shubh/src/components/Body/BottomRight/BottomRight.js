import React from "react";
import TrendingCoins from "../../data/TrendingCoins";
import "./BottomRight.css";

const BottomRight = () => {
  return (
    <div className="bottomRight">
      {TrendingCoins.map((data) => {
        const { id, name, price } = data;
        return (
          <div className="bottomRight__coins" key={id}>
            <p>{name}</p>
            <h2>{price}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default BottomRight;
