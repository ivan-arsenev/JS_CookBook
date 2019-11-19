import React from "react";
import More from "../assets/More.svg";
const Title = () => {
  return (
    <div className="title-bar">
      <h3>Today</h3>
      <button className="btn">
        <img
          className="more_button"
          src={More}
          alt="icon with icon of map"
        ></img>
      </button>
    </div>
  );
};

export default Title;
