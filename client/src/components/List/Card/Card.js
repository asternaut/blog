import React from 'react';
import {Link} from 'react-router';
import {heroTitle, detailsSpan, heroMood, heroAuthor, postBody, card} from './listNcard.css';
import $ from 'jquery';

const Card = (props) => {
  console.log(props, "this is a card");
  return(
    <div className={card}>
      <img src={props.img} />
      <div className={heroTitle}>
        <Link to={`/view/${props._id}`}> {props.title} </Link>
      </div>
      <div className={detailsSpan}>
        <div className={heroMood}> mood: {props.moodRN} |</div>
        <div className={heroAuthor}> written by: {props.author} </div>
      </div>
      <div className={postBody}> {props.body} </div>
    </div>
  )
}

export default Card
