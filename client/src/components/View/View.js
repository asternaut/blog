import React from 'react';
import {heroTitle, detailsSpan, heroMood, heroAuthor, postBody, card} from '../List/Card/listNcard.css'
import {Link} from 'react-router';
import {Comments} from '../../components'

const View = (props) => {
  console.log("props ", props)
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
        <button> <Link to={`/edit/${props.article._id}`}> Edit </Link> </button>
        <Link to={`/list`}> ⬅️ Back to all posts </Link>
      </div>

      <div className="Comments">
        <form>
          <textarea type="text" placeholder="add comment" onChange={(event) => props.updateText(event)}/>
          <button type="submit" onClick={(event) => props.submitComment(event, props.article._id)}> comment </button>
        </form>
        <h3> Comments </h3>
        <Comments comments={props.comments}/>
      </div>

    </div>
  )
}

export default View
