import React from "react";
import Unmarked from "../assets/Unmarked.svg";
import Marked from "../assets/Marked.svg";
import Alarm from "../assets/Alarm-1.svg";

const Task = ({
  id,
  label,
  done,
  time,
  folder_id,
  folder_color,
  onToggleDone
}) => {
  let folderClass = `icon__folder ${folder_color}`;
  let markIcon = Unmarked;
  let iconTop = "icon__top";
  if (done) {
    markIcon = Marked;
    iconTop += " done";
  }

  return (
    <li key={id} className="icon">
      <img onClick={onToggleDone} src={markIcon} alt="icon with icon of map" />
      <div className="icon__info">
        <p className={iconTop}>{label}</p>
        {time && (
          <p className="icon__bottom">
            <img src={Alarm} alt="icon with icon of map" />
            {time}
          </p>
        )}

        <div className="icon__border"></div>
      </div>
      <div className={folderClass}></div>
    </li>
  );
};

export default Task;
