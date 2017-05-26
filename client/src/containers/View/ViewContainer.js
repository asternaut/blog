import React, {Component} from 'react';
import {View} from '../../components';
import $ from 'jquery';

class ViewContainer extends Component {
  state= {
    article: undefined,
    loading: true,
    comments: undefined,
  }

  submitComment = this.submitComment.bind(this);
  loadArticle = this.loadArticle.bind(this);

  componentDidMount = () => this.loadArticle()

  loadArticle(){
    $.ajax({
      url: `/api/articles/${this.props.params.articleId}`,
      method: 'GET'
    }).done((response) => {
      this.setState({
        article: response.data,
        loading: false,
        comments: response.data.comments,
      })
    })
  }

  updateText = (event) => this.setState({text: event.target.value})

  submitComment(event, _id){
    event.preventDefault();
    if(!this.state.text || this.state.text.length < 1){
      alert( "please type something" )
      return
    }
    let comment = {content: this.state.text}
    $.ajax({
      url: `/api/articles/comment/${_id}`,
      method: 'POST',
      data: comment,
    }).done((response) => {
      this.setState({text: ""}),
      this.loadArticle()
    })
  }

  render() {
    return(
      <div>
        { (!this.state.loading) ? <View
          article={ this.state.article }
          comments={this.state.comments }
          text={ this.state.text }
          updateText={ this.updateText }
          submitComment={ this.submitComment }
          />  : <p> One moment! </p> }
      </div>
    )
  }
}

export default ViewContainer
