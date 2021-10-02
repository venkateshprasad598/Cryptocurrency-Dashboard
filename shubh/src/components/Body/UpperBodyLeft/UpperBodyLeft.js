import React from "react";
import "./UpperBodyLeft.css";
import BottomLeft from "../BottomLeft/BottomLeft";
import BottomRight from "../BottomRight/BottomRight";
import BottomRightMarket from "../BottomRightMarket.js/BottomRightMarket";
import Icons from "../Icons/Icons";
import Search from "../Search/Search";
// KJECNSJCN
const UpperBodyLeft = () => {
  return (
    <div className="upperBodyLeft">
      <div className="upperBodyLeft__top">
        <Icons />
        <Search />
      </div>

      <p className="upperBodyLeft__overview">Overview</p>
      <div className="upperBodyLeft__bottom">
        <BottomLeft />
        <BottomRight />
        <BottomRightMarket />
      </div>
    </div>
  );
};

export default UpperBodyLeft;
