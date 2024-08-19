import React from 'react'
import './About.css'
import about_img from '../../assets/Student.jpg'
import play_icon from '../../assets/playicon.png'

const About = () => {
  return (
    <div className='about'>
        <div className='about-left'>
        <img src={about_img } alt="" className='about-img' />
        <img src={play_icon} alt="" className='play-icon' />
        </div>
        <div className='about-right'>
              <h3>ABOUT UNIVERSITY</h3>
              <h2>Nurturing Tomorros leaders Today</h2>

          <p>sbdbe iuwhdeuiewdd ksd iuehedui jbjebde jejedub siueudh kjsjbedkjb ebdsubc jebcsiu hbbcjs jsbdkjcb </p>
            <p>jbs sjbd jsd kjhds kjajskjd kjskjd kjh jjjhh shd ahd kjhad kjjasddb</p>
            <p>isebdd jnzd oia doas do adoidd ooijjw ihf ihef kuuhsefkj uiue kia fkuhearf </p>
        </div>
     
      
    </div>
  )
}

export default About
