import React from "react";
import LowerBodyLeft from "../LowerBodyLeft/LowerBodyLeft";
import LowerBodyRight from "../LowerBodyRight/LowerBodyRight";
import "./LowerBody.css";

const LowerBody = () => {
  return (
    // COMMENT - LOWER BODY INCLUDES 2 COMPONENTS
    <div className="lowerBody">
      <LowerBodyLeft />
      <LowerBodyRight />
    </div>
  );
};

export default LowerBody;
