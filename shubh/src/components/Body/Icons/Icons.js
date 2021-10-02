import React from "react";
import cryptoIcons from "../../data/cryptoIcons";
import "./Icons.css";

const Icons = () => {
  return (
    <div className="icons">
      <h2>WELCOME TO DASHBOARD</h2>
      <div className="icons__all">
        {cryptoIcons.map((data) => {
          const { id, icon } = data;
          return (
            <div key={id} className="icon">
              {icon}
            </div>
          );
        })}
        <Icons />
      </div>
    </div>
  );
};

export default Icons;
