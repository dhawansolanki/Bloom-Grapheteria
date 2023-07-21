import React from 'react'
import "./styles/contact.scss"

function Contact() {
  return (
    <div class="container d-flex justify-content-center align-items-center">
		<img src="Images/Contact.png" alt="Bloom The Grapheteria" class="Contactus" />  
	<form className='contactform' action='https://formspree.io/f/xknlgjne'>
			<div class="form-group position-relative">
			<h1 className='contactlabeltext'>Name</h1>
				<input type="text" id="formName" class="form-control form-control-lg thick" placeholder="Enter your Name"/>
			</div>
			<br/>
			<div class="form-group position-relative">
			<h1 className='contactlabeltext'>Email</h1>
				<input type="email" id="formEmail" class="form-control form-control-lg thick" placeholder="Enter your Email"/>
			</div>
		<br/>
			<div class="form-group position-relative">
			<h1 className='contactlabeltext'>Service</h1>
				<input type="text" id="formService" class="form-control form-control-lg thick" placeholder="Enter Service"/>
			</div>
		<br/>
			<div class="form-group message">
			<h1 className='contactlabeltext'>Message</h1>
				<textarea id="formMessage" class="form-control form-control-lg" rows="10" placeholder=""></textarea>
			</div>
			<br/>
			<div class="text-center">
				<button type="submit" class="btn btn-primary contactsubmitbtn" tabIndex="-1">Submit</button>
			</div>
	</form>
	
</div>
  )
}

export default Contact