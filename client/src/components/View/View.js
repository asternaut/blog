import React from 'react';
import {heroTitle, detailsSpan, heroMood, heroAuthor, postBody, card} from '../List/Card/listNcard.css'
import {Link} from 'react-router';

const View = (props) => {
  console.log(props);
  return(
    <div>
      <h1> Selected Post (View Page) </h1>
      <div> {props.article._id} </div>
      <div className={card}>
        <img src={props.article.img} />
        <div className={heroTitle}> {props.article.title} </div>
        <div className={detailsSpan}>
          <div className={heroMood}> mood: {props.article.moodRN} |</div>
          <div className={heroAuthor}> written by: {props.article.author} </div>
        </div>
        <div className={postBody}> {props.article.body} </div>
        <button> <Link to={`/edit`}> Edit </Link> </button>
      </div>
    </div>
  )
}

export default View
