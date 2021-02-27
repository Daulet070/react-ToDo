import React, {Component} from 'react';

import { AppHeader } from '../app-header';
import { TodoList } from '../todo-list';
import { SearchPanel } from '../search-panel';
import { ItemStatusFilter } from '../item-status-filter';
import { ItemAddForm } from '../item-add-form';

import './app.css';

class App extends Component {
  
  maxId = 100;

  state = {
    todoData: [
      { label: 'Drink Coffe', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 },
    ]
  };
  
  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      
      const idx = todoData.findIndex((el) => el.id === id);
      
      const newArray = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      }
    });
  };
  
  addItem = (someText) => {
      const newItem = {
        label: someText,
        important: false,
        id: this.maxId++
      };

      this.setState(({ todoData }) => {
        const newArr = [
          ...todoData, 
          newItem
        ];
  
        return {
          todoData: newArr
        }
      });
  };
  
  onToggleImportant = (id) => {
    console.log('Toggle imp', id)
  };
  
  onToggleDone = (id) => {
    console.log('Toggle done', id)

  };
  
  render() {

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
        </div>
        <TodoList 
          todos={this.state.todoData}
          onDeleted={ this.deleteItem }
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <ItemAddForm onAddItem={ this.addItem } />
      </div>
    );

  };
  
};

export { App };