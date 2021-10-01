import React from "react";
import "./Body.css";
import UpperBody from "./UpperBody/UpperBody";
import LowerBody from "./LowerBody/LowerBody";

const Body = () => {
  return (
    <div className="body">
      <UpperBody />
      <LowerBody />
    </div>
  );
};

export default Body;
