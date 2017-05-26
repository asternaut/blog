import React from 'react';
//import {postForm} from './post.css';

const Post = (props) => {
  return(
    <div>
      <h1> Post  </h1>
      <div className="postForm">
        <form onSubmit={(event) => props.handleSubmit(event)}>

          <input onChange={(event) => props.onChange("title", event.target.value)} type="text" placeholder="blog title"/>

          <input onChange={(event) => props.onChange("img", event.target.value)} type="text" placeholder="image URL" />

          <input onChange={(event) => props.onChange("moodRN", event.target.value)} type="text" placeholder="how you're feeling" />

          <input onChange={(event) => props.onChange("author", event.target.value)} type="text" placeholder="who are you?" />

          <textarea onChange={(event) => props.onChange("body", event.target.value)} type="text" />
          <button disabled={!props.valid} type="submit"> post </button>
        </form>
      </div>
    </div>
  )
}

export default Post
