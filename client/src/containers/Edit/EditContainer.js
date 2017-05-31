import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import {Edit} from '../../components';
import $ from 'jquery';

class EditContainer extends Component {
  state = {
    isFetching: true,
    img: undefined,
    title: undefined,
    moodRN: undefined,
    author: undefined,
    body: undefined,
  }

  componentDidMount = () => this.loadArticles(); //loadArticle???

  handleSubmit=this.handleSubmit.bind(this);
  updateField=this.updateField.bind(this);
  updateField(fieldName, fieldValue) {
    const newState = {};
    newState[fieldName] = fieldValue;
    this.setState(newState);
  }

  loadArticles(){
    $.ajax({
      url:`/api/articles/${this.props.params.articleId}`,
      method: 'GET'
    }).done(response =>{
      console.log("RESPONSE", response);
      this.setState({
        img:    response.data.img,
        title:  response.data.title,
        moodRN: response.data.moodRN,
        author: response.data.author,
        body:   response.data.body,
        isFetching: false
      })
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      img:    this.state.img,
      title:  this.state.title,
      moodRN: this.state.moodRN,
      author: this.state.author,
      body:   this.state.body
    }
    $.ajax({
      url:`/api/articles/${this.props.params.articleId}`,
      method: 'PUT',
      data: data
    }).done(response => browserHistory.push(`/view/${this.props.params.articleId}`) )
  }


  render () {
    return(
      <div>
      { !this.state.isFetching ?
        <Edit
          handleSubmit={this.handleSubmit}
          updateField={this.updateField}
          img={this.state.img}
          title={this.state.title}
          moodRN={this.state.moodRN}
          author={this.state.author}
          body={this.state.body}
        /> : <h4> Oops, trying to find your data... </h4>
      }
      </div>
    )
  }
}

export default EditContainer
