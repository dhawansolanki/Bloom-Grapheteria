import React from 'react'
import "./styles/navbar.css"

function Navbar() {
  return (
    <nav>
    <img src="./images/Logo.png" alt="logo" class="logo" />
    <ul>
        <li><a href="#">Work</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Reviews</a></li>
        <li><a href="#">Services</a></li> 
        <li><a href="#">Contact</a></li>
    </ul>
</nav>
  )
}

export default Navbar