import React from "react";
import "./LowerBodyLeft.css";
import security from "../../data/Security";
const LowerBodyLeft = () => {
  return (
    <div className="lowerBodyLeft">
      <h3>SECURITY</h3>
      <div className="lowerBodyLeft__details">
        {security.map((data) => {
          const { id, name, subName, icon, iconColor } = data;
          return (
            <div key={id} className="lowerBodyLeft__info">
              <div>
                <h5 className="lowerBodyLeft__Name">{name}</h5>
                <p className="lowerBodyLeft__subName">{subName}</p>
              </div>
              <p style={{ color: iconColor }}> {icon}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LowerBodyLeft;
