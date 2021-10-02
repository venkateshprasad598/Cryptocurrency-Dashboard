import React from "react";
import Device from "./ActiveDevice/Device";
import "./Navigation.css";
import SLideBar from "./SlideBar/SLideBar";
import UserImage from "./SlideBar/UserImage/UserImage";

const Navigation = () => {
  return (
    <div className="navigation">
      <SLideBar />
      <Device />
      <UserImage />
    </div>
  );
};

export default Navigation;
