import React from "react";
import "./LowerBodyRight.css";
import mining from "../../data/Mining";

const LowerBodyRight = () => {
  return (
    <div className="lowerBodyRight ">
      <h3>MINING STATUS</h3>
      <div className="lowerBodyRight__mining">
        {mining.map((data) => {
          const { img, name, run, color, icon, iconColor } = data;
          return (
            <div
              className={
                icon
                  ? "lowerBodyRight__miningData"
                  : "lowerBodyRight__miningData2"
              }
            >
              <img src={img} alt="" className="lowerBodyRight__img" />
              <div
                className={
                  icon ? "lowerBodyRight__iconInfo" : "lowerBodyRight__info"
                }
              >
                <div className="lowerBodyRight__data">
                  <h3>{name}</h3>
                  <p
                    className="lowerBodyRight__subName"
                    style={{ color: color }}
                  >
                    {run}
                  </p>
                </div>
                <p style={{ color: iconColor }}>{icon}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LowerBodyRight;
