import React, {Component} from 'react';
import $ from 'jquery';
import {List} from '../../components';

class ListContainer extends Component {
  state={
    articles: undefined
  }

  componentDidMount = () => this.loadArticles()

  loadArticles(){
    $.ajax({
       url: '/api/articles',
       method: 'GET'
     }).done((response) => {
        let articles = response.data.reverse(); //show articles in reverse order - first entry @ top
       this.setState({articles: response.data})
     console.log(response.data);
     })
  }



  render () {
    return(
      <div className="list-container">
        { this.state.articles ? <List articles={ this.state.articles }/> : <p> One moment! </p> }
      </div>
    )
  }
}

export default ListContainer
