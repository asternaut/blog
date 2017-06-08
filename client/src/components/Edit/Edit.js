import React from 'react';

const Edit = (props) => {
  return(
    <div>
      <h1> Edit </h1>
      <form onSubmit={props.handleSubmit}>
        <label> Image </label>
        <input type="text" value={props.img} placeholder="image url" onChange={(event) => props.updateField('img', event.target.value)} />
        <label> Title </label>
        <input type="text" value={props.title} onChange={(event) => props.updateField('title', event.target.value)} />
        <label> Mood </label>
        <input type="text" value={props.moodRN} onChange={(event) => props.updateField('moodRN', event.target.value)} />
        <label> Author </label>
        <input type="text" value={props.author} onChange={(event) => props.updateField('author', event.target.value)} />
        <textarea type="text" value={props.body} onChange={(event) => props.updateField('body', event.target.value)} />
        <button type="submit"> update </button>
      </form>
      <button> delete </button>
    </div>
  )
}

export default Edit
