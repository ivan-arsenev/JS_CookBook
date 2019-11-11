import React from 'react';
import ReactDOM from 'react-dom';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import AppHeader from './components/AppHeader';
import ItemStatusFilter from './components/ItemStatusFilter';
import './index.css';
const App = () => {
  const todoData = [
    { label: 'Dring coffee', important: false, id: 1 },
    { label: 'Make some notes about React', important: true, id: 2 },
    { label: 'Eating diner', important: false, id: 3 }
  ];
  return (
    <div className='todo-app'>
      <AppHeader todo={1} done={2} />
      <div className='top-panel d-flex'>
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={todoData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
