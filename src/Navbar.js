import React from 'react'
import "./styles/navbar.css"

function Navbar() {
  return (
    <nav>
    <a href='#home'>
      <img src="./images/Logo.png" alt="logo" class="logo" />
    </a>
    <ul>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About us</a></li>
        {/* <li><a href="#reviews">Reviews</a></li> */}
        <li><a href="#services">Services</a></li> 
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
  )
}

export default Navbar