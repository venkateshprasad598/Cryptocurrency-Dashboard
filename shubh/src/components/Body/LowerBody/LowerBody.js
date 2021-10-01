import React from "react";
import LowerBodyLeft from "../LowerBodyLeft/LowerBodyLeft";
import LowerBodyRight from "../LowerBodyRight/LowerBodyRight";
import "./LowerBody.css";

const LowerBody = () => {
  return (
    <div className="lowerBody">
      <LowerBodyLeft />
      <LowerBodyRight />
    </div>
  );
};

export default LowerBody;
