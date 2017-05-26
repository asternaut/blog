import React from 'react';
import {Card} from '../../components';
import {Link} from 'react-router';

const List = (props) => {
  return(
    <div>
      <div>
        <h1> View Blog Posts </h1>

        {props.articles.map((item, index) => {
            return <Card key={index} {...item}/>
        })}

      </div>
    </div>
  )
}

export default List
