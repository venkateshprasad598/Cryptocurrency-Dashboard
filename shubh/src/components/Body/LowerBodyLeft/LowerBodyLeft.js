import React from "react";
import "./LowerBodyLeft.css";
import security from "../../data/Security";
const LowerBodyLeft = () => {
  return (
    <div className="lowerBodyLeft">
      <h1>Security</h1>
      <div className="lowerBodyLeft__details">
        {security.map((data) => {
          const { id, name, subName, icon } = data;
          return (
            <div key={id} className="lowerBodyLeft__info">
              <div>
                <h3>{name}</h3>
                <p>{subName}</p>
              </div>
              {icon}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LowerBodyLeft;
