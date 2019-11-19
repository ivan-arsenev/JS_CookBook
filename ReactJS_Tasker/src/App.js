import React from "react";
import "./App.css";

// Components imports
import Title from "./components/Title";
import Tasks from "./components/Tasks";
import Folders from "./components/Folders";
export default class App extends React.Component {
  maxId = 50;
  folderId = 1;
  state = {
    tasks: [
      this.createTask("Done this app", "7:00 pm", 2),
      this.createTask("Done this app", "7:00 pm", 3),
      this.createTask("Done this app", "7:00 pm", 3),
      this.createTask("Make bread")
    ],
    folders: [
      this.createFolder("Today"),
      this.createFolder("Home staff", "folder-green"),
      this.createFolder("Work", "folder-yellow"),
      this.createFolder("Study", "folder-red")
    ]
  };

  createTask(label, time = null, folder_id = 1) {
    return {
      label,
      done: false,
      time,
      folder_id,
      id: this.maxId++
    };
  }

  createFolder(label, folder_color = "folder-gray") {
    return {
      label,
      folder_color,
      id: this.folderId++
    };
  }

  onToggleDone = id => {
    this.setState(({ tasks }) => {
      return {
        tasks: this.toggleProperty(tasks, id, "done")
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  render() {
    const { tasks, folders } = this.state;

    return (
      <div className="container">
        <Title />
        <Tasks
          tasks={tasks}
          folders={folders}
          onToggleDone={this.onToggleDone}
        />
        <Folders folders={folders} tasks={tasks} />
      </div>
    );
  }
}
