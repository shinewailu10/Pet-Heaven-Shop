import React from 'react';
import '../App.css';
import { Button1 } from './Button1';
import { Link } from 'react-router-dom';

import './Hero.css';

function Hero() {
  return (
    <div className='hero-container'>
      <h1>Your Cutie Companions HERE</h1>
      <p>Are you ready to baby us?</p>
      <div className='hero-btns'>
        <Button1
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
            <Link to='/Pets' className='petlist'>Pets List</Link>
        </Button1>
      </div>
    </div>
  );
}

export default Hero;