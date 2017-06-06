import React from 'react';
import {Link} from 'react-router';

const SignUpForm = (props) => {
  return(
    <div>
      <h1> Sign Up </h1>
      <form>
        <input type="email" placeholder="email" onChange={(event) => props.updateField("email", this.target.value)} />
        <input type="password" placeholder="password" onChange={(event) => props.updateField("password", this.target.value)} />
        <button type="button" onClick={(event) => props.handleSubmit(event)}> sign up </button>
        <Link to={'/login'}> log in </Link>
      </form>
    </div>
  )
}

export default SignUpForm;
