import React from 'react';
import {Link} from 'react-router';

const NavBar = (props) =>
  <div>
    <nav>
      <ul>
        <li> <Link to="/home"> Home </Link> </li>
        <li> <Link to="/list"> All Posts </Link> </li>
        <li> <Link to="/login"> Log In </Link> </li>
        <li> <Link to="/signup"> Sign Up </Link> </li>
      </ul>
    </nav>
  </div>

  export default NavBar;
