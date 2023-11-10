import React from 'react'
import Contact from './Contact'
import Services from './Services'
import Reviews from './Reviews'

function Hero() {
  return (
    <div class="container1">
    <section class="one" id='home'>
        <div class="sec1">
            <img src="./images/Main Logo and tag line.png" alt="Bloom The Grapheteria 1" class="logomain" />  
        </div>
        <div class="cdots">
        <span class="dot"></span>
        <span class="dot1"></span>
        <span class="dot2"></span>
        </div> 
    </section>  
    <section class="two">
        <div class="sec2">
            <center>
            <img src="./images/icon graphic.png" alt="Bloom The Grapheteria 2" class="icongraphic" />  
        </center>
            <div class="herotext">
                <p>
                    Introducing 
                    <h4>Bloom Grapheteria</h4>Bloom Grapheteria 
                    where creativity and strategy come together to Shape your&nbsp;
                    <span class="imps">dreams</span>  
                    &nbsp;for your business. 
                    We are a team of experienced professionals with a passion&nbsp; 
                    <span class="imps">for creating</span> &nbsp;innovative and impactful&nbsp;
                    <span class="imps">ads</span>  that help our clients 
                    stand out in their industry.
                </p>
                <p class="more">FIND MORE ABOUT US IN <span class="link">ABOUT</span> SECTION</p>
            </div>
        </div>
    </section>
    <section class="three" id='work'>

        <img src="Images/icon dreams.png" alt="Icon of Dreams" class="iconDreams" />  

        <div class="herotext1">
            <p>
                Dreams <br/> that came&nbsp;
                <span class="imps1">true</span>  
            </p>
            <p class="Deci1">Elevate your brand's visual storytelling with visually stunning and&nbsp;
                <span class="imps11">effective graphic</span>  design <br/> that captivates and 
                connects with your audience 
            </p>
        </div>

        <div class="wrapper">
            {/* <i id="left" class="fa-solid fa-angle-left">
                <img src="./images/pre arow.png" alt=""/>
            </i> */}
            <div class="carousel">
              <div class="card">
                  <div class="card-content1">
                      <img src="images/radhika foundrey.png" alt="img" draggable="false"/>
                  </div>
              </div>
              <div class="card">
                  <div class="card-content2">
                      <img src="images/tastysweets.png" alt="img" draggable="false"/>
                  </div>
              </div>
              <div class="card">
                  <div class="card-content3">
                      <img src="images/shenzhen bubble tea.png" alt="img" draggable="false"/>
                  </div>
              </div>
              <div class="card">
                  <div class="card-content4">
                      <img src="images/radhika foundrey.png" alt="img" draggable="false"/>
                  </div>
              </div>
              <div class="card">
                  <div class="card-content5">
                      <img src="images/tastysweets.png" alt="img" draggable="false"/>
                  </div>
              </div>
              <div class="card">
                  <div class="card-content6">
                      <img src="images/shenzhen bubble tea.png" alt="img" draggable="false"/>
                  </div>
              </div>
              <div class="card">
                  <div class="card-content7">
                      <img src="images/tastysweets.png" alt="img" draggable="false"/>
                  </div>
              </div>
              <div class="card">
                  <div class="card-content8">
                      <img src="images/radhika foundrey.png" alt="img" draggable="false"/>
                  </div>
              </div>
              <div class="card">
                  <div class="card-content9">
                      <img src="images/shenzhen bubble tea.png" alt="img" draggable="false"/>
                  </div>
              </div>  
              <div class="card">
                  <div class="card-content10">
                      <img src="images/tastysweets.png" alt="img" draggable="false"/>
                  </div>
              </div>
            </div>
            {/* <div class="moredreams">
                <h3>More</h3>
            </div>
            <i id="right" class="fa-solid fa-angle-right">
                <img src="./images/next arow.png" alt=""/>
            </i> */}
            
        </div>
        
    </section>
    <section class="four" id="about">
        <div class="sec4">
            <img src="Images/about us.png" alt="Bloom The Grapheteria" class="Aboutus" />  
            <div class="herotext">
                <p>
                    At [Studio Name], we believe that great design is the backbone of effective communication.
                    Our team of seasoned professionals is dedicated to creating visually stunning and strategically s
                    ound designs that help our clients stand out in today's crowded marketplace.
                </p>
                <p>
                    We specialize in [services], and have worked with a diverse range of clients, 
                    from small start-ups to large corporations. We take pride in our ability to understand the unique 
                    needs of each of our clients and develop custom solutions that are tailored to their goals and target audience.
                </p>
                <p>
                    Our designs are more than just pretty pictures, they are powerful tools that deliver results. 
                    We believe in the power of collaboration and work closely with our clients to ensure that 
                    their voice is heard throughout the design process.
                </p>
                <p>
                    At [Studio Name], we are passionate about what we do, and strive to exceed our clients' expectations at 
                    every opportunity. Let us help you take your brand to the next level.
                </p>
            </div>
        </div>
    </section>
    {/* <section class="five" id="reviews">
        <img src="./images/Icon review.png" alt="Icon of Dreams" class="iconReview" />  
        <div class="herotext2">
            <p>
                Reviews <br/> that came
                <span class="imps2">true</span>  
            </p>
            <p class="Deci2">
                Discover the benefits of our Services through the experiences of your  <br/>
                <span class="imps22">satisfied customers.</span>  
            </p>
        </div>

        <Reviews/>

    </section> */}
    <section class="six" id='services'>
        <Services/>
    </section>
    <section class="seven" id="contact">
    <Contact/>
    </section>
    <section class="eight">

    <footer>
    <div class="footer-row">
      {/* <div class="footer-item">
        <img src="./images/Icon review.png" alt="Image 1"/>
        <img src="./images/Icon review.png" alt="Image 2"/>
        <img src="./images/Icon review.png" alt="Image 3"/>
        <h4>Name</h4>
      </div> */}
    </div>
    {/* <div class="footer-row">
      <div class="footer-item">
        <h4>Shape your Dreams here</h4>
      </div>
    </div> */}
    {/* <div class="footer-row">
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
    </div> */}
  </footer>
    </section>
</div>
  )
}

export default Hero