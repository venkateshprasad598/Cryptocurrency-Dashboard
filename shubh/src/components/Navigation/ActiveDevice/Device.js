import React from "react";
import "./Device.css";
import device from "../../data/NavigationData/ActiveDevice";

const Device = () => {
  return (
    <div>
      <h4>ACTIVE DEVICE</h4>
      {device.map((data) => {
        const { id, name, subName, iconOne, iconTwo, color } = data;
        return <div className="device__info"></div>;
      })}
    </div>
  );
};

export default Device;
