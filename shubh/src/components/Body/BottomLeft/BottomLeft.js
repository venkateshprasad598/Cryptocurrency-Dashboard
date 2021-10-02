import React from "react";
import "./BottomLeft.css";
import walletData from "../../data/walletData";

const BottomLeft = () => {
  return (
    <div className="bottomLeft">
      <img
        src="https://previews.123rf.com/images/takasumi/takasumi1801/takasumi180100005/93977628-macro-shot-of-golden-bitcoin-btc-and-the-block-chain-background.jpg"
        alt="BitcoinImg"
        className="bottomLeft__img"
      />
      <div className="bottomLeft__wallet">
        {walletData.map((data) => {
          const { id, wallet, balance, icon, color } = data;
          return (
            <div key={id} className="bottomLeft__walletInfo">
              <p className="bottomLeft__walletName">{wallet}</p>
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
