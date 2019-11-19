import React from "react";

const Folder = ({ label, count }) => {
  return (
    <li className="folders-item">
      <h3>{label}</h3>
      <h4>{`${count} tasks`}</h4>
    </li>
  );
};

export default Folder;
