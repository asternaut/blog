import React from 'react';

const Comments = (props) => {
  return(
    <div>
    {props.comments.length > 0 ?
        props.comments.map((item, index) => (
          <div key={index}>
            <div> {item.content} </div>
          </div>
        )) : <p> ain't nothin' here yet! </p>
      }
    </div>
  )
}

export default Comments
