import React, {Component} from 'react';

import {View} from '../../components';
//import { browserHistory } from 'react-router';
import $ from 'jquery';

class ViewContainer extends Component {
  state= {
    article: undefined,
    loading: true,
  }

  componentDidMount = () => this.loadArticle()

  loadArticle(){
    console.log(this.props.params);
    $.ajax({
      url: `/api/articles/${this.props.params.articleId}`,
      method: 'GET'
    }).done((response) => {
      this.setState({article: response.data, loading: false})
      console.log("RESPONSE ", response);
    })
  }

  render() {
    return(
      <div>
        { (!this.state.loading) ? <View article={ this.state.article }/> : <p> One moment! </p> }
      </div>
    )
  }
}

export default ViewContainer
