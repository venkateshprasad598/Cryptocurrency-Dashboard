import React from "react";
import { FaBitcoin } from "react-icons/fa";
import "./UpperBodyRight.css";

const UpperBodyRight = () => {
  return (
    <div className="UpperBodyRight">
      <h1 className="UpperBodyRight__search">Search</h1>
      <form className="UpperBodyRight__form">
        <input type="text" className="UpperBodyRight__input" />
        <FaBitcoin />
      </form>

      <div></div>
    </div>
  );
};

export default UpperBodyRight;
