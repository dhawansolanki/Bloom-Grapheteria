import React from 'react'
import "./styles/contact.scss"

function Contact() {
  return (
    <div class="container d-flex justify-content-center align-items-center">
		<img src="Images/Contact.png" alt="Bloom The Grapheteria" class="Contactus" />  
	<form className='contactform'>
			<div class="form-group position-relative">
				<label for="formName" class="d-block">
					<i class="icon" data-feather="user"></i>
				</label>
				<input type="text" id="formName" class="form-control form-control-lg thick" placeholder="Enter your Name"/>
			</div>
			<br/>
			<div class="form-group position-relative">
				<label for="formEmail" class="d-block">
					<i class="icon" data-feather="mail"></i>
				</label>
				<input type="email" id="formEmail" class="form-control form-control-lg thick" placeholder="Enter your Email"/>
			</div>
		<br/>
			<div class="form-group message">
				<textarea id="formMessage" class="form-control form-control-lg" rows="15" placeholder=""></textarea>
			</div>
			<br/>
			<div class="text-center">
				<button type="submit" class="btn btn-primary" tabIndex="-1">Submit</button>
			</div>
	</form>
	
</div>
  )
}

export default Contact