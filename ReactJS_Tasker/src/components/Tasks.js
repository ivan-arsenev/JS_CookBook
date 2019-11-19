import React from "react";

import Task from "../components/Task";
const Tasks = ({ tasks, folders, onToggleDone }) => {
  const element = tasks.map(el => {
    let folder = folders.find(val => val.id === el.folder_id);
    const { id, ...itemProps } = el;

    return (
      <Task
        key={id}
        {...itemProps}
        folder_color={folder.folder_color}
        onToggleDone={() => onToggleDone(id)}
      />
    );
  });

  return <ul className="icons">{element}</ul>;
};

export default Tasks;
