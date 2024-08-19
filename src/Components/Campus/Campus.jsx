import React from 'react'
import './Campus.css'
import gallery_1  from '../../assets/gal1.jpg'
import gallery_2  from '../../assets/gal2.jpg'
import gallery_3  from '../../assets/gal3.webp'
import gallery_4  from '../../assets/gal4.webp'
import white_aarow from '../../assets/aarow.jpg'

const Campus = () => {
  return (
    <div className='campus'>
        <div className='gallery'> 
            <img src= {gallery_1} alt="" />
            <img src= {gallery_2} alt="" />
            <img src= {gallery_3} alt="" />
            <img src= {gallery_4} alt="" />




        </div>
        <button className='btn'>See more here <img src={white_aarow } alt="" /></button>
        
      
    </div>
  )
}
  
export default Campus
