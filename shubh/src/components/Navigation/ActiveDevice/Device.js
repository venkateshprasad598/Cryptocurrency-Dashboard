import React from "react";
import "./Device.css";
import device from "../../data/NavigationData/ActiveDevice";

const Device = () => {
  return (
    <div className="device">
      <h4>ACTIVE DEVICE</h4>
      <div className="devices">
        {device.map((data) => {
          const { id, name, subName, iconOne, iconTwo, dot, color } = data;
          return (
            <div className="device__info" key={id}>
              <p className="device__type">{iconOne}</p>
              <div className="device__names">
                <div>
                  <h5>{name}</h5>
                  <div className="device__active">
                    <p style={{ color: color }}>{dot}</p>
                    <h6>{subName}</h6>
                  </div>
                </div>
                {iconTwo}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Device;
