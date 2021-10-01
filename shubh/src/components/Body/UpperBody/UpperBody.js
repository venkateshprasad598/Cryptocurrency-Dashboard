import React from "react";
import "./UpperBody.css";
import UpperBodyLeft from "../UpperBodyLeft/UpperBodyLeft";
import UpperBodyRight from "../UpperBodyRight/UpperBodyRight";
const UpperBody = () => {
  return (
    <div className="upperBody">
      <UpperBodyLeft />
      <UpperBodyRight />
    </div>
  );
};

export default UpperBody;
