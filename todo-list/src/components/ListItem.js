import React from 'react';


function ListItem(props) {
  return (
    <li>{props.task}<button onClick={() => props.removeItem(props.index)}>Remove</button></li>
  );
}

export default ListItem;
