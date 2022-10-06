import React, { useState } from 'react';
import ListItem from './ListItem';

function MyList(props) {
  const [tasks, setTasks] = useState(props.theList);
  const [newItem, setNewItem] = useState('');

  const clearList = () => {
    console.log('clear list');
    setTasks([]);
  }

  const handleChange = (e) => {
    setNewItem(e.target.value);
  }

  const addItem = (e) => {
    e.preventDefault();
    let newList = tasks;
    newList.push(newItem);
    setTasks(newList);
    setNewItem('');
  }

  const removeItem = (index) => {
    index = parseInt(index);
    let newList = tasks.filter((item, idx) => {
      if(index === idx) {
        return false;
      } else {
        return true;
      }
    });
    setTasks(newList);
  }

  const renderTodoItems = () => {
    let newTodo = tasks.map((item, index) => {
      return (
        <ListItem task={item} key={`todo${index}`} index={index} removeItem={removeItem} />
      )
    });
    return newTodo;
  }

  return (
    <div>
      <h1>Things I should stop procrastinating:</h1>
      <form onSubmit={addItem}>
        <input type="text" value={newItem} onChange={handleChange} />
        <button type="submit">Add To List</button>
      </form>
      <h2>
        {renderTodoItems()}
      </h2>
      <button onClick={clearList}> CLEAR </button>
    </div>
  );
}

export default MyList;