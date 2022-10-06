import React from 'react';
import ListItem from './ListItem';

function MyList(props) {
  let newTodo = props.theList.map((item, index) => {
    return(
      <ListItem task={item} key={index} />
    )
  });
  return (
    <div>
      <h1>Things I should stop procrastinating:</h1>
      <h2>
        {newTodo}
      </h2>
    </div>
  );
}

export default MyList;