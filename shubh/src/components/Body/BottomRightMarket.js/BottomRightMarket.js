import React from "react";
import market from "../../data/marketData";
import "./BottomRightMarket.css";

const BottomRightMarket = () => {
  return (
    <div className="bottomRightMarket">
      {market.map((data) => {
        const { id, img, name, category, price, time } = data;
        return (
          <div className="bottomRightMarket__info" key={id}>
            <img
              src={img}
              alt="markey_img"
              className="bottomRightMarket__img"
            />
            <div>
              <h3>{name}</h3>
              <p>{category}</p>
            </div>
            <div>
              <h3>{price}</h3>
              <p>{time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BottomRightMarket;
