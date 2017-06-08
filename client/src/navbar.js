import React from 'react';
import {nav} from './App.css';
import {Link} from 'react-router';

const NavBar = (props) =>
  <div>
    <nav className={nav}>
      <ul>
        <li> <Link to="/home"> Home </Link> </li>
        <li> <Link to="/list"> Posts </Link> </li>
        <li> <Link to="/about"> Portfolio </Link> </li>
        <li> <Link to="/login"> Log In </Link> </li>
        <li> <Link to="/signup"> Sign Up </Link> </li>
      </ul>
    </nav>
  </div>

  export default NavBar;
