import React, {Component} from 'react';
import $ from 'jquery';
import {List} from '../../components';

class ListContainer extends Component {
  state={
    article: undefined
  }

  componentDidMount = () => this.loadArticles()

  loadArticles(){
    $.ajax({
       url: '/api/articles',
       method: 'GET'
     }).done((response) => {
       this.setState({articles: response.data})
     console.log(response.data);
     })
  }

  render () {
    return(
      <div className="list-container">
        { this.state.article ? <List article={ this.state.article }/> : <p> Error! Bummer :( </p> }
      </div>
    )
  }
}

export default ListContainer
