import React from 'react'
import './Hero.css'
import aarow from '../../assets/aarow.jpg'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We Ensure better education for a better world</h1>
    <p>our cutting edge curriculum is designed to empower student with the knowledge skillls and experiance needed to excel in dynamic field od education  </p>
    <button className='btn'>Explore more <img src={aarow} alt="" /></button>
    </div>
    </div>
  )
}

export default Hero
