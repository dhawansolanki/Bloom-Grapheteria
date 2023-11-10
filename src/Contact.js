import React from "react";
import "./styles/contact.scss";

function Contact() {
  return (
    <div class="container d-flex justify-content-center align-items-center">
      <img
        src="./images/Contact.png"
        alt="Bloom The Graphetira"
        class="Contactus"
      />
      <form class="contactform" action="https://formspree.io/f/xknlgjne">
        <div class="form-row">
          <div class="form-group col">
            <h1 class="contactlabeltext">Name</h1>
            <br />
            <br />
            <h1 class="contactlabeltext">Email</h1>
            <br />
            <br />
            <h1 class="contactlabeltext">Service</h1>
            <br />
            <h1 class="contactlabeltext">Message</h1>
          </div>
          <div class="form-group col">
            <input
              type="text"
              id="formName"
              class="form-control form-control-lg thick"
              placeholder="Enter your Name"
            />
            <br />
            <input
              type="email"
              id="formEmail"
              class="form-control form-control-lg thick"
              placeholder="Enter your Email"
            />
            <br />
            <input
              type="text"
              id="formService"
              class="form-control form-control-lg thick"
              placeholder="Enter Service"
            />
            <br />
            <textarea
              id="formMessage"
              class="form-control form-control-lg"
              rows="10"
              placeholder=""
            ></textarea>
            <br />
          </div>
        </div>
        <div class="text-right">
          <button
            type="submit"
            class="btn btn-primary contactsubmitbtn"
            tabIndex="-1"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
