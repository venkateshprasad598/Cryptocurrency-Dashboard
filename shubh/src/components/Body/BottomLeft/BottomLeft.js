import React from "react";
import "./BottomLeft.css";
import walletData from "../../data/walletData";

const BottomLeft = () => {
  return (
    <div className="bottomLeft">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwyR1sVLoEyZDW7dx0ipAacnsHfZawwDJ8mw&usqp=CAU"
        alt="BitcoinImg"
        className="bottomLeft__img"
      />
      <div className="bottomLeft__wallet">
        {walletData.map((data) => {
          const { id, wallet, balance, icon, color } = data;
          return (
            <div key={id} className="bottomLeft__walletInfo">
              <p>{wallet}</p>
              <h2>{balance}</h2>
              <p style={{ color: color }}> {icon}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BottomLeft;
