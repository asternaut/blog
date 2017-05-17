import React from 'react';
import {Card} from './Card/Card';
import {Link} from 'react-router';

const List = (props) => {
  return(
    <div>
      <h1> View Blog Posts </h1>
      {props.entry.map((item, index) => {
        return(
          <Card key={index} {...item}/>
        )
      })}
      <Link to={`/edit`}> Edit </Link>
    </div>
  )
}

export default List
