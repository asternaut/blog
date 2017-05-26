import React, {Component} from 'react';

import {Post} from '../../components';
import { browserHistory } from 'react-router';
import $ from 'jquery';

class PostContainer extends Component{

  state = {
    valid: false,
    title: undefined,
    img: undefined,
    moodRN: undefined,
    author: undefined,
    body: undefined
  }

  updateField = this.updateField.bind(this);
  updateField(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

onChange = this.onChange.bind(this);
onChange(name, value){
  this.updateField(name, value);
  this.validate();
}

validate(){
  this.setState({
    valid: (this.state.title !== undefined ) && (this.state.title !== undefined) && (this.state.img !== undefined) && (this.state.moodRN !== undefined) && (this.state.author !== undefined) && (this.state.body !== undefined)
  })
}

  handleSubmit = this.handleSubmit.bind(this);

  handleSubmit(event){
    event.preventDefault()
    console.log(this.state.title, this.state.moodRN);
    const article = {
      title:  this.state.title,
      img:    this.state.img,
      moodRN: this.state.moodRN,
      author: this.state.author,
      body:   this.state.body
    }
    $.ajax({
      url: '/api/articles',
      method: 'POST',
      data: article
    }).done((response) => {
      console.log(response);
      browserHistory.push('/post')
    })
  }


  //^^above replaces below
  // updateTitle = (event) =>  this.setState({title: event.target.value})
  // updateImg = (event) =>    this.setState({img: event.target.value})
  // updateMoodRN = (event) => this.setState({moodRN: event.target.value})
  // updateAuthor = (event) => this.setState({author: event.target.value})
  // updateBody = (event) =>   this.setState({body: event.target.value})

  render () {
    return(
      <div>
        <Post
          onChange={ this.onChange }
          handleSubmit={ this.handleSubmit }
          valid={ this.state.valid }
        />
      </div>
    )
  }
}

export default PostContainer
