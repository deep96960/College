import React from 'react'

import './Programs.css'
import program1 from '../../assets/program1.jpeg';
import program2 from '../../assets/program2.jpeg';
import program3 from '../../assets/program3.jpeg';
import program_icon1 from '../../assets/program_icon1.png'
import program_icon2 from '../../assets/program_icon2.png'
import program_icon3 from '../../assets/program_icon3.jpeg'

const Programs = () => {
  return (
    <div className='programs'>

      <div className='program'>
        <img src={program1} alt="" />
        <div className='caption'><img src={program_icon1 } alt="" />
        <p>Graduation Degree</p></div>
      </div>
      <div className='program'>
        <img src={program2} alt="" />
        <div className='caption'><img src={program_icon2 } alt="" />
        <p>Post Graduation Degree</p></div>
      </div>
       
      
      <div className='program'>
        <img src={program3} alt="" />
        <div className='caption'><img src={program_icon3 } alt="" />
        <p>Masters Degree</p></div>
      </div>
        
      
    </div>
  )
}

export default Programs

