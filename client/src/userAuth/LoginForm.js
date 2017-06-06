import React from 'react';
import {Link} from 'react-router';

const LoginForm = (props) => {
  return(
    <div>
      <h1> Log In </h1>
      <form>
        <h1> login </h1>
        <input type="email" placeholder="email" onChange={(event) => props.updateField("email", event.target.value)} />
        <input type="password" placeholder="password" onChange={(event) => props.updateField("password", event.target.value)} />
        <button type="button" onClick={(event) => props.handleSubmit(event)}> login </button>
        <Link to={'/signup'}> sign up </Link>
      </form>
    </div>
  )
}

export default LoginForm;
