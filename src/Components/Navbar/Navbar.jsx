import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {

  const[sticky,setSticky]=useState(false);
  useState(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >500 ? setSticky(true):setSticky(false);
    })
  },[]);  


  return (
<nav className={`container ${sticky? `dark-nav` : ``}`} >
    <img src={logo} alt=""className='logo' />
    <ul>

<li>Home</li>
<li>Program</li>
<li>Abouth us</li>
<li>Campus</li>
<li>Testimonials</li>
<li><button className='btn'>contact us</button></li>



    </ul>
</nav>

  )
}

export default Navbar
