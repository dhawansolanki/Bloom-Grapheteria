import React from 'react'

function Footer() {
  return (
    <div>
    <footer>
    <div class="footer-row">
      <div class="footer-item">
        <img src="./images/Icon review.png" alt="Image 1"/>
        <img src="./images/Icon review.png" alt="Image 2"/>
        <img src="./images/Icon review.png" alt="Image 3"/>
        <h4>Name</h4>
      </div>
    </div>
    <div class="footer-row">
      <div class="footer-item">
        <h4>Shape your Dreams here</h4>
      </div>
    </div>
    <div class="footer-row">
      <div class="footer-item">
        <div class="column">
          <h5>Email</h5>
          <p>example@example.com</p>
        </div>
        <div class="column">
          <h5>Contact Number</h5>
          <p>+1 1234567890</p>
        </div>
        <div class="column">
          <h5>Address</h5>
          <p>123 Street, City, Country</p>
        </div>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer