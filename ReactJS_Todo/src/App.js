import React from "react";
import SearchPanel from "./components/SearchPanel";
import TodoList from "./components/TodoList";
import AppHeader from "./components/AppHeader";
import ItemStatusFilter from "./components/ItemStatusFilter";
import "./index.css";
import ItemAddForm from "./components/ItemAddForm";

export default class App extends React.Component {
  maxId = 200;
  state = {
    todoData: [
      this.createTodoItem("Make app"),
      this.createTodoItem("delete me"),
      this.createTodoItem("Write new todos")
    ],
    term: "",
    filter: "all" // active, all , done
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++
    };
  }
  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      // todoData.splice(idx, 1); // it's not correct becouse you change current state!

      let newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
      return { todoData: newArray };
    });
  };

  addItem = text => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      let newArray = [...todoData, newItem];
      return { todoData: newArray };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex(el => el.id === id);
    const olditem = arr[idx];
    const newItem = { ...olditem, [propName]: !olditem[propName] };
    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  }

  onSearchChange = term => {
    this.setState({
      term
    });
  };

  onStatusChanged = filter => {
    this.setState({
      filter
    });
  };

  search(items, term) {
    if (term.length === 0) return items;
    return items.filter(value =>
      value.label.toUpperCase().includes(term.toUpperCase())
    );
  }

  filter(items, filter) {
    switch (filter) {
      case "all":
        return items;

      case "active":
        return items.filter(item => !item.done);
      case "done":
        return items.filter(item => item.done);
      default:
        return items;
    }
  }

  render() {
    const { todoData, term, filter } = this.state;
    let visibleItems = this.filter(this.search(todoData, term), filter);

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className="todo-app">
        <AppHeader todo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatusFilter
            onStatusChange={this.onStatusChanged}
            filter={filter}
          />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
        />
        <ItemAddForm onItemCliked={this.addItem} />
      </div>
    );
  }
}
