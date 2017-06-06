import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {browserHistory} from 'react-router';
import $ from 'jquery';

class LoginContainer extends Component {
  state = {
    email: undefined,
    password: undefined
  }

  updateField = this.updateField.bind(this);
  updateField(field, value){
    const newState = {};
    newState[field] = value;
    this.setState(newState);
  }
  handleSubmit = this.handleSubmit.bind(this);
  handleSubmit(event){
    event.preventDefault();
    console.log("CHECK STATE: ", this.state);
    const local = {
      email: this.state.email,
      password: this.state.password
    }
    $.ajax({
      url: '/api/login',
      method: 'POST',
      data: local
    }).done((response) => (response._id) ? browserHistory.push('/show') : browserHistory.push(`/error${response.message}`));
  }

  render(){
    return(
    <div>
      <LoginForm
        updateField = {this.updateField}
        handleSubmit = {this.handleSubmit}
      />
    </div>
  )}
}

export default LoginContainer;
