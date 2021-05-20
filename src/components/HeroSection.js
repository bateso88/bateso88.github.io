import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1>WELCOME!</h1>
      <p>Feel free to browse my portfolio</p>
      <div className="hero-btns">
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          PROJECTS
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
