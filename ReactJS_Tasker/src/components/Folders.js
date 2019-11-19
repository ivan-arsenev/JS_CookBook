import React from "react";
import Folder from "./Folder";
const Folders = ({ folders, tasks }) => {
  const element = folders.map(el => {
    let count = tasks.filter(val => val.folder_id === el.id).length;

    const { id, ...propItems } = el;
    return <Folder key={id} {...propItems} count={count} />;
  });

  return (
    <div className="folders">
      <p className="folder-title">Lists</p>
      <ul>{element}</ul>
    </div>
  );
};

export default Folders;
