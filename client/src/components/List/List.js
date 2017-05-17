import React from 'react';

const List = (props) => {
  return(
    <div>
      <h1> View Blog Posts </h1>
      {props.entry.map(() => {})}
    </div>
  )
}

export default List
