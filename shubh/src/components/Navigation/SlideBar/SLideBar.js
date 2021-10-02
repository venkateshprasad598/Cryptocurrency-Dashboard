import React from "react";
import "./SlideBar.css";
import slide from "../../data/NavigationData/slidedata";

const SLideBar = () => {
  return (
    <div className="slidebar">
      {slide.map((data) => {
        const { id, name, icon } = data;
        return (
          <div className="slidebar__info" key={id}>
            <p className="slidebar__icon">{icon}</p>
            <h4 className="slidebar__name">{name}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default SLideBar;
