import React from 'react';

const Card = (props) => {
  return(
    <div className="card">
      <img src={props.img} />
      <div className="hero-title"> {props.title} </div>
      <div className="hero-mood"> {props.moodRN} </div>
      <div className="hero-author"> {props.author} </div>
      <div className="post-body"> {props.body} </div>
    </div>
  )
}

export default Card
