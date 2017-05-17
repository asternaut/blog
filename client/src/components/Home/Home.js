import React from 'react';

import {largeButton} from './styles.css'

const Home = (props) => {
  return (
    <div>
      <h1> Hey, from Home Component </h1>
      <button className={largeButton} type='button'> Click </button> 
    </div>
  )
}

export default Home
