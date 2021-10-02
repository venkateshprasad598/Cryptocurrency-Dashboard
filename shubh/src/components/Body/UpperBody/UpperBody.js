import React from "react";
import "./UpperBody.css";
import UpperBodyLeft from "../UpperBodyLeft/UpperBodyLeft";

// UPPER BODY INCLUDES - WELCOME TO DASHBOARD, SEARCH AND OVERIEW
const UpperBody = () => {
  return (
    <div className="upperBody">
      <UpperBodyLeft />
    </div>
  );
};

export default UpperBody;
